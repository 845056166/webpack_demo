const path = require('path');
const { DefinePlugin, DllReferencePlugin} = require('webpack');
const portfinder = require('portfinder');;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const { entrys, plugins } = require('./utils').getEntries();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = {
  mode: 'development',
  entry: {
    ...entrys,
    'tsexam': './src/module/ts-exercises/index.ts'
  },
  output: {
    // output里面的path表示的是output目录对应的一个绝对路径。
    // output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
    path: path.resolve(__dirname, '../dist'),
    filename: 'module/js/[name]_[chunkhash:8].js',
    publicPath: '/' // dev环境下，publicPath为[/] ,pro环境环境下为[./]
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // automaticNameDelimiter: '~',
      cacheGroups: {
        // defaultVendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10
        // },
        // default: {
        //   minChunks: 2,
        //   priority: 1,
        //   reuseExistingChunk: true
        // }
      }
    }
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
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'module/static/img/[name]-[hash:7].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require(path.resolve(__dirname, '../dll/vender.manifest.json'))
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([ // 将static文件夹拷贝到dist中
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    ...plugins,
    new DefinePlugin({
      PRODUCTION: JSON.stringify('development')
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: './', //静态文件在哪里找
    // contentBase: path.join(__dirname, 'dist'),
    // publicPath: '.', // devServer里面的publicPath表示的是打包生成的静态文件所在的位置（若是devServer里面的publicPath没有设置，则会认为是output里面设置的publicPath的值）    
    compress: true, // 压缩
    host: "0.0.0.0",
    port: 9000,
    quiet: true,
    // 在编译过程中有错误，给予窗口提示
    overlay:{
      errors:true
    }
  } 
}
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devConfig.devServer.port;
  portfinder.getPort(function (err, port) {
    //
    // `port` is guaranteed to be a free port
    // in this scope.
    //
    if (err) {
      reject(err);
    } else {
      devConfig.devServer.port = port;
      // console.log(devConfig);
      devConfig.plugins.push(
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: ['You application is running here http://localhost:'+ port],
            notes: ['Some additionnal notes to be displayed unpon successful compilation']
          },
          clearConsole: true
        })
      );
      resolve(devConfig);
    }
  });
})