var path=require('path');
module.exports = {
    entry: [
        './public/scripts/index.js',
        './public/stylesheets/index.css',
        './public/scripts/addone.js',
        './public/scripts/throttle.js'
    ],
    output: {
        path: __dirname + '/public/scripts/',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 5000,
        hot: true
    }
}