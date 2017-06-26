module.exports = {
    entry: [__dirname + '/app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react']
            }
        }]

    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}