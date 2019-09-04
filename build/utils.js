const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.assetsPath = function (_path) {
    // const assetsSubDirectory = process.env.NODE_ENV === 'production'
    //   ? config.build.assetsSubDirectory
    //   : config.dev.assetsSubDirectory
    return path.posix.join('static', _path)
  }
exports.getEntries = () => {
  const entrys = {};
  const plugins = [];
  const entryFiles = glob.sync(path.join(__dirname, '../src/module/*/index.js'));
  console.log('================', entryFiles);
  entryFiles.forEach(item => {
    const moduleName = item.match(/module\/(\S*)\/index/)[1];
    entrys[moduleName] = `./src/module/${moduleName}/index.js`
    plugins.push(
      new HtmlWebpackPlugin({
        title: 'webpack_demo',
        template: `src/module/${moduleName}/index.html`, // 指定的模板
        filename: `module/${moduleName}.html`, // 生成的html文件名
        hash: false,
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        compile: true,
        favicon: false,
        cache: true,
        showErrors: true,
        chunksSortMode: 'auto',
        baseTagUrl: '../',
        chunks: [moduleName],
      }),
    )
  });
  return {
    entrys,
    plugins,
  }
}
exports.getEntriesDev = () => {
  const entrys = {};
  const plugins = [];
  const entryFiles = glob.sync(path.join(__dirname, '../src/module/*/index.js'));
  console.log('================', entryFiles);
  entryFiles.forEach(item => {
    const moduleName = item.match(/module\/(\S*)\/index/)[1];
    entrys[moduleName] = `./src/module/${moduleName}/index.js`
    plugins.push(
      new HtmlWebpackPlugin({
        title: 'webpack_demo',
        template: `src/module/${moduleName}/index.html`, // 指定的模板
        filename: `module/${moduleName}.html` // 生成的html文件名
      }),
    )
  });
  return {
    entrys,
    plugins,
  }
}