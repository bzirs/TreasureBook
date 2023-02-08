---
nav: JS
group: Vuex
---
# vuex核心

1. state: 唯一数据源
2. getters: 就像vue中的计算属性一样, getters的返回值会被缓存, 只有依赖值发生改变才重新计算
3. mutation: 更改state中状态的唯一方式, 类似于事件
4. action: 类似于mutation, 不同的是需要借助mutation才能更改state, action可以包含异步操作
5. module: 由于使用单一状态树, 所有的状态集中在一个对象内会变得臃肿. vuex允许我们利用模块分割store
