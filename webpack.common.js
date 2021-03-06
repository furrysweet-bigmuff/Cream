const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Cream',
                filename: 'index.html',
                template: './src/index.html',
                inject: 'body'
            }
        ),
    ],
    module: {
        rules: [
            {
                // це для імпорту зображень з src to dist
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/i,
                // issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
                // type: 'asset/resource'
            },
            
        ]
    }
}