const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//
// const generateHtmlPlugin = (title) => {
//   return new HtmlWebpackPlugin({
//     title,
//     filename: 'index.html',
//     template: `./src/pages/${title.toLowerCase()}/index.html`,
//   });
// }
//
// const populateHtmlPlugins = (pagesArray) => {
//   res = [];
//   pagesArray.forEach(page => {
//     res.push(generateHtmlPlugin(page));
//   })
//   return res;
// }
// const pages = populateHtmlPlugins(["faq_page", "about_us_page"])

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ["*", '.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
