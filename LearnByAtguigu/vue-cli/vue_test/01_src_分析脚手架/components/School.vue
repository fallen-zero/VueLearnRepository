<!--
 * @Author       : Zero
 * @Date         : 2021-12-28 15:58:10
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-28 16:11:10
 * @FilePath     : /Learn/Vue2+Vue3/单文件组件/School.vue
-->


<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{ schoolName }}</h2>
        <h2>学校地址: {{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "School",
        data() {
            return {
                schoolName: "Fallen",
                address: "Shanghai",
            };
        },
        methods: {
            showName() {
                alert(this.schoolName);
            },
        },
    };

    // export {school};
    // export default school;
</script>

<style>
    /* 组件的样式 */
    .demo {
    background-color: orange;
    }
</style>