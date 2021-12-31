<!--
 * @Author       : Zero
 * @Date         : 2021-12-28 16:15:30
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-28 17:17:00
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from "./components/School.vue";
    import Student from "./components/Student.vue";
    
    export default {
        name: "App",
        components: {
            School,
            Student,
        }
    }
</script>

<style>

</style>