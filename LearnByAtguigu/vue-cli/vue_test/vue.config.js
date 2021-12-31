/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:16:45
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:32:15
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/vue.config.js
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
    devServer: {
      host: '0.0.0.0',
      public: '192.168.1.179:8080',
    }
  }