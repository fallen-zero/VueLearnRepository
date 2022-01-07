/*
 * @Author       : Zero
 * @Date         : 2022-01-06 10:25:05
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-06 17:54:08
 * @FilePath     : /vue_test/src/store/index.js
 */

// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 使用Vuex
Vue.use(Vuex);

import countOptions from './count';
import personOptions from './person';

// 创建并导出store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
});