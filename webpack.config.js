var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var server = {
    entry: './app/src/server.ts',
    target: 'node',
    mode: 'production',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.(ts)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
}
let configuration = (env) => {
    if (env == "server_build") {
        return server
    }
}

module.exports = configuration