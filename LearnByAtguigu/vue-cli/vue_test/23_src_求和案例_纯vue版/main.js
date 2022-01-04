/*
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:15
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 12:19:52
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/main.js
 */

// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入插件
import vueResource from 'vue-resource';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);

// 创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});