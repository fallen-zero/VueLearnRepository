<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 13:14:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-04 08:02:16
 * @FilePath     : /LearnByAtguigu/vue-cli/vue_test/src/components/MyList.vue
-->


<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj"
            />
        </transition-group>
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

    .todo-enter-active {
        animation: zero 0.5s linear;
    }

    .todo-leave-active {
        animation: zero 0.5s linear reverse;
    }

    @keyframes zero {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>