# 获取最新的 public 分支
git fetch origin public

# 创建临时工作目录
deploy_dir=$(mktemp -d)

# 将远程 public 分支放入临时工作目录
git worktree add --detach "$deploy_dir" origin/public

# 清空 public 分支原有内容
git -C "$deploy_dir" rm -rf --ignore-unmatch .
git -C "$deploy_dir" clean -fdx

# 复制最新的 Cocos 构建产物
rsync -a --exclude='.git' build/web-mobile/ "$deploy_dir"/

# 禁止 GitHub Pages 使用 Jekyll，避免忽略 _virtual_cc 等文件
touch "$deploy_dir/.nojekyll"

# 提交所有新增、修改和删除
git -C "$deploy_dir" add -A

# 检查是否存在变化
if git -C "$deploy_dir" diff --cached --quiet; then
    echo "public 分支没有需要更新的内容"
else
    git -C "$deploy_dir" commit -m "Update Cocos web build"
    git -C "$deploy_dir" push origin HEAD:public
fi

# 删除临时工作目录
git worktree remove "$deploy_dir"
