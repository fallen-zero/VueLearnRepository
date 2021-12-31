/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:15
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 11:26:33
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/main.js
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入插件
import plugins from './plugins';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用（使用）插件
Vue.use(plugins);

// 创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
});