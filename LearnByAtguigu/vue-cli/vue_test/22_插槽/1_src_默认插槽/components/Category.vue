<!--
 * @Author       : Zero
 * @Date         : 2022-01-04 13:05:19
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 13:37:37
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/Category.vue
-->


<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 (挖个坑, 等着组件的使用者进行填充) -->
        <slot>我是一些默认值, 当使用者没有传递具体结构时, 我会出现</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title'],
}
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange;
    }
</style>