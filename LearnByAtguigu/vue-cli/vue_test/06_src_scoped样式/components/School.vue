<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:58:26
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div class="demo">
        <h2 class="title">学校名称: {{name}}</h2>
        <h2 class="zero">学校地址: {{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: 'Fallen_Zero',
                address: 'Shanghai',
            }
        },
    }
</script>

<style lang="less" scoped>
    .demo {
        background-color: skyblue;
        .zero {
            font-size: 40px;
        }
    }
</style>