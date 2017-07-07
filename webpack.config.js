const path = require('path');
const webpack = require('webpack');
const webpackCommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({ //избегаем дублирование модулей в коде,
    name: 'commons',
    filename: 'common.js',
    minChunks: 2, // модули которые загружаются 2 или более раза
    allChunks: true
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    //context: path.resolve(__dirname, './src'),
    //entry:[
    //    //'webpack-dev-server/client?http://localhost:8000',
    //    //'webpack/hot/only-dev-server',
    //    './index.js'
    //]
    //,
    //output: {
    //    filename: 'app.bundle.js',
    //    path: path.resolve(__dirname, './dist'),
    //    publicPath: './',
    //},
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './client/index.js',
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        //publicPath: './',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015', 'react', 'stage-0'] },
                    }
                ],
                exclude: [
                    /node_modules/ // babel не пропускает через себя эту дир.
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ],
    },

    plugins: [
        HtmlWebpackPluginConfig,
        webpackCommonsChunkPluginConfig,
        HotModuleReplacementPlugin,
    ],

    resolve: {
        modules: [path.resolve(__dirname, './client'), 'node_modules'] // избегаем ошибок при импортах, сначала смотрим исходную дир., а затем модули.
    },

    //devServer: {
    //    //contentBase: path.resolve(__dirname, './client'),
    //    port: 8000,
    //    //publicPath: './',
    //},

};