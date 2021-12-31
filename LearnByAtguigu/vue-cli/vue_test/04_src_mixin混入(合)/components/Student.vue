<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 11:11:16
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/Student.vue
-->


<template>
    <div>
        <h2 @click="showName">学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
    </div>
</template>

<script>
    // 引入一个hunhe
    // import {hunhe, hunhe2} from '../mixin';
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Zero',
                sex: '男',
            }
        },
        // mixins: [hunhe, hunhe2],
    }
</script>