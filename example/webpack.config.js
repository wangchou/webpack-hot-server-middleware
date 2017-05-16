var webpack = require('webpack');
const path = require('path');

const dist = path.join(__dirname, 'dist');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: {
          main: [
            'webpack-hot-middleware/client',
            './client'
          ]
        },
        output: {
          path: dist,
          publicPath: 'http://localhost:6060/',
          filename: 'client.js'
        },
        devtool: 'source-map',
        plugins: [
          new webpack.HotModuleReplacementPlugin()
        ]
    }, {
        name: 'server',
        target: 'node',
        entry: './server',
        output: {
            path: dist,
            filename: 'server.js',
            libraryTarget: 'commonjs2'
        },
        devtool: 'source-map'
    }
];
