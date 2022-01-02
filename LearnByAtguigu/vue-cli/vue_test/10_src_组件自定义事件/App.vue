<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-02 00:18:02
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div class="app">
        <h1>{{msg}} 学生的性名是: {{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
        <School
            :getSchoolName="getSchoolName"
        />
        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法, 使用@或v-on) -->
        <!-- <Student
            v-on:zero="getStudentName"
            @demo="m1"
        /> -->
        <!-- <Student
            @zero.once="getStudentName"
        /> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法, 使用ref) -->
        <Student
            ref="student"
            @demo="m1"
            @click.native="show"
        />
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue';
    // 引入Student组件
    import Student from './components/Student.vue';

    export default {
        name: 'App',
        data() {
            return {
                msg: '你好呀!',
                studentName: '',
            }
        },
        components: {
            School,
            Student,
        },
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名: ' + name);
            },
            getStudentName(name, ...params) {
                // console.log('demo被调用了!');
                console.log('App收到了学生名: ', name, params);
                this.studentName = name;
            },
            m1() {
                console.log('demo事件被触发了!');
            },
            show() {
                console.log('123');
            }
        },
        mounted() {
            // setTimeout(() => {
                this.$refs.student.$on('zero', this.getStudentName); // 绑定自定义事件
                // this.$refs.student.$once('zero', this.getStudentName);  // 绑定自定义事件 (一次性)
            // }, 3000);
        },
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>