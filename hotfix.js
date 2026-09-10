// 引入 Node.js 文件系统模块
var fs = require('fs')

// 引入 Node.js 路径处理模块
var path = require('path')

// 引入 Node.js crypto 模块，用来计算 MD5
var crypto = require('crypto')


// 获取命令行参数
var args = process.argv.splice(2)


// 至少需要两个参数：构建目录和版本号
if (args.length < 2) {

    // 输出使用方式
    console.log('Usage: node hotfix.js <platform> <version>')

    // 退出程序
    process.exit(1)
}


// 第一个参数：构建平台 / 构建目录
// 例如 android
var o = args[0]

// 第二个参数：版本号
// 例如 1.0.5
var v = args[1]


/**
 * 递归读取指定目录下面的所有文件
 *
 * @param {string} dirPath 文件夹路径
 * @returns {string[]} 所有文件完整路径
 */
function readAllFilesSync(dirPath) {

    // 保存最终文件列表
    let results = []

    // 读取当前目录下所有内容
    const items = fs.readdirSync(dirPath)

    // 遍历目录内容
    items.forEach(item => {

        // 拼接完整路径
        const fullPath = path.join(dirPath, item)

        // 获取文件信息
        const stat = fs.statSync(fullPath)

        // 判断是不是文件夹
        if (stat.isDirectory()) {

            // 如果是文件夹，则递归继续读取
            results = results.concat(
                readAllFilesSync(fullPath)
            )

        } else {

            // 如果是文件，则加入结果数组
            results.push(fullPath)
        }
    })

    // 返回所有文件
    return results
}


/**
 * 计算整个文件夹的 MD5
 *
 * 只要文件夹中：
 * 1. 文件内容改变
 * 2. 新增文件
 * 3. 删除文件
 * 4. 文件重命名
 *
 * 最终 MD5 都会改变
 *
 * @param {string} dirPath Bundle 文件夹路径
 * @returns {string} Bundle 对应的 MD5
 */
function getFolderMd5(dirPath) {

    // 获取 Bundle 下所有文件
    let files = readAllFilesSync(dirPath)

    // 按照文件路径排序
    // 确保每次计算顺序一致
    files.sort()

    // 创建最终 Bundle MD5
    let folderMd5 = crypto.createHash('md5')

    // 遍历所有文件
    for (let i = 0; i < files.length; i++) {

        // 当前文件完整路径
        let filePath = files[i]

        // 获取文件相对于 Bundle 根目录的路径
        let relativePath = path.relative(
            dirPath,
            filePath
        )

        // Windows 路径转换成统一的 /
        relativePath = relativePath.replace(/\\/g, '/')

        // 读取当前文件内容
        let data = fs.readFileSync(filePath)

        // 创建文件 MD5
        let fileMd5 = crypto
            .createHash('md5')
            .update(data)
            .digest('hex')

        // 文件路径参与 Bundle MD5 计算
        folderMd5.update(relativePath)

        // 文件内容 MD5 参与 Bundle MD5 计算
        folderMd5.update(fileMd5)
    }

    // 返回整个文件夹最终 MD5
    return folderMd5.digest('hex')
}


// Bundle 根目录
//
// 如果 o = android
//
// 最终路径：
// build/android/remote/
let bundleRoot = `build/${o}/remote/`


// 判断 Bundle 目录是否存在
if (!fs.existsSync(bundleRoot)) {

    // 不存在时输出错误
    console.log(
        'Bundle directory not found:',
        bundleRoot
    )

    // 退出程序
    process.exit(1)
}


// 最终需要写入的配置数据
var result = {

    // 当前版本号
    version: v,

    // 保存所有 Bundle 的 MD5
    bundles: {}
}


// 读取 bundle 根目录下所有内容
let bundles = fs.readdirSync(bundleRoot)


// 遍历所有 Bundle
for (let i = 0; i < bundles.length; i++) {

    // Bundle 名称
    // 例如 game1
    let bundleName = bundles[i]

    // Bundle 完整路径
    let bundlePath = path.join(
        bundleRoot,
        bundleName
    )

    // 获取 Bundle 文件信息
    let stat = fs.statSync(bundlePath)

    // 只处理文件夹
    if (!stat.isDirectory()) {

        // 如果不是文件夹就忽略
        continue
    }

    // 计算当前 Bundle 文件夹的 MD5
    let md5 = getFolderMd5(bundlePath)

    // 保存 Bundle MD5
    result.bundles[bundleName] = md5

    // 控制台打印
    console.log(
        bundleName,
        '=>',
        md5
    )
}


// 最终输出文件路径
let outputPath =
    `build/${o}/assets/${o}.manifest`


// 将结果写入文件
fs.writeFileSync(
    outputPath,

    // 转换成格式化 JSON
    JSON.stringify(result, null, 4)
)


// 输出完成提示
console.log(
    'Generate bundle manifest success:',
    outputPath
)