---
nav: JS
group: Vuex
---
# vuex的getters

getters 类似于vue 中的计算属性, 当需要从state中派生状态, 就可以使用getters. 它接收state 作为第一个参数, 返回值会被缓存, 只有依赖项发生改变才会被重新计算
