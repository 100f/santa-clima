const path = require('path');

const rootPath = path.resolve(__dirname, '..', '..', '..');

module.exports = {
    entry: path.resolve(__dirname, '..', '..', 'App.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(rootPath, 'dist/src/renderer/'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
        publicPath: '/',
    },
    output: {
        path: path.resolve(rootPath, 'dist/src/renderer/'),
        filename: '[name].js',
    },
};
