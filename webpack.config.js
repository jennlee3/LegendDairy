const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    devServer: {
      hot: true,
      host: 'localhost',
      port: 8080,
      static: {
          publicPath: '/dist',
          directory: path.resolve(__dirname, 'dist')
      },
      proxy: {
          '/api': {
            target: 'http://localhost:3000',
            secure: false,
            //changeOrigin: true,
          },
      }
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      }
}