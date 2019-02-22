//webpack.config.js

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
            }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    devServer: {
        inline: false,
        port: 3000
    }
};