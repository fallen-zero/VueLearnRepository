<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 19:12:30
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 19:22:58
 * @FilePath     : /vue_test/src/pages/Detail.vue
-->


<template>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
        mounted() {
            console.log(this.$route);
        },
    }
</script>