<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-03 22:11:00
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/Student.vue
-->


<template>
    <div class="student">
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
        <button @click="sendStudentName">发送学生名称给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';

    export default {
        name: 'Student',
        data() {
            return {
                name: 'Zero',
                sex: '男',
            }
        },
        methods: {
            sendStudentName() {
                // this.$bus.$emit('hello', this.name);
                pubsub.publish('hello', this.name);
            }
        },
    }
</script>

<style lang="less" scoped>
    .student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>