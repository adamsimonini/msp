// "vue inspect > config.js" in a CLI will generate the latest webpack configuration in root > config.js
// add further aliases by chaning webpack with alias resolutions, and confirm with above check

const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@image', path.resolve(__dirname, 'public/img'));
        config.resolve.alias.set('@dev', path.resolve(__dirname, 'dev-server'));
    },
}
