const glob = require("glob");
function getEntries(globPath) {
  // 获取所有匹配文件的文件名数组
  let files = glob.sync(globPath),
    entries = {};

  files.forEach(function (filepath) {
    let split = filepath.split("/");
    let name = split[split.length - 2];

    entries[name] = filepath;
  });
  return entries;
}
// 获取所有匹配src下目录的文件夹名字，其中文件夹里main.js为页面入口
const pages = getEntries("src/**/main.js");
console.log(pages);
module.exports = {
  pages: pages,
};
