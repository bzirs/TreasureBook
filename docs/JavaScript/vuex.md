---
nav: JS
group: Vuex
---

# 什么是Vuex

vuex 是为了解决web 组件化开发过程中, 组件传值的复杂和混乱问题, 是vue 的状态管理模式. 采用**集中式**存储和管理所有组件的状态, 按照内定的规则保证状态以一种`可预测`的方式发生变化.

需要共享的数据存储在`state`中. 获取或格式化数据使用`getters`. 改变state中的数据需要用到`mutation`, 但是只能进行同步操作. 异步操作要用到`action`, 它不可以直接修改state中的状态, 需要利用mutation作为中间件, 对state进行管理
