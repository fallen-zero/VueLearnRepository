<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 13:14:32
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 16:50:52
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/MyFooter.vue
-->


<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input 
                type="checkbox"
                :checked="isAll"
                @change="changeAll"
            /> -->
            <input 
                type="checkbox"
                v-model="isAll"
            />
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clickAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'MyFooter',
        props: [
            'todos',
            'checkAllTodo',
            'clearAllTodo',
        ],
        computed: {
            total() {
                return this.todos.length;
            },
            doneTotal() {
                /* const x = this.todos.reduce((pre, current) => {
                    console.log('@', pre, current);
                    return pre + (current.done ? 1 : 0);
                }, 0);
                console.log('#', x); */
                return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
            },
            /* isAll() {
                return this.doneTotal === this.total && this.total > 0;
            }, */
            isAll: {
                get() {
                    return this.doneTotal === this.total && this.total > 0;
                },
                set(value) {
                    this.checkAllTodo(value);
                }
            }
        },
        methods: {
            /* changeAll(e) {
                // console.log(e.target.checked);
                this.checkAllTodo(e.target.checked);
            } */
            clickAll() {
                if(confirm('确定删除吗？')) {
                    this.clearAllTodo();
                }
            }
        },
    }
</script>

<style scoped>
    /* footer */
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>