import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

export interface HotfixManifest {
    version: string;
    bundles: Record<string, string>;
}

/** 递归读取目录中的全部文件。 */
export function readAllFilesSync(dirPath: string): string[] {
    const files: string[] = [];

    for (const entry of fs.readdirSync(dirPath)) {
        const fullPath = path.join(dirPath, entry);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...readAllFilesSync(fullPath));
        } else {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * 计算目录的内容 MD5。文件路径及每个文件的内容均参与计算，因此新增、删除、
 * 重命名或修改文件都会产生新的摘要。
 */
function getFolderMd5(dirPath: string): string {
    const files = readAllFilesSync(dirPath).sort();
    const folderMd5 = crypto.createHash('md5');

    for (const filePath of files) {
        const relativePath = path.relative(dirPath, filePath).replace(/\\/g, '/');
        const fileMd5 = crypto
            .createHash('md5')
            .update(fs.readFileSync(filePath))
            .digest('hex');

        folderMd5.update(relativePath);
        folderMd5.update(fileMd5);
    }

    return folderMd5.digest('hex');
}

export interface HotfixBuildPaths {
    remote: string;
    assets: string;
    output: string;
}

/**
 * 将构建产物中的远程包及其 manifest 发布到平台构建目录父级的
 * remote/<platform>。目标目录不存在时会自动创建。
 */
function copyRemoteBuildFiles(
    platform: string,
    manifestPath: string,
    bundles: Record<string, string>,
    paths: HotfixBuildPaths,
): void {
    const targetDir = path.join(path.dirname(paths.output), 'remote', platform);

    // 发布目录只保留本次构建生成的 bundle，避免旧 MD5 目录残留。
    fs.rmSync(targetDir, { recursive: true, force: true });
    fs.mkdirSync(targetDir, { recursive: true });

    for (const entry of fs.readdirSync(paths.remote, { withFileTypes: true })) {
        const sourcePath = path.join(paths.remote, entry.name);

        if (!entry.isDirectory()) {
            fs.copyFileSync(sourcePath, path.join(targetDir, entry.name));
            continue;
        }

        const md5 = bundles[entry.name];
        if (md5) {
            fs.cpSync(sourcePath, path.join(targetDir, md5), { recursive: true, force: true });
        }
    }

    fs.copyFileSync(manifestPath, path.join(targetDir, path.basename(manifestPath)));

    console.log('Copy remote build files success:', targetDir);
}

function main(platform: string, version: string, paths: HotfixBuildPaths): void {
    const bundleRoot = paths.remote;

    if (!fs.existsSync(bundleRoot)) {
        console.error('Bundle directory not found:', bundleRoot);
        process.exitCode = 1;
        return;
    }

    const result: HotfixManifest = {
        version,
        bundles: {},
    };

    for (const bundleName of fs.readdirSync(bundleRoot)) {
        const bundlePath = path.join(bundleRoot, bundleName);

        if (!fs.statSync(bundlePath).isDirectory()) {
            continue;
        }

        const md5 = getFolderMd5(bundlePath);
        result.bundles[bundleName] = md5;
        console.log(bundleName, '=>', md5);
    }

    const now = Date.now();
    const outputPath = path.join(paths.assets, `${now}.manifest`);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 4));
    console.log('Generate bundle manifest success:', outputPath);

    copyRemoteBuildFiles(platform, outputPath, result.bundles, paths);
}

export function hotfix(platform: string, version: string, paths: HotfixBuildPaths) {
    if (!platform || !version || !paths?.remote || !paths?.assets || !paths?.output) {
        console.error('Usage: node hotfix.js <platform> <version>');
        process.exitCode = 1;
    } else {
        main(platform, version, paths);
    }
}
