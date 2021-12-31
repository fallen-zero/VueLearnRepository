<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 10:30:30
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <Student name="李四" sex="女" :age="18" />
    </div>
</template>

<script>
    // 引入Student组件
    import Student from './components/Student.vue';

    export default {
        name: 'App',
        components: {
            Student,
        },
    }
</script>