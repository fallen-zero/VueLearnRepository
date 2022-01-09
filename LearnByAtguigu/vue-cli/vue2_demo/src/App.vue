<!--
 * @Author       : Zero
 * @Date         : 2022-01-09 19:36:26
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 19:40:54
 * @FilePath     : /vue2_demo/src/App.vue
-->


<template>
  <div>
    <h1>我是Vue2写的效果</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="addSex">添加一个sex属性</button>
    <button @click="deleteName">删除name属性</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        person: {
          name: '张三',
          age: 18,
        },
      };
    },
    methods: {
      addSex() {

      },
      deleteName() {

      },
    }
  };
</script>
