const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname,_path);


const baseConfig = {
    entry:resolvePath('../src/index.jsx'),
    output:{
        path:resolvePath('../dist'),
        filename: '[name].bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            },{
                test:/\.jsx$/,
                use:'babel-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: resolvePath('../public/index.html'),
            filename: 'index.html',
            title:'大富网络测试'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new CleanWebpackPlugin()

    ],
    resolve: {
        alias: {'@': resolvePath('src')},
        extensions:['.js','.jsx']
    }
}

module.exports = {
    resolvePath,
    baseConfig
}