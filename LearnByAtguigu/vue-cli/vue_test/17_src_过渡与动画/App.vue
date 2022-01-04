<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:41:02
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 07:34:17
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/App.vue
-->


<template>
    <div>
       <Test />
        <Test2 /> 
        <Test3 /> 
    </div>
</template>

<script>
    import Test from './components/Test.vue';
    import Test2 from './components/Test2.vue';
    import Test3 from './components/Test3.vue';

    export default {
        name: 'App',
        components: {
            Test,
            Test2,
            Test3,
        },
    }
</script>

<style>
   
</style>