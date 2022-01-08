/*
 * @Author       : Zero
 * @Date         : 2022-01-07 11:49:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 00:30:17
 * @FilePath     : /vue_test/43_src_history模式与hash模式/router/index.js
 */

// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

// 创建并导出一个路由器
const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    routes: [{
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                title: '关于',
                isAuth: true,
            },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: '主页',
            },
            children: [{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻',
                    },
                    /* beforeEnter: (to, from, next) => {
                        console.log('独享守卫', to, from, next)
                        if (to.meta.isAuth) { // 判断是否需要鉴权
                            if (localStorage.getItem('school') === 'fallen') {
                                next()
                            } else {
                                alert('学校名不对, 无权限查看!')
                            }
                        } else {
                            next()
                        }
                    }, */
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'xiangqing',
                        path: 'detail',
                        component: Detail,
                        meta: {
                            isAuth: true,
                            title: '消息',
                        },

                        // props的第一种写法, 值为对象, 该对象中的所有key-value都会以props的形式传给Detail组件。
                        /* props: {
                            a: 1,
                            b: 'hello',
                        }, */

                        // props的第二种写法, 值为布尔值, 若布尔值为真, 就会把该路由组件收到的所有params参数, 以props的形式传给Detail组件。
                        // props: true,

                        // props的第三种写法, 值为函数
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                            }
                        },
                        /* props({ query }) {
                            return {
                                id: query.id,
                                title: query.title,
                            }
                        }, */
                        /* props({ query: { id, title } }) {
                            return {
                                id: id,
                                title: title,
                            }
                        }, */
                    }]
                }
            ]
        },
    ]
});

// 全局前置路由守卫——初始化的时候被调用, 每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    // if (to.path === '/home/news' || to.path === '/home/message') {
    // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
    if (to.meta.isAuth) { // 判断是否需要授权
        if (localStorage.getItem('school') === 'fallen') {
            next();
        } else {
            alert('学校名不对，无权查看!');
        }
    } else {
        next();
    }
}); */

// 全局后置路由守卫——初始化的时候被调用, 每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'Demo系统';
    console.log('后置路由守卫', to, from);
});

export default router;