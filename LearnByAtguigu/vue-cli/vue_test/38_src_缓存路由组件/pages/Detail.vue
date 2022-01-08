<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 19:12:30
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 20:22:51
 * @FilePath     : /vue_test/src/pages/Detail.vue
-->


<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id', 'title'],
        mounted() {
            console.log(this.$route);
        },
    }
</script>