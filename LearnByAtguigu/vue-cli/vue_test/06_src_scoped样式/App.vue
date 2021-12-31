<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:54:57
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <h1>你好呀</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue';
    // 引入Student组件
    import Student from './components/Student.vue';

    export default {
        name: 'App',
        components: {
            School,
            Student,
        },
    }
</script>

<style scoped>
    .title {
        color: red;
    }
</style>