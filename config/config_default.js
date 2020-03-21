const moment = require('moment')
const path = require('path')
const pkg = require('../package.json')

const dateFormat = () => `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}]`

module.exports = {
  debug: true,
  projectName: pkg.name,
  port: 3333, // 单独起服务的端口
  versionPrefix: `/${pkg.name}/${pkg.version}/`,
  proxy: {
    '/api/*': {
      target: `http://127.0.0.1:9018`,
      changeOrigin: true, // 支持跨域请求
      secure: true, // 支持 https
    },
  },
}
