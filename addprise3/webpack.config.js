module.exports = {
    entry: "./app.es",
    output: {
        path: __dirname+'/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};