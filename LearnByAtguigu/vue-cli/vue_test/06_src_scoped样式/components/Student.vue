<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:53:17
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/Student.vue
-->


<template>
    <div class="demo">
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Zero',
                sex: '男',
            }
        },
    }
</script>

<style scoped>
    .demo {
        background-color: orange;
    }
</style>