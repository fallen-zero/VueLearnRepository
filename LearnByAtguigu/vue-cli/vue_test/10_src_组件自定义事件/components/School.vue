<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-30 10:39:36
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div class="school">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
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
        props: [
            'getSchoolName',
        ],
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.name);
            }
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>