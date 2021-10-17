const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        // another: './' mas archivos js para leer, buscar codespliting en webpack para mas info
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     // entry: '/src/index.html',
            //     loader: "html-loader",
            //     // options: {
            //     //     sources: false
            //     // }
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg|avif|webp)$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: 'assets/images/'
            //     }
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // minify: false
            // filename: 'index.[hash].html',
        })
    ]
};