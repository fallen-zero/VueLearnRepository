/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:15
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 11:01:06
 * @FilePath     : /vue_test/src/main.js
 */
import Vue from 'vue';
// 引入Vue

// 引入App
import App from './App.vue';
// 引入插件
import vueResource from 'vue-resource';
// 引入store
import store from './store';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);

// 创建vm
const vm = new Vue({
    el: '#app',
    render: (h) => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});
// console.log(vm);