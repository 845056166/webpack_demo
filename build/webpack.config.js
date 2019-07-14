const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    // output里面的path表示的是output目录对应的一个绝对路径。
    // output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
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
        test: /\.(png|jpg|gif|jpeg|svg)$/, // 用了url-loader就不要用file-loader
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 3000
            }
          },
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my App',
      template: './index.html', // 指定的模板
      filename: 'index.html' // 生成的html文件名
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([ // 将static文件夹拷贝到dist中
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
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
  }
}