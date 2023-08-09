module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // look for all js files
                exclude: /node_modules/, // ignore all js in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"], // preset-react allow webpack to interpret jsx and preset-env convert es6 to es5
                        plugins: ["@babel/plugin-transform-runtime"],
                    }
                }
            }
        ]
    }
}