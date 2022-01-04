<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 13:14:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-03 23:37:17
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/MyItem.vue
-->


<template>
    <li>
        <label :for="todo.id">
            <input type="checkbox" @change="handleCheck(todo.id)" :checked="todo.done" :id="todo.id"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text" 
                :value="todo.title"
                v-show="todo.isEdit" 
                @blur="handleBlur(todo, $event)" 
                ref="inputTitle"
            />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name: 'MyItem',
        // 声明接收todo对象
        props: [
            'todo',
        ],
        methods: {
            handleCheck(id) {
                // 通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id);
                this.$bus.$emit('checkTodo', id);
            },
            handleDelete(id) {
                if(confirm('确定删除吗？')) {
                    // this.deleteTodo(id);
                    // this.$bus.$emit('deleteTodo', id);
                    pubsub.publish('deleteTodo', id);
                }
            },
            handleEdit(todo) {
                // todo.isEdit = true;
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true;
                } else {
                    console.log('todo身上没有isEdit');
                    this.$set(todo, 'isEdit', true);
                }
                this.$nextTick(() => {
                    this.$refs.inputTitle.focus();
                });
            },
            // 失去焦点回调（真正执行修改逻辑）
            handleBlur(todo, e) {
                todo.isEdit = false;
                if (!e.target.value.trim()) return alert('输入不能为空');
                this.$bus.$emit('updateTodo', todo.id, e.target.value);
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