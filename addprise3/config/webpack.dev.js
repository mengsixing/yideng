const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    watch: true,
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
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
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
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/star.html',
            template: 'src/wiget/star.html',
            inject: false
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/thumb.html',
            template: 'src/wiget/thumb.html',
            inject: false
        })
    ]
}