// "vue inspect > config.js" in a CLI will generate the latest webpack configuration in root > config.js
// add further aliases by chaning webpack with alias resolutions, and confirm with above check

const path = require('path')
module.exports = {
 chainWebpack: config => {
     config.resolve.alias
         .set('@image', path.resolve(__dirname, 'public/img'));
 },
 configureWebpack: {
  module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
            loader: 'style-resources-loader',
            options: {
                patterns: [
                    path.resolve(__dirname, './src/styles/global.scss'),
                ]
            }
        }]
    }]
  },
 },
}
