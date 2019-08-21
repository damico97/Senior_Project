module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.png$/,
                use: 'file-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};