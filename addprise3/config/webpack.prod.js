const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.js'),
            path.join(__dirname, '../src/public/scripts/throttle.js'),
            path.join(__dirname, '../src/public/scripts/addone.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/scripts/tag.es'),
        ]
    },
    output: {
        filename: 'public/script/[name]-[hash:5].js',
        path: path.join(__dirname, '../build/')
    },
    module: {
        loaders: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
    }
    ]},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/script/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/layout.html',
            template: 'src/wiget/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './wiget/index.html',
            template: 'src/wiget/index.html',
            inject: false
        })
    ]
}