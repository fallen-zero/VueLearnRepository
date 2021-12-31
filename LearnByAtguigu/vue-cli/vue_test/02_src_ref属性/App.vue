<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 10:05:38
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <h1 v-text="msg" id="title" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue';

    export default {
        name: 'App',
        data() {
            return {
                msg: '欢迎学习Vue!',
            }
        },
        components: {
            School,
        },
        methods: {
            showDom() {
                // console.log(document.getElementById('title'));
                console.log(this.$refs.title);  // 真实DOM元素
                console.log(this.$refs.btn);    // 真实DOM元素
                console.log(this.$refs.sch);    // School组件的实例对象 (vc)
            }
        },
    }
</script>