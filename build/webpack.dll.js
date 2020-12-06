const webpack = require('webpack')
const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    vender: ['vue', 'vue-router', 'axios', 'better-scroll']
  },
  output: {
    // output里面的path表示的是output目录对应的一个绝对路径。
    // output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
    path: path.resolve(__dirname, '../dll'),
    filename: 'dll.[name][chunkhash:8].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin(
      {
        name: '[name]',
        path: path.resolve(__dirname, '../dll/[name].manifest.json')
      }
    )
  ]
}