const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");
// const glob = require('glob');

const prodConfig = {
    mode: 'production',
    // output: {
    //     assetModuleFilename: (pathData) => {
    //         // if (pathData?.filename.includes('.jpg') || pathData?.filename.includes('.webp')) {
    //         //     return 'assets/images/[hash][ext][query]';
    //         // }
    //         return 'assets/videos/[hash][ext][query]';
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",]
            },
            // {
            //     loader: ImageMinimizerPlugin.loader,
            //     // exclude: /\.(mp4|ogg|webm)/,
            //     options: {
            //         // PNG images are converted to WEBP, and the originals will keep
            //         deleteOriginalAssets: false,
            //         filename: "adfa.webp",
            //         minimizerOptions: {
            //             plugins: ["imagemin-webp"],
            //         },
            //     },
            // },
            {
                test: /\.(jpe?g|png|gif|svg|avif|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[name][ext][query]'
                }
            },
        ]
    },
    plugins: [
        // new CopyPlugin
        new MiniCssExtractPlugin({
            filename: "styles/[hash].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "public/assets/", to: "assets/" },
                // { from: "other", to: "public" },
            ],
        }),
        // new ImageMinimizerPlugin({
        //     // test: /\.(jpe?g|png|gif|svg)$/i,
        //     minimizerOptions: {
        //         plugins: [
        //             // ["gifsicle", { interlaced: true }],
        //             ["jpegtran", { progressive: true, optimizationLevel: 3, quality: 50 }],
        //             ["optipng", { optimizationLevel: 5 }],
        //         ]
        //     },
        // }),
        // convertir a webp las importaciones de assets con html, js, css. Usar type: asset/resource
        // new ImageMinimizerPlugin({
        //     deleteOriginalAssets: false,
        //     filename: "images/[name].webp",
        //     minimizerOptions: {
        //         plugins: ["imagemin-webp"],
        //     },
        // }),
        // new ImageMinimizerPlugin({
        //     minimizerOptions: {
        //         // Lossless optimization with custom option
        //         // Feel free to experiment with options for better result for you
        //         plugins: [
        //             ["gifsicle", { interlaced: true }],
        //             ["jpegtran", { progressive: true }],
        //             ["optipng", { optimizationLevel: 5 }],
        //             // Svgo configuration here https://github.com/svg/svgo#configuration
        //             [
        //                 "svgo",
        //                 {
        //                     plugins: extendDefaultPlugins([
        //                         {
        //                             name: "removeViewBox",
        //                             active: false,
        //                         },
        //                         {
        //                             name: "addAttributesToSVGElement",
        //                             params: {
        //                                 attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        //                             },
        //                         },
        //                     ]),
        //                 },
        //             ],
        //         ],
        //     },
        // }),
    ]
}

module.exports = merge(common, prodConfig);


// -> para trabajar con copy webpack plugin
// module.exports = {
//     plugins: [
//         // Copy the images folder and optimize all the images
//         new CopyWebpackPlugin([{
//             from: 'images/'
//         }]),
//         new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
//     ]
// }