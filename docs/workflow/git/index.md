# Git

::: info 相关资料

- [官网](https://git-scm.com/)
- [Git 学习教程](https://learngitbranching.js.org/?locale=zh_CN)
- [Git 入门指南](https://docs.github.com/cn/get-started/getting-started-with-git)
- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [Git Extras](https://github.com/tj/git-extras) git 命令行扩展工具
- [配置 Git 处理行结束符](https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)
- [Git 配置多个 SSH-Key](https://gitee.com/help/articles/4229)
- 下载相关
  - [Windows 版下载镜像](https://npmmirror.com/mirrors/git-for-windows/)
  - [使用 jsdelivr 加速 Github 仓库资源](https://github.com/wild2life/daily-notes/issues/7)
- [commit 常用的 type](/workflow/style-guide#commit-常用的-type)

:::

## 常用 Git 命令

> `[xxx]` 均为可选参数

### git clone

```sh
# 拷贝一个 Git 仓库到本地
git clone 仓库地址
git clone 仓库地址 --depth 1 # 只克隆最近一次的 commit
```

### git 配置

```sh
# 查看当前的 Git 配置
git config --list
# 设置使用 Git 时的用户名称
git config [--global] user.name "名称"
# 设置使用 Git 时的邮箱地址
git config [--global] user.email "邮箱"
```

### git 文件操作

```sh
# 添加所有文件到暂存区
git add .
```

```sh
# 提交暂存区到仓库区
git commit -m "提交信息"
git commit --amend # 增补提交，使用上次的 commit 信息，不添加新的 commit 记录
```

```sh
# 显示变更的文件
git status
        -s # 精简输出
```

```sh
# 只暂存被追踪的文件
git stash
        save '说明信息' # 添加说明信息
        -u # 暂存所有文件
# 查看 stash 列表
git stash list
# 取出最近一次的 stash
git stash apply
# 取出并删除最近一次的 stash
git stash pop
# 清空所有 stash
git stash clear
```

### git 分支操作

```sh
# 列出所有本地分支
git branch
        [分支名] # 新建一个分支(停留在当前分支)
        -r # 列出所有远程分支
        -a # 列出所有本地分支和远程分支
        -d [分支名] # 删除分支
        -D [分支名] # 强制删除分支
        -r # 列出所有远程分支
# 新建一个空白分支
git checkout --orphan [分支名]

# 删除本地所有分支
git branch | xargs git branch -d
# 批量删除包含指定字符的本地分支【以 dev 为例】
git branch | grep 'dev' | xargs git branch -d

# 获取当前的分支名
git symbolic-ref --short -q HEAD
git rev-parse --abbrev-ref HEAD
```

```sh
# 合并指定分支到当前分支
git merge [分支名]
```

```sh
# 显示所有远程仓库
git remote -v
# 添加远程仓库
git remote add [name] [url]
# 删除远程仓库
git remote remove [name]
# 查看远程仓库地址
git remote get-url [name]
```

```sh
# 取回远程仓库的变化，并与本地分支合并
git pull [remote][branch]
# 上传本地指定分支到远程仓库
git push [remote][branch]
# 强行推送当前分支到远程仓库，忽略冲突
git push [remote] --force
```

### git 日志

```sh
# 查看提交过的完整日志
git log
        --oneline # 查看精简日志（精简版本号和提交信息）
        --pretty=oneline # 查看精简日志（完整版本号和提交信息）
# 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）
git reflog
```

### git 统计

```sh
# 统计作者提交的次数
git shortlog -s -n

# 计算存储库中的提交总数
git rev-list --all --count
# 计算存储库中分支指定的提交总数
git rev-list --count [分支名]
```

### git reset

```sh
# 撤销 commit 操作
git reset --soft HEAD~1 # git reset --soft commit_id
# 撤销 commit 和 add 操作
git reset --mixed HEAD~1 # git reset --mixed commit_id
# 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改
git reset --hard HEAD~1 # git reset --hard commit_id
```


