<!--
 * @Author       : Zero
 * @Date         : 2022-01-09 11:27:13
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 19:01:34
 * @FilePath     : /vue3_test/src/App.vue
-->


<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <h3>工作种类: {{job.type}}</h3>
  <h3>工作薪水: {{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import {ref} from 'vue';

  export default {
    name: 'App',
    setup() {
      // 数据
      let name = ref('张三');
      let age = ref(18);
      let job = ref({
        type: '前端工程师',
        salary: '30k',
      })

      // 方法
      function changeInfo() {
        name.value = '李四';
        age.value = 48;
        job.value.type = 'UI设计师';
        job.value.salary = '60k';
        // console.log(job.value)
        // console.log(name, age);
      }

      // 返回一个对象 (常用)
      return {
        name,
        age,
        changeInfo,
        job,
      }
    },
  }
</script>
