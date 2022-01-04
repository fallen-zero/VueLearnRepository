<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 09:35:43
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
    import axios, { Axios } from 'axios';

    export default {
        name: 'App',
        methods: {
            getStudents() {
                axios.get('http://localhost:8080/zero/students').then(
                    (response) => {
                        console.log('请求成功', response.data);
                    },
                    (error) => {
                        console.log('请求失败了', error.message);
                    }
                );
            },
            getCars() {
                axios.get('http://localhost:8080/demo/cars').then(
                    (response) => {
                        console.log('请求成功', response.data);
                    },
                    (error) => {
                        console.log('请求失败了', error.message);
                    }
                );
            },
        },
    }
</script>
