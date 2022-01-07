<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 10:24:05
 * @FilePath     : /vue_test/src/App.vue
-->


<template>
    <div>
        <Count />
    </div>
</template>

<script>
    import Count from './components/Count.vue';

    export default {
        name: 'App',
        components: {
            Count,
        },
        mounted() {
            // console.log('App', this);
        }
    }
</script>