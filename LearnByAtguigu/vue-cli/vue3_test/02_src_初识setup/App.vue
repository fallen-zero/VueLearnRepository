<!--
 * @Author       : Zero
 * @Date         : 2022-01-09 11:27:13
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 18:37:33
 * @FilePath     : /vue3_test/src/App.vue
-->


<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <h2>性别: {{sex}}</h2>
  <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的setup配置中去读取Vue2的数据、方法</button>
</template>

<script>
  import { h } from 'vue';

  export default {
    name: 'App',
    data() {
      return {
        sex: '男',
      }
    },
    methods: {
      sayWelcome() {
        alert('欢迎来到fallen学习');
      },
      test1() {
        console.log(this.sex);
        console.log(this.name);
        console.log(this.age);
        console.log(this.sayHello);
      },
    },
    // 此处只是测试一下setup, 暂时不考虑响应式的问题。
    setup() {
      // 数据
      let name = '张三';
      let age = 18;

      // 方法
      function sayHello() {
        alert(`我叫${name}, 我${age}岁了, 你好啊!`);
      }

      
      function test2() {
        console.log(this.sex);
        console.log(age);
        console.log(name);
        console.log(sayHello);
        console.log(this.sayWelcome);
      }

      // 返回一个对象 (常用)
      return {
        name,
        age,
        sayHello,
        test2,
      }

      // 返回一个函数 (渲染函数)
      // return () => h('h1', 'fallen');
    },
  }
</script>
