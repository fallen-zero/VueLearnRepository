<!--
 * @Author       : Zero
 * @Date         : 2021-12-29 09:45:05
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 11:11:09
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/components/School.vue
-->


<template>
    <div>
        <h2 @click="showName">学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
    // 引入一个hunhe
    // import {hunhe, hunhe2} from '../mixin';
    export default {
        name: 'School',
        data() {
            return {
                name: 'Fallen',
                address: 'Shanghai',
                x: 66,
            }
        },
        // mixins: [hunhe, hunhe2],
        mounted() {
            console.log('你好呀!!!!!!');
        },
    }
</script>