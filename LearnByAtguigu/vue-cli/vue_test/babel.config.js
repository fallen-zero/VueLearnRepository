/*
 * @Author       : Zero
 * @Date         : 2021-12-31 10:40:30
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-09 11:05:25
 * @FilePath     : /vue_test/babel.config.js
 */


module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset', ["@babel/preset-env", { "modules": false }],
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}