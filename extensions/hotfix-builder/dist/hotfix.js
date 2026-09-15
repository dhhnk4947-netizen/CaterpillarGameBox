"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllFilesSync = readAllFilesSync;
exports.hotfix = hotfix;
const crypto = __importStar(require("node:crypto"));
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
/** 递归读取目录中的全部文件。 */
function readAllFilesSync(dirPath) {
    const files = [];
    for (const entry of fs.readdirSync(dirPath)) {
        const fullPath = path.join(dirPath, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            files.push(...readAllFilesSync(fullPath));
        }
        else {
            files.push(fullPath);
        }
    }
    return files;
}
/**
 * 计算目录的内容 MD5。文件路径及每个文件的内容均参与计算，因此新增、删除、
 * 重命名或修改文件都会产生新的摘要。
 */
function getFolderMd5(dirPath) {
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
/**
 * 将构建产物中的远程包及其 manifest 发布到平台构建目录父级的
 * remote/<platform>。目标目录不存在时会自动创建。
 */
function copyRemoteBuildFiles(platform, manifestPath, bundles, paths) {
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
function main(platform, version, paths) {
    const bundleRoot = paths.remote;
    if (!fs.existsSync(bundleRoot)) {
        console.error('Bundle directory not found:', bundleRoot);
        process.exitCode = 1;
        return;
    }
    const result = {
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
function hotfix(platform, version, paths) {
    if (!platform || !version || !(paths === null || paths === void 0 ? void 0 : paths.remote) || !(paths === null || paths === void 0 ? void 0 : paths.assets) || !(paths === null || paths === void 0 ? void 0 : paths.output)) {
        console.error('Usage: node hotfix.js <platform> <version>');
        process.exitCode = 1;
    }
    else {
        main(platform, version, paths);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90Zml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2hvdGZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLDRDQWVDO0FBbUdELHdCQU9DO0FBbklELG9EQUFzQztBQUN0Qyw0Q0FBOEI7QUFDOUIsZ0RBQWtDO0FBT2xDLG9CQUFvQjtBQUNwQixTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzVDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUUzQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsWUFBWSxDQUFDLE9BQWU7SUFDakMsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLElB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LElBQUksQ0FBQyxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLENBQUEsSUFBSSxDQUFDLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQU0sQ0FBQSxFQUFFLENBQUM7UUFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7U0FBTSxDQUFDO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnbm9kZTpjcnlwdG8nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Zml4TWFuaWZlc3Qge1xuICAgIHZlcnNpb246IHN0cmluZztcbiAgICBidW5kbGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufVxuXG4vKiog6YCS5b2S6K+75Y+W55uu5b2V5Lit55qE5YWo6YOo5paH5Lu244CCICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFsbEZpbGVzU3luYyhkaXJQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGZzLnJlYWRkaXJTeW5jKGRpclBhdGgpKSB7XG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGRpclBhdGgsIGVudHJ5KTtcbiAgICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZ1bGxQYXRoKTtcblxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKC4uLnJlYWRBbGxGaWxlc1N5bmMoZnVsbFBhdGgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goZnVsbFBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVzO1xufVxuXG4vKipcbiAqIOiuoeeul+ebruW9leeahOWGheWuuSBNRDXjgILmlofku7bot6/lvoTlj4rmr4/kuKrmlofku7bnmoTlhoXlrrnlnYflj4LkuI7orqHnrpfvvIzlm6DmraTmlrDlop7jgIHliKDpmaTjgIFcbiAqIOmHjeWRveWQjeaIluS/ruaUueaWh+S7tumDveS8muS6p+eUn+aWsOeahOaRmOimgeOAglxuICovXG5mdW5jdGlvbiBnZXRGb2xkZXJNZDUoZGlyUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBmaWxlcyA9IHJlYWRBbGxGaWxlc1N5bmMoZGlyUGF0aCkuc29ydCgpO1xuICAgIGNvbnN0IGZvbGRlck1kNSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcblxuICAgIGZvciAoY29uc3QgZmlsZVBhdGggb2YgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5yZWxhdGl2ZShkaXJQYXRoLCBmaWxlUGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgICBjb25zdCBmaWxlTWQ1ID0gY3J5cHRvXG4gICAgICAgICAgICAuY3JlYXRlSGFzaCgnbWQ1JylcbiAgICAgICAgICAgIC51cGRhdGUoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgICAgICAgICAgIC5kaWdlc3QoJ2hleCcpO1xuXG4gICAgICAgIGZvbGRlck1kNS51cGRhdGUocmVsYXRpdmVQYXRoKTtcbiAgICAgICAgZm9sZGVyTWQ1LnVwZGF0ZShmaWxlTWQ1KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9sZGVyTWQ1LmRpZ2VzdCgnaGV4Jyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Zml4QnVpbGRQYXRocyB7XG4gICAgcmVtb3RlOiBzdHJpbmc7XG4gICAgYXNzZXRzOiBzdHJpbmc7XG4gICAgb3V0cHV0OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5bCG5p6E5bu65Lqn54mp5Lit55qE6L+c56iL5YyF5Y+K5YW2IG1hbmlmZXN0IOWPkeW4g+WIsOW5s+WPsOaehOW7uuebruW9leeItue6p+eahFxuICogcmVtb3RlLzxwbGF0Zm9ybT7jgILnm67moIfnm67lvZXkuI3lrZjlnKjml7bkvJroh6rliqjliJvlu7rjgIJcbiAqL1xuZnVuY3Rpb24gY29weVJlbW90ZUJ1aWxkRmlsZXMoXG4gICAgcGxhdGZvcm06IHN0cmluZyxcbiAgICBtYW5pZmVzdFBhdGg6IHN0cmluZyxcbiAgICBidW5kbGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIHBhdGhzOiBIb3RmaXhCdWlsZFBhdGhzLFxuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShwYXRocy5vdXRwdXQpLCAncmVtb3RlJywgcGxhdGZvcm0pO1xuXG4gICAgLy8g5Y+R5biD55uu5b2V5Y+q5L+d55WZ5pys5qyh5p6E5bu655Sf5oiQ55qEIGJ1bmRsZe+8jOmBv+WFjeaXpyBNRDUg55uu5b2V5q6L55WZ44CCXG4gICAgZnMucm1TeW5jKHRhcmdldERpciwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pO1xuICAgIGZzLm1rZGlyU3luYyh0YXJnZXREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBmcy5yZWFkZGlyU3luYyhwYXRocy5yZW1vdGUsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KSkge1xuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gcGF0aC5qb2luKHBhdGhzLnJlbW90ZSwgZW50cnkubmFtZSk7XG5cbiAgICAgICAgaWYgKCFlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc291cmNlUGF0aCwgcGF0aC5qb2luKHRhcmdldERpciwgZW50cnkubmFtZSkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZDUgPSBidW5kbGVzW2VudHJ5Lm5hbWVdO1xuICAgICAgICBpZiAobWQ1KSB7XG4gICAgICAgICAgICBmcy5jcFN5bmMoc291cmNlUGF0aCwgcGF0aC5qb2luKHRhcmdldERpciwgbWQ1KSwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnMuY29weUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgcGF0aC5qb2luKHRhcmdldERpciwgcGF0aC5iYXNlbmFtZShtYW5pZmVzdFBhdGgpKSk7XG5cbiAgICBjb25zb2xlLmxvZygnQ29weSByZW1vdGUgYnVpbGQgZmlsZXMgc3VjY2VzczonLCB0YXJnZXREaXIpO1xufVxuXG5mdW5jdGlvbiBtYWluKHBsYXRmb3JtOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZywgcGF0aHM6IEhvdGZpeEJ1aWxkUGF0aHMpOiB2b2lkIHtcbiAgICBjb25zdCBidW5kbGVSb290ID0gcGF0aHMucmVtb3RlO1xuXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGJ1bmRsZVJvb3QpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0J1bmRsZSBkaXJlY3Rvcnkgbm90IGZvdW5kOicsIGJ1bmRsZVJvb3QpO1xuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogSG90Zml4TWFuaWZlc3QgPSB7XG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGJ1bmRsZXM6IHt9LFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGJ1bmRsZU5hbWUgb2YgZnMucmVhZGRpclN5bmMoYnVuZGxlUm9vdCkpIHtcbiAgICAgICAgY29uc3QgYnVuZGxlUGF0aCA9IHBhdGguam9pbihidW5kbGVSb290LCBidW5kbGVOYW1lKTtcblxuICAgICAgICBpZiAoIWZzLnN0YXRTeW5jKGJ1bmRsZVBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWQ1ID0gZ2V0Rm9sZGVyTWQ1KGJ1bmRsZVBhdGgpO1xuICAgICAgICByZXN1bHQuYnVuZGxlc1tidW5kbGVOYW1lXSA9IG1kNTtcbiAgICAgICAgY29uc29sZS5sb2coYnVuZGxlTmFtZSwgJz0+JywgbWQ1KTtcbiAgICB9XG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4ocGF0aHMuYXNzZXRzLCBgJHtub3d9Lm1hbmlmZXN0YCk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRQYXRoLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDQpKTtcbiAgICBjb25zb2xlLmxvZygnR2VuZXJhdGUgYnVuZGxlIG1hbmlmZXN0IHN1Y2Nlc3M6Jywgb3V0cHV0UGF0aCk7XG5cbiAgICBjb3B5UmVtb3RlQnVpbGRGaWxlcyhwbGF0Zm9ybSwgb3V0cHV0UGF0aCwgcmVzdWx0LmJ1bmRsZXMsIHBhdGhzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdGZpeChwbGF0Zm9ybTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcsIHBhdGhzOiBIb3RmaXhCdWlsZFBhdGhzKSB7XG4gICAgaWYgKCFwbGF0Zm9ybSB8fCAhdmVyc2lvbiB8fCAhcGF0aHM/LnJlbW90ZSB8fCAhcGF0aHM/LmFzc2V0cyB8fCAhcGF0aHM/Lm91dHB1dCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVc2FnZTogbm9kZSBob3RmaXguanMgPHBsYXRmb3JtPiA8dmVyc2lvbj4nKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbihwbGF0Zm9ybSwgdmVyc2lvbiwgcGF0aHMpO1xuICAgIH1cbn1cbiJdfQ==