/*
 * @Author       : Zero
 * @Date         : 2021-12-29 11:24:04
 * @LastEditors  : Zero
 * @LastEditTime : 2021-12-29 12:23:05
 * @FilePath     : /Learn/Vue2+Vue3/vue-cli/vue_test/src/plugins.js
 */


export default {
    install(Vue) {
        // console.log('@@@install', Vue);

        // 全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4);
        });

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted (element, binding) {
                element.focus();
            },
            // 指令所在的模板被重新解析时
            updated(element, binding) {
                element.value = binding.value;
            },
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            },
        });

        // 给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = () => {alert('你好呀')};
    }
}