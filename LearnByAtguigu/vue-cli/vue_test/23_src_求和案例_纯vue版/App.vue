<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 16:55:07
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
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
    }
</script>