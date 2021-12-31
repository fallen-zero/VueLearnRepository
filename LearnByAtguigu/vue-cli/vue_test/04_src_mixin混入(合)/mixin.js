/*
 * @Author       : Zero
 * @Date         : 2021-12-29 10:54:13
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 11:03:09
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/mixin.js
 */


export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log('你好呀!');
    },
};

export const hunhe2 = {
    data() {
        return {
            x: 100,
            y: 200,
        }
    },
}