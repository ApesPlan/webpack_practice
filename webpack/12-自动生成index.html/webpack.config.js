const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html文件 自动引入打包好的js 但少id='root'
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 如果打包的bundle.js文件变为了dist.js这个插件能删除过去的bundle.js

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // // 如果output filename的话 需要用通配符[name].js，不然报错，都会被打包成一个文件
    // entry: {
    //     main: './src/index.js', // 如果没有output filename的话，默认生成的是main.js
    //     sub: './src/index.js' // 如果没有没有output filename的话，默认生成的是sub.js
    // },
    module: {
        rules: [
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
            //  {
            //      test: /\.css$/,
            //      use: [
            //          'style-loader', 
            //          'css-loader',
            //          'postcss-loader'
            //         ]
            //   },
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
        // new CleanWebpackPlugin(['dist']) // 如果打包的dist.js文件变为了bundle.js这个插件能删除过去的dist.js
    ], 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist')
    }
}