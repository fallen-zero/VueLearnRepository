<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 10:52:54
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <School/>
        <hr>
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