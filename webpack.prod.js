const path = require("path");
const common = require("./webpack.common.js");
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "img/[name].[hash][ext]",
        clean: true,
        // publicPath: "",
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    ],
    module: {
        rules: [
            // {
            // test: /\.m?js$/,
            // exclude: /node_modules/,
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //     presets: [
            //         ['@babel/preset-env', { targets: "defaults" }]
            //     ]
            //     }
            //   }
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Extract CSS into files
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    }
});

        