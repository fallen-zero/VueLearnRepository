/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:15
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 11:12:16
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/main.js
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
import { hunhe, hunhe2 } from './mixin';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

// 创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
});