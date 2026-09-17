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
    const now = Date.now();
    fs.copyFileSync(manifestPath, path.join(targetDir, `${now}.manifest`));
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
    const outputPath = path.join(paths.assets, `version.manifest`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90Zml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2hvdGZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLDRDQWVDO0FBbUdELHdCQU9DO0FBbklELG9EQUFzQztBQUN0Qyw0Q0FBOEI7QUFDOUIsZ0RBQWtDO0FBT2xDLG9CQUFvQjtBQUNwQixTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzVDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUUzQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsWUFBWSxDQUFDLE9BQWU7SUFDakMsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLElB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QUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxDQUFBLElBQUksQ0FBQyxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLENBQUEsRUFBRSxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO1NBQU0sQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdGZpeE1hbmlmZXN0IHtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgYnVuZGxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn1cblxuLyoqIOmAkuW9kuivu+WPluebruW9leS4reeahOWFqOmDqOaWh+S7tuOAgiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBbGxGaWxlc1N5bmMoZGlyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBmcy5yZWFkZGlyU3luYyhkaXJQYXRoKSkge1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihkaXJQYXRoLCBlbnRyeSk7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhmdWxsUGF0aCk7XG5cbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgZmlsZXMucHVzaCguLi5yZWFkQWxsRmlsZXNTeW5jKGZ1bGxQYXRoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKGZ1bGxQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlcztcbn1cblxuLyoqXG4gKiDorqHnrpfnm67lvZXnmoTlhoXlrrkgTUQ144CC5paH5Lu26Lev5b6E5Y+K5q+P5Liq5paH5Lu255qE5YaF5a655Z2H5Y+C5LiO6K6h566X77yM5Zug5q2k5paw5aKe44CB5Yig6Zmk44CBXG4gKiDph43lkb3lkI3miJbkv67mlLnmlofku7bpg73kvJrkuqfnlJ/mlrDnmoTmkZjopoHjgIJcbiAqL1xuZnVuY3Rpb24gZ2V0Rm9sZGVyTWQ1KGRpclBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZmlsZXMgPSByZWFkQWxsRmlsZXNTeW5jKGRpclBhdGgpLnNvcnQoKTtcbiAgICBjb25zdCBmb2xkZXJNZDUgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUoZGlyUGF0aCwgZmlsZVBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgICAgY29uc3QgZmlsZU1kNSA9IGNyeXB0b1xuICAgICAgICAgICAgLmNyZWF0ZUhhc2goJ21kNScpXG4gICAgICAgICAgICAudXBkYXRlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkpXG4gICAgICAgICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgICAgICBmb2xkZXJNZDUudXBkYXRlKHJlbGF0aXZlUGF0aCk7XG4gICAgICAgIGZvbGRlck1kNS51cGRhdGUoZmlsZU1kNSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvbGRlck1kNS5kaWdlc3QoJ2hleCcpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdGZpeEJ1aWxkUGF0aHMge1xuICAgIHJlbW90ZTogc3RyaW5nO1xuICAgIGFzc2V0czogc3RyaW5nO1xuICAgIG91dHB1dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIOWwhuaehOW7uuS6p+eJqeS4reeahOi/nOeoi+WMheWPiuWFtiBtYW5pZmVzdCDlj5HluIPliLDlubPlj7DmnoTlu7rnm67lvZXniLbnuqfnmoRcbiAqIHJlbW90ZS88cGxhdGZvcm0+44CC55uu5qCH55uu5b2V5LiN5a2Y5Zyo5pe25Lya6Ieq5Yqo5Yib5bu644CCXG4gKi9cbmZ1bmN0aW9uIGNvcHlSZW1vdGVCdWlsZEZpbGVzKFxuICAgIHBsYXRmb3JtOiBzdHJpbmcsXG4gICAgbWFuaWZlc3RQYXRoOiBzdHJpbmcsXG4gICAgYnVuZGxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBwYXRoczogSG90Zml4QnVpbGRQYXRocyxcbik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihwYXRoLmRpcm5hbWUocGF0aHMub3V0cHV0KSwgJ3JlbW90ZScsIHBsYXRmb3JtKTtcblxuICAgIC8vIOWPkeW4g+ebruW9leWPquS/neeVmeacrOasoeaehOW7uueUn+aIkOeahCBidW5kbGXvvIzpgb/lhY3ml6cgTUQ1IOebruW9leaui+eVmeOAglxuICAgIGZzLnJtU3luYyh0YXJnZXREaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KTtcbiAgICBmcy5ta2RpclN5bmModGFyZ2V0RGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZnMucmVhZGRpclN5bmMocGF0aHMucmVtb3RlLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSkpIHtcbiAgICAgICAgY29uc3Qgc291cmNlUGF0aCA9IHBhdGguam9pbihwYXRocy5yZW1vdGUsIGVudHJ5Lm5hbWUpO1xuXG4gICAgICAgIGlmICghZW50cnkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgZnMuY29weUZpbGVTeW5jKHNvdXJjZVBhdGgsIHBhdGguam9pbih0YXJnZXREaXIsIGVudHJ5Lm5hbWUpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWQ1ID0gYnVuZGxlc1tlbnRyeS5uYW1lXTtcbiAgICAgICAgaWYgKG1kNSkge1xuICAgICAgICAgICAgZnMuY3BTeW5jKHNvdXJjZVBhdGgsIHBhdGguam9pbih0YXJnZXREaXIsIG1kNSksIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgZnMuY29weUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgcGF0aC5qb2luKHRhcmdldERpciwgYCR7bm93fS5tYW5pZmVzdGApKTtcblxuICAgIGNvbnNvbGUubG9nKCdDb3B5IHJlbW90ZSBidWlsZCBmaWxlcyBzdWNjZXNzOicsIHRhcmdldERpcik7XG59XG5cbmZ1bmN0aW9uIG1haW4ocGxhdGZvcm06IHN0cmluZywgdmVyc2lvbjogc3RyaW5nLCBwYXRoczogSG90Zml4QnVpbGRQYXRocyk6IHZvaWQge1xuICAgIGNvbnN0IGJ1bmRsZVJvb3QgPSBwYXRocy5yZW1vdGU7XG5cbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoYnVuZGxlUm9vdCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQnVuZGxlIGRpcmVjdG9yeSBub3QgZm91bmQ6JywgYnVuZGxlUm9vdCk7XG4gICAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBIb3RmaXhNYW5pZmVzdCA9IHtcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYnVuZGxlczoge30sXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgYnVuZGxlTmFtZSBvZiBmcy5yZWFkZGlyU3luYyhidW5kbGVSb290KSkge1xuICAgICAgICBjb25zdCBidW5kbGVQYXRoID0gcGF0aC5qb2luKGJ1bmRsZVJvb3QsIGJ1bmRsZU5hbWUpO1xuXG4gICAgICAgIGlmICghZnMuc3RhdFN5bmMoYnVuZGxlUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZDUgPSBnZXRGb2xkZXJNZDUoYnVuZGxlUGF0aCk7XG4gICAgICAgIHJlc3VsdC5idW5kbGVzW2J1bmRsZU5hbWVdID0gbWQ1O1xuICAgICAgICBjb25zb2xlLmxvZyhidW5kbGVOYW1lLCAnPT4nLCBtZDUpO1xuICAgIH1cblxuICAgIGNvbnN0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4ocGF0aHMuYXNzZXRzLCBgdmVyc2lvbi5tYW5pZmVzdGApO1xuICAgIGZzLndyaXRlRmlsZVN5bmMob3V0cHV0UGF0aCwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCA0KSk7XG4gICAgY29uc29sZS5sb2coJ0dlbmVyYXRlIGJ1bmRsZSBtYW5pZmVzdCBzdWNjZXNzOicsIG91dHB1dFBhdGgpO1xuXG4gICAgY29weVJlbW90ZUJ1aWxkRmlsZXMocGxhdGZvcm0sIG91dHB1dFBhdGgsIHJlc3VsdC5idW5kbGVzLCBwYXRocyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3RmaXgocGxhdGZvcm06IHN0cmluZywgdmVyc2lvbjogc3RyaW5nLCBwYXRoczogSG90Zml4QnVpbGRQYXRocykge1xuICAgIGlmICghcGxhdGZvcm0gfHwgIXZlcnNpb24gfHwgIXBhdGhzPy5yZW1vdGUgfHwgIXBhdGhzPy5hc3NldHMgfHwgIXBhdGhzPy5vdXRwdXQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVXNhZ2U6IG5vZGUgaG90Zml4LmpzIDxwbGF0Zm9ybT4gPHZlcnNpb24+Jyk7XG4gICAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW4ocGxhdGZvcm0sIHZlcnNpb24sIHBhdGhzKTtcbiAgICB9XG59XG4iXX0=