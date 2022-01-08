<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 17:30:22
 * @FilePath     : /vue_test/src/App.vue
-->


<template>
    <div>
        <Count />
        <hr>
        <Person />
    </div>
</template>

<script>
    import Count from './components/Count.vue';
    import Person from './components/Person.vue';

    export default {
        name: 'App',
        components: {
            Count,
            Person,
        },
    }
</script>