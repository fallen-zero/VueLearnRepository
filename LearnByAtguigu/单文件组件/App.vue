<!--
 * @Author       : Zero
 * @Date         : 2021-12-28 16:15:30
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-28 17:17:23
 * @FilePath     : /Learn/Vue2+Vue3/单文件组件/App.vue
-->


<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from "./School.vue";
    import Student from "./Student.vue";
    
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