<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-03 00:08:15
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div class="school">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: 'Fallen',
                address: 'Shanghai',
            }
        },
        mounted() {
            this.$bus.$on('hello', (data) => {
                console.log('我是School组件, 接收到了Student姓名: ', data)
            });
        },
        beforeDestroy() {
            this.$bus.$off('hello');
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>