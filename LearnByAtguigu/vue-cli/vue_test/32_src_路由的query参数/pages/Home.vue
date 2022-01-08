<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 11:40:39
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 12:52:23
 * @FilePath     : /vue_test/src/pages/Home.vue
-->


<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        /* beforeDestroy() {
            console.log('Home组件即将被销毁了');
        }, */
        /* mounted() {
            console.log('Home组件挂载完毕了', this);
            window.homeRoute = this.$route;
            window.homeRouter = this.$router;
        }, */
    }
</script>