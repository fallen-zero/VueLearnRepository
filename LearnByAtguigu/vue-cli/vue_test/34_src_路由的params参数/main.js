/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:15
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 11:55:16
 * @FilePath     : /vue_test/src/main.js
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引用VueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './router';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用插件
Vue.use(VueRouter);

// 创建vm
const vm = new Vue({
    el: '#app',
    render: (h) => h(App),
    router: router,
});