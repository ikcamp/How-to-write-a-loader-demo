var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true
    },
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: ['html-loader', 'html-minify-loader']
        }]
    },
    resolveLoader: {
        modules: [path.join(__dirname, './src/loaders'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ]
}