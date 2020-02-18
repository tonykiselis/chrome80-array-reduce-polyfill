const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    output: {
        library: 'chrome80-array-reduce-polyfill',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    devtool: 'source-map',
    context: path.resolve(__dirname, '.'),
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules'],
    },
    target: 'web',
    externals: [nodeExternals()],
};
