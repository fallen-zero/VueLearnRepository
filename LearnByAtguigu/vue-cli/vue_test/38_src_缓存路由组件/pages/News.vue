<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 12:33:08
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-08 18:17:05
 * @FilePath     : /vue_test/src/pages/News.vue
-->


<template>
    <ul>
        <li>news001 <input type="text" /></li>
        <li>news002 <input type="text" /></li>
        <li>news003 <input type="text" /></li>
    </ul>
</template>

<script>
    export default {
        name: 'News',
        beforeDestroy() {
            console.log('News组件即将被销毁了');
        },
    }
</script>