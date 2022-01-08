/*
 * @Author       : Zero
 * @Date         : 2022-01-07 11:49:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 11:53:48
 * @FilePath     : /vue_test/src/router/index.js
 */

// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';

// 创建并导出一个路由器
export default new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
});