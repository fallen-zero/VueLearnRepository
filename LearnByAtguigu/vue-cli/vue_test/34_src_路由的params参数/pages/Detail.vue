<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 19:12:30
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-07 19:51:55
 * @FilePath     : /vue_test/src/pages/Detail.vue
-->


<template>
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li>
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