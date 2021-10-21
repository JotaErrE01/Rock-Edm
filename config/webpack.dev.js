const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
    mode: 'development',
    // watch: true,
    // output: {
    //     assetModuleFilename: (pathData) => {
    //         // if (pathData?.filename.includes('.jpg') || pathData?.filename.includes('.webp')) {
    //         //     return 'assets/images/[hash][ext][query]';
    //         // }
    //         return 'assets/videos/[hash][ext][query]';
    //     }
    // },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        // compress: true,
        port: 4000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.(css|sass|scss)$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",]
            // },
            {
                test: /\.(jpe?g|png|gif|svg|avif|webp)$/i,
                type: "asset/resource",
                // generator: {
                //     filename: 'assets/images/[name][ext][query]'
                // }
            },
        ]
    },
    // devtool: 'eval',
    plugins: [
        // new CopyPlugin
        new MiniCssExtractPlugin({
            filename: "styles/style.css"
        }),
        new SourceMapDevToolPlugin({})
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/assets/", to: "assets/" },
        //         // { from: "other", to: "public" },
        //     ],
        // }),
    ]
}

module.exports = merge(common, devConfig);