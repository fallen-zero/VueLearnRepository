<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-03 00:04:53
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School />
        <Student />
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue';
    // 引入Student组件
    import Student from './components/Student.vue';

    export default {
        name: 'App',
        data() {
            return {
                msg: '你好呀！',
            }
        },
        components: {
            School,
            Student,
        },
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>