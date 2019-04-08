const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html文件 自动引入打包好的js 但少id='root'
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 如果打包的bundle.js文件变为了dist.js这个插件能删除过去的bundle.js
const webpack = require('webpack'); // 开启热更

module.exports = {
    // mode: 'production',
    // devtool: 'cheap-module-source-map', // 线上用

    mode: 'development',
    // devtool: 'none', // 报错提示在打完包的文件中
    devtool: 'cheap-module-eval-source-map', // 最佳
    // devtool: 'eval', // 最快，但可能提示不全面
    // devtool: 'source-map', // 报错提示在原文件中 会多生成一个main.map.js 慢
    // devtool: 'inline-source-map', // 报错提示在原文件中 只有一个main.js 会精确到哪一行哪一列 慢
    // devtool: 'cheap-inline-source-map', // 报错提示在原文件中 只有一个main.js 会精确到哪一行 稍微快了
    // devtool: 'cheap-module-inline-source-map', // 第三方模块里的错误都管
    // // 如果output filename的话 需要用通配符[name].js，不然报错，都会被打包成一个文件
    entry: {
        main: './src/index.js', // 如果没有output filename的话，默认生成的是main.js
    },
    // package.json配置 "start": "webpack-dev-server", 推荐方式
    devServer: {
        contentBase: './dist', // 制定运行目录
        open: true, // 自动打开默认浏览器
        // proxy: { // 跨域代理
        //     '/api': 'http://localhost:3000'
        // }
        port: 8090,
        // css js
        hot: true, // 开启热更 页面不用手动刷新
        hotOnly: true // 热更不生效页面也不用手动刷新
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // babel 处理es6
                options: {
                    // 写类库的时候调用的插件
                    // "plugins": [["@babel/plugin-transform-runtime", {
                    //     "corejs": 2,
                    //     "helpers": true,
                    //     "regenerator": true,
                    //     "useESModules": false
                    // }]],
                    // presets: ["@babel/preset-env"] // es6中的函数和变量有些还是不能翻译
                    presets: [['@babel/preset-env', {
                        // targets: { // 在大于什么样的版本的浏览器生效
                        //     chrome: '67',
                        // },
                        useBuiltIns: 'usage' // 自定义根据需求加载特殊的es6变量和函数
                    }]]
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    // loader: 'file-loader',
                    loader: 'url-loader', // 将图片文件打包成base64 放入js中
                    options: {
                        name: '[name].[ext]', // 以原文件的名字和后缀名输出文件
                        outputPath: 'images/', // 输出路径在output(dist)
                        limit: 2048 // 当图片小于2048个字节（2kb）的时候才打包
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    //   'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // 执行sass的层级为2
                        } 
                    },
                    'sass-loader',
                    'postcss-loader'
                    ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'postcss-loader'
                    ]
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html' // 在打包的时候使用html模板，解决没有id=root的问题
        }),
        // new CleanWebpackPlugin(['dist']), // 如果打包的dist.js文件变为了bundle.js这个插件能删除过去的dist.js
        new webpack.HotModuleReplacementPlugin() // 开启热更 css  js
    ], 
    optimization: {
        usedExports: true // 表示js方法类使用到了才导入打包文件中
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist')
    }
}