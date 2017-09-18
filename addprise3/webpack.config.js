var path=require('path');
var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        './public/scripts/index.js',
        './public/stylesheets/index.css',
        './public/scripts/addone.js',
        './public/scripts/throttle.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                    {
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }
                ]
              })
        }, {
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        new ExtractTextPlugin("styles-[hash].css"),  
        //压缩js文件
          new webpack.optimize.UglifyJsPlugin({
                 compress: {
                     warnings: false
                 }
             }),
             new HtmlWebpackPlugin({
                filename:'./index.html',    //生成的html存放路径，相对于 path
                inject:true,    //允许插件修改哪些内容，true/'head'/'body'/false,
                hash:false,    //为静态资源生成hash值
                minify:{    //压缩HTML文件
                    removeComments:false,    //移除HTML中的注释
                    collapseWhitespace:false    //删除空白符与换行符
                }        
            })
      ],
    devServer: {
        contentBase: path.join(__dirname, "/"),
        hot: true,
        port: 5000
    }
}