const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const { entrys, plugins } = require('./utils').getEntries();
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const { DefinePlugin, DllReferencePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: entrys,
  output: {
    // output里面的path表示的是output目录对应的一个绝对路径。
    // output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
    path: path.resolve(__dirname, '../dist/1317'),
    filename: 'js/[name]_[chunkhash:8].js',
    publicPath: '../' // dev环境下，publicPath为[/] ,pro环境环境下为[./]
  },
  // devtool: 'hidden-source-map',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: '[name].vender.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'static/[name]-[hash:7].[ext]'
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
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-project-name',
      // dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      // minify: true,
      // mergeStaticsConfig: true,
      replacePrefix: '../js',
      stripPrefix: 'dist',
      debug: true,
      stripPrefixMulti: {
        '../js': 'test/js',
      }
      // navigateFallback: PUBLIC_PATH + 'index.html',
      // staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })
  ],
}
// console.log(process.env.NODE_ENV);
// test specific setups
if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'eval'
}