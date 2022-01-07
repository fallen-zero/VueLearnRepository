<!--
 * @Author       : Zero
 * @Date         : 2022-01-04 13:05:19
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 15:20:02
 * @FilePath     : /vue_test/src/components/Count.vue
-->


<template>
    <div>
        <h1>当前求和为: {{ $store.state.sum }}</h1>
        <h3>当前求和放大10倍为: {{ $store.getters.bigSum }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            n: 1,   // 用户选择的数据
        }
    },
    methods: {
        increment() {
            this.$store.commit('JIA', this.n);
        },
        decrement() {
            this.$store.commit('JIAN', this.n);
        },
        incrementOdd() {
            /* if (this.$store.state.sum % 2) {
                this.$store.dispatch('jia', this.n);
            } */
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
           /* setTimeout(() => {
                this.$store.dispatch('jia', this.n);
            }, 500); */
            this.$store.dispatch('jiaWait', this.n);
        },
    },
}
</script>

<style lang="css" scoped>
    button {
        margin-left: 5px;
    }
</style>