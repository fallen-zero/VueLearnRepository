<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 13:37:10
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g, index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue';

    export default {
        name: 'App',
        components: {
            Category,
        },
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '牛排'],
                games: ['红色警戒', '穿越火线', '英雄联盟', '超级玛丽'],
                films: ['《教父》', '《钢铁侠3》', '《你好, 李焕英》', '《拆弹专家》'],
            }
        },
    }
</script>

<style lang="css" scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>