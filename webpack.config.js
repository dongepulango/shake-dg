const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const isDevMode = mode !== 'production';

module.exports = {
  mode,
  entry: {
    main: './src/app.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevMode,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader"
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
    }),
  ],
  devServer: {
    port: 8090,
    publicPath: '/',
    historyApiFallback: { index: '/' },
  },
};
