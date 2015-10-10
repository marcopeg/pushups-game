var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './app/app.prod'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            path.join(__dirname, 'app'),
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    // 'react-hot', 
                    'babel?' + [
                        'optional[]=es7.classProperties',
                        'optional[]=es7.decorators'
                    ].join('&')
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
        ]
    }
};
