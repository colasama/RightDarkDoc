// vue.config.js for less-loader@6.0.0

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#E85A4F',
            'link-color': '#ec583a',
            'btn-border-radius-sm': '0px',
            'btn-border-radius-base': '0px',
            'card-radius': '10px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
};