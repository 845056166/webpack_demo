const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { entrys, plugins } = require('./utils').getEntries();
console.log(entrys, plugins, '=========='),
module.exports = {
  mode: 'development',
  entry: entrys,
  output: {
    // output里面的path表示的是output目录对应的一个绝对路径。
    // output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name]_[chunkhash:8].js',
    publicPath: '/' // dev环境下，publicPath为[/] ,pro环境环境下为[./]
  },
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg|svg)$/, // 用了url-loader就不要用file-loader
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 102400
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'module/static/img/[name]-[hash:7].[ext]'
        }
      },
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([ // 将static文件夹拷贝到dist中
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
  ].concat(plugins),
  devServer: {
    contentBase: './', //静态文件在哪里找
    // contentBase: path.join(__dirname, 'dist'),
    publicPath: '/', // devServer里面的publicPath表示的是打包生成的静态文件所在的位置（若是devServer里面的publicPath没有设置，则会认为是output里面设置的publicPath的值）    
    compress: true, // 压缩
    host: "0.0.0.0",
    port: 9000,
    // 在编译过程中有错误，给予窗口提示
    overlay:{
      errors:true
    }
  },
}
// console.log(process.env.NODE_ENV);
// test specific setups
if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'eval'
}