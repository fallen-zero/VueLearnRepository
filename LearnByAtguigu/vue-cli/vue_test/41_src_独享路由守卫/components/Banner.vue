<!--
 * @Author       : Zero
 * @Date         : 2022-01-07 12:15:07
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-08 18:05:17
 * @FilePath     : /vue_test/src/components/Banner.vue
-->


<template>
    <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下go</button>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            back() {
                this.$router.back();
            },
            forward() {
                this.$router.forward();
            },
            test() {
                this.$router.go(-2);
            },
        }
    };
</script>