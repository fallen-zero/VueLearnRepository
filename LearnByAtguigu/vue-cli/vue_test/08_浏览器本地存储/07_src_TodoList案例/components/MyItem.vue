<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 13:14:32
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 16:00:26
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/MyItem.vue
-->


<template>
    <li>
        <label :for="todo.id">
            <input type="checkbox" @change="handleCheck(todo.id)" :checked="todo.done" :id="todo.id"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done" :id="todo.id"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'MyItem',
        // 声明接收todo对象
        props: [
            'todo',
            'checkTodo',
            'deleteTodo',
        ],
        methods: {
            handleCheck(id) {
                // console.log(id);
                // 通知App组件将对应的todo对象的done值取反
                this.checkTodo(id);
            },
            handleDelete(id) {
                if(confirm('确定删除吗？')) {
                    // console.log(id);
                    this.deleteTodo(id);
                }
            }
        },
    }
</script>

<style scoped>
    /* item */
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    
    li:hover {
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>