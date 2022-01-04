<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 10:27:29
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div class="container">
        <Search />
        <List />
    </div>
</template>

<script>
    // import './assets/css/bootstrap.css';
    import Search from './components/Search.vue';
    import List from './components/List.vue';

    export default {
        name: 'App',
        components: {
            Search,
            List,
        }
    }
</script>