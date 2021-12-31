/*
 * @Author       : Zero
 * @Date         : 2021-12-28 16:20:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-28 16:41:16
 * @FilePath     : /Learn/Vue2+Vue3/单文件组件/main.js
 */


import App from "./App.vue";

new Vue({
    el: "#root",
    template: `<App></App>`,
    components: {
        App,
    },
});