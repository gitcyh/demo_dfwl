const { merge } = require('webpack-merge');

const {resolvePath,baseConfig} = require('./webpack.base.config');


module.exports = merge(baseConfig,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        host: '127.0.0.1',
        port:'8090',
        hot: true,
        open: false
    }
})