const { merge } = require("webpack-merge")
const dev = require("./webpack.dev.js")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(dev, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        pure_funcs: ["console.debug"], // oppure drop_console: true
                    },
                },
            }),
        ],
    },
})
