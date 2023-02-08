---
nav: JS
group: Vuex
---
# vuex核心

1. state: 唯一数据源
2. mutation: 更改state中状态的唯一方式, 类似于事件
3. action: 类似于mutation, 不同的是需要借助mutation才能更改state, action可以包含异步操作
4. module: 由于使用单一状态树, 所有的状态集中在一个对象内会变得臃肿. vuex允许我们利用模块分割store
