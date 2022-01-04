/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:16:45
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 09:34:14
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/vue.config.js
 */

module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // entry: 'src/zero.js',
      },
    },
    lintOnSave: false,  // 关闭语法检查
    // 开启代理服务器(方式一)
    /* devServer: {
      proxy: 'http://localhost:5000'
    }, */
    // 开启代理服务器(方式二)
    devServer: {
      proxy: {
        '/zero' : {
          target: 'http://localhost:5000',
          pathRewrite: {'^/zero': ''},
          ws: true, // 用于支持websocket
          changeOrigin: true, // 用于控制请求头中的host值
        },
        'demo': {
          target: 'http://localhost:5001',
          pathRewrite: {'^/demo': ''},
        }, 
      }
    }
  }