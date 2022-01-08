<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 21:38:48
 * @FilePath     : /vue_test/src/App.vue
-->


<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <Banner />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始html中我们使用a标签实现页面的跳转 -->
                    <!-- <a href="./about.html" class="list-group-item active">About</a> -->
                    <!-- <a href="./home.html" class="list-group-item">Home</a> -->

                    <!-- Vue借助router-link实现路由的切换 -->
                    <router-link replace :to="{name: 'guanyu'}" class="list-group-item" active-class="active">About</router-link>
                    <router-link replace to="/home" class="list-group-item" active-class="active">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner.vue';
    
    export default {
        name: 'App',
        components: {
            Banner,
        }
    }
</script>