const path = require('path');
const { module } = require('./webpack.config.react');

const rootPath = path.resolve(__dirname, '..', '..', '..');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: path.resolve(rootPath, 'src', 'main.ts'),
    target: 'electron-main',
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
    node: {
        __dirname: false,
    },
    output: {
        path: path.resolve(rootPath, 'dist/src/main'),
        filename: '[name].js',
    },
};
