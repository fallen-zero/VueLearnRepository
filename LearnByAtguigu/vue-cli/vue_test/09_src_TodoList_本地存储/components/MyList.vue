<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 13:14:32
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 15:59:48
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/MyList.vue
-->


<template>
    <ul class="todo-main">
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
    import MyItem from "./MyItem.vue";

    export default {
        name: "MyList",
        components: {
            MyItem,
        },
        props: [
            'todos',
            'checkTodo',
            'deleteTodo',
        ],
    };
</script>

<style scoped>
    /* main */
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>