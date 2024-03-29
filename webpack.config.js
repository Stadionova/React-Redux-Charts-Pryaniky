module.exports = {
    entry: './src/app.js',
    output: { path: __dirname, filename: './build/bundle.js' },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' }
        ]
    }
}