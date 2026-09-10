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
    const outputPath = path.join(paths.assets, `${platform}.manifest`);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 4));
    console.log('Generate bundle manifest success:', outputPath);
}
function hotfix(platform, version, paths) {
    if (!platform || !version || !(paths === null || paths === void 0 ? void 0 : paths.remote) || !(paths === null || paths === void 0 ? void 0 : paths.assets)) {
        console.error('Usage: node hotfix.js <platform> <version>');
        process.exitCode = 1;
    }
    else {
        main(platform, version, paths);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90Zml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2hvdGZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLDRDQWVDO0FBNERELHdCQU9DO0FBNUZELG9EQUFzQztBQUN0Qyw0Q0FBOEI7QUFDOUIsZ0RBQWtDO0FBT2xDLG9CQUFvQjtBQUNwQixTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlO0lBQzVDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUUzQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsWUFBWSxDQUFDLE9BQWU7SUFDakMsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUUsTUFBTSxPQUFPLEdBQUcsTUFBTTthQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQixTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBT0QsU0FBUyxJQUFJLENBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBdUI7SUFDcEUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUVoQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDckIsT0FBTztJQUNYLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBbUI7UUFDM0IsT0FBTztRQUNQLE9BQU8sRUFBRSxFQUFFO0tBQ2QsQ0FBQztJQUVGLEtBQUssTUFBTSxVQUFVLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDekMsU0FBUztRQUNiLENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxRQUFnQixFQUFFLE9BQWUsRUFBRSxLQUF1QjtJQUM3RSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxDQUFBLElBQUksQ0FBQyxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLENBQUEsRUFBRSxDQUFDO1FBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO1NBQU0sQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdGZpeE1hbmlmZXN0IHtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgYnVuZGxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn1cblxuLyoqIOmAkuW9kuivu+WPluebruW9leS4reeahOWFqOmDqOaWh+S7tuOAgiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBbGxGaWxlc1N5bmMoZGlyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBmcy5yZWFkZGlyU3luYyhkaXJQYXRoKSkge1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihkaXJQYXRoLCBlbnRyeSk7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhmdWxsUGF0aCk7XG5cbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgZmlsZXMucHVzaCguLi5yZWFkQWxsRmlsZXNTeW5jKGZ1bGxQYXRoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKGZ1bGxQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlcztcbn1cblxuLyoqXG4gKiDorqHnrpfnm67lvZXnmoTlhoXlrrkgTUQ144CC5paH5Lu26Lev5b6E5Y+K5q+P5Liq5paH5Lu255qE5YaF5a655Z2H5Y+C5LiO6K6h566X77yM5Zug5q2k5paw5aKe44CB5Yig6Zmk44CBXG4gKiDph43lkb3lkI3miJbkv67mlLnmlofku7bpg73kvJrkuqfnlJ/mlrDnmoTmkZjopoHjgIJcbiAqL1xuZnVuY3Rpb24gZ2V0Rm9sZGVyTWQ1KGRpclBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZmlsZXMgPSByZWFkQWxsRmlsZXNTeW5jKGRpclBhdGgpLnNvcnQoKTtcbiAgICBjb25zdCBmb2xkZXJNZDUgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUoZGlyUGF0aCwgZmlsZVBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgICAgICAgY29uc3QgZmlsZU1kNSA9IGNyeXB0b1xuICAgICAgICAgICAgLmNyZWF0ZUhhc2goJ21kNScpXG4gICAgICAgICAgICAudXBkYXRlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkpXG4gICAgICAgICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgICAgICBmb2xkZXJNZDUudXBkYXRlKHJlbGF0aXZlUGF0aCk7XG4gICAgICAgIGZvbGRlck1kNS51cGRhdGUoZmlsZU1kNSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvbGRlck1kNS5kaWdlc3QoJ2hleCcpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdGZpeEJ1aWxkUGF0aHMge1xuICAgIHJlbW90ZTogc3RyaW5nO1xuICAgIGFzc2V0czogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtYWluKHBsYXRmb3JtOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZywgcGF0aHM6IEhvdGZpeEJ1aWxkUGF0aHMpOiB2b2lkIHtcbiAgICBjb25zdCBidW5kbGVSb290ID0gcGF0aHMucmVtb3RlO1xuXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGJ1bmRsZVJvb3QpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0J1bmRsZSBkaXJlY3Rvcnkgbm90IGZvdW5kOicsIGJ1bmRsZVJvb3QpO1xuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogSG90Zml4TWFuaWZlc3QgPSB7XG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGJ1bmRsZXM6IHt9LFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGJ1bmRsZU5hbWUgb2YgZnMucmVhZGRpclN5bmMoYnVuZGxlUm9vdCkpIHtcbiAgICAgICAgY29uc3QgYnVuZGxlUGF0aCA9IHBhdGguam9pbihidW5kbGVSb290LCBidW5kbGVOYW1lKTtcblxuICAgICAgICBpZiAoIWZzLnN0YXRTeW5jKGJ1bmRsZVBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWQ1ID0gZ2V0Rm9sZGVyTWQ1KGJ1bmRsZVBhdGgpO1xuICAgICAgICByZXN1bHQuYnVuZGxlc1tidW5kbGVOYW1lXSA9IG1kNTtcbiAgICAgICAgY29uc29sZS5sb2coYnVuZGxlTmFtZSwgJz0+JywgbWQ1KTtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKHBhdGhzLmFzc2V0cywgYCR7cGxhdGZvcm19Lm1hbmlmZXN0YCk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRQYXRoLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDQpKTtcbiAgICBjb25zb2xlLmxvZygnR2VuZXJhdGUgYnVuZGxlIG1hbmlmZXN0IHN1Y2Nlc3M6Jywgb3V0cHV0UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3RmaXgocGxhdGZvcm06IHN0cmluZywgdmVyc2lvbjogc3RyaW5nLCBwYXRoczogSG90Zml4QnVpbGRQYXRocykge1xuICAgIGlmICghcGxhdGZvcm0gfHwgIXZlcnNpb24gfHwgIXBhdGhzPy5yZW1vdGUgfHwgIXBhdGhzPy5hc3NldHMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVXNhZ2U6IG5vZGUgaG90Zml4LmpzIDxwbGF0Zm9ybT4gPHZlcnNpb24+Jyk7XG4gICAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW4ocGxhdGZvcm0sIHZlcnNpb24sIHBhdGhzKTtcbiAgICB9XG59XG4iXX0=