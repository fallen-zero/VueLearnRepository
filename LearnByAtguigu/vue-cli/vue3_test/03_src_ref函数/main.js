/*
 * @Author       : Zero
 * @Date         : 2022-01-09 11:27:13
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 11:53:00
 * @FilePath     : /vue3_test/src/main.js
 */


// 引入的不再是Vue构造函数了, 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'

createApp(App).mount('#app');
// 创建应用实例对象——app(类似于之前Vue2中的vm, 但app比vm更"轻")
// const app = createApp(App);
// console.log('@@@', app);
// 挂载
// app.mount('#app');

/* setTimeout(() => {
    app.unmount('#app')
}, 1000) */

/* const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app') */