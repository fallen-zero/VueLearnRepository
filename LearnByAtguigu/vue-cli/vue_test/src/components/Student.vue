<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-30 11:21:35
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/Student.vue
-->


<template>
    <div class="student">
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
        <h2>当前求和为: {{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑zero事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Zero',
                sex: '男',
                number: 0,
            }
        },
        methods: {
            add() {
                console.log('add回调被调用了');
                this.number++;
            },
            sendStudentName() {
                // 触发Student组件实例身上的zero事件
                this.$emit('zero', this.name, this.sex, 666, 888);
                this.$emit('demo');
            },
            unbind() {
                // this.$off('zero');  // 解绑一个自定义事件
                // this.$off(['zero', 'demo']);  // 解绑多个自定义事件
                this.$off();    // 解绑所有的自定义事件
            },
            death() {
                this.$destroy();    // 销毁了当前Student组件的实例, 销毁后所有Student实例的自定义事件全都不奏效。
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