const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
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
             }
        ]
      },
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist')
    }
}