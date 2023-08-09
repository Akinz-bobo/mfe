const { merge } = require("webpack-merge"); // use to merge two different webpack files together
const HtmlWebpackPlugin = require("html-webpack-plugin"); // takes the html files inside of our project and inject the script tags into it
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json')

const commonConfig = require("./webpack.common")
const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html",
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
        })
    ]
}

module.exports = merge(commonConfig, devConfig)