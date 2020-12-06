const chalk = require('chalk');
const shell = require('shelljs');
const emails = shell.exec('git config user.email')
console.log(emails);

const files = shell.exec('git diff --name-only HEAD~ HEAD')
// changeFiles=$(git diff --name-only HEAD~ HEAD)
// console.log(Object.keys(files));

Object.keys(files).forEach(item => {
    if (!item.startsWith('src') ) {
    //   console.log(item);
    //   console.log(chalk.cyan('存在非法文件', item))
    }
})
// files.forEach(item => {
//   console.log(item.startWith);
  
  
// })
process.exit(1);