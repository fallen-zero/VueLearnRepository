<!--
 * @Author       : Zero
 * @Date         : 2022-01-06 16:34:23
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 16:59:49
 * @FilePath     : /vue_test/src/components/Person.vue
-->


<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red;">Count组件求和为: {{ sum }}</h3>
        <input type="text" v-model="name" placeholder="请输入名字">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid';

    export default {
        name: 'Person',
        data() {
            return {
                name: '',
            }
        },
        computed: {
            personList() {
                return this.$store.state.personList;
            },
            sum() {
                return this.$store.state.sum;
            },
        },
        methods: {
            add() {
                const personObj = {
                    id: nanoid(),
                    name: this.name,
                }
                this.$store.commit('ADD_PERSON', personObj);
                this.name = '';
            },
        }
    }
</script>

<style>

</style>