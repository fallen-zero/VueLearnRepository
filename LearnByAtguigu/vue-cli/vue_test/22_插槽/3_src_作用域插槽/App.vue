<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 14:19:47
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div class="container">
        <Category title="游戏">
            <template scope="zero">
                <ul>
                    <li v-for="(g, index) in zero.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="{games}">
                <ol>
                    <li style="color: red;" v-for="(g, index) in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(g, index) in games" :key="index">{{g}}</h4>
            </template>
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
    }
</script>

<style lang="css" scoped>
    .container, .foot {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 100%;
    }

    video {
        width: 100%;
    }

    h4 {
        text-align: center;
    }
</style>