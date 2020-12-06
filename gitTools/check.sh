#!/bin/bash
set -e
adminsitrator='xiongshiji'
# 获取git账号
user=`git config --get user.email`
# 调用git获取暂存区vue,js,html,json文件
changeFiles=$(git diff --cached --name-only -- '*.vue' '*.js' '*.html' '*.json' '*.tsx')
arr=() #存放敏感文件的数组
# 提取提交的敏感文件(不是src开头的文件)
for file in $changeFiles
do
#   result=$(echo $file | grep -v "src*\/")
    if [[ !($file =~ "src/") || $file = 'src/index.html' ]]
#   if ([[ "$result" != "" ]])
  then
    # echo -e $file\n
    arr[${#arr[@]}]=$file
  fi
done
echo -e ${arr[@]\n}
# 提示不合法文件
echo -e "\033[31m存在如下敏感文件请注意： \033[0m"
# echo -e ${arr[@]\n}
length=${#arr[@]}
for ((i=0; i< $length; i++))
  do
    echo -e "\033[32m  ${arr[$i]}\033[0m"
done
# Git hooks do not use standard input. Thus, one must attach the input from the terminal: dev/tty
# See: https://stackoverflow.com/questions/45495061/how-to-ask-for-user-input-in-a-git-hook
read -s -p "我们需要再次确认你的身份才能提交,请输入您的邮箱": confirmName </dev/tty
# echo -e "\033[31m$confirmName \033[0m"
if test $confirmName = 'xiongshiji'
then
  exit 0
else
  echo -e "\033[35m您的身份不对，请将敏感文件移除暂存区再提交 \033[0m"
  exit 1
fi
exit 1
# chmod +x ./test.sh  #使脚本具有执行权限