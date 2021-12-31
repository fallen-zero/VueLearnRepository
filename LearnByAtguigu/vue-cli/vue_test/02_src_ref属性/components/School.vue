<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 09:47:39
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div class="school">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: 'Fallen',
                address: 'Shanghai',
            }
        },
    }
</script>

<style>
    .school {
        background-color: gray;
    }
</style>