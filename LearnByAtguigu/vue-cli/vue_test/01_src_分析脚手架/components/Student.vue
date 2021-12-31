<!--
 * @Author       : Zero
 * @Date         : 2021-12-28 15:58:10
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-28 16:13:35
 * @FilePath     : /Learn/Vue2+Vue3/单文件组件/Student.vue
-->


<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名称: {{ name }}</h2>
        <h2>学生年龄: {{ age }}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "Student",
        data() {
            return {
                name: "Zero",
                age: 18,
            };
        },
    };

</script>
