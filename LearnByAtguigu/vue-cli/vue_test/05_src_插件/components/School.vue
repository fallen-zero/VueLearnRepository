<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:26:49
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div>
        <h2>学校名称: {{name | mySlice}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="test">点我测试一个hello方法</button>
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
        methods: {
            test() {
                this.hello();
            }
        },
    }
</script>