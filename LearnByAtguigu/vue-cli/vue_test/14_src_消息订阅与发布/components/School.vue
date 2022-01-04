<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-03 22:11:29
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div class="school">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    
    export default {
        name: 'School',
        data() {
            return {
                name: 'Fallen',
                address: 'Shanghai',
            }
        },
        methods: {
            demo(msgName, data) {
                console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data, this);
            }
        },
        mounted() {
           /*  this.$bus.$on('hello', (data) => {
                console.log('我是School组件, 接收到了Student姓名: ', data)
            }); */
            /* this.pubId = pubsub.subscribe('hello', (msgName, data) => {
                console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
            }); */
            this.pubId = pubsub.subscribe('hello', this.demo);
        },
        beforeDestroy() {
            // this.$bus.$off('hello');
            pubsub.unsubscribe(this.pubId);
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>