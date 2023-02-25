---
nav: JS
group: vue3
---

# Vue2和Vue3区别

1. 双向绑定原理不同. 2使用的是`Object.definePropert`方法劫持数据加发布者订阅者模式实现. 3使用了Proxy Api实现代理
2. 3支持组件内同时存在多个根节点
3. 2中使用的选项式API. 3中使用的是组合式API
4. 2中将数据存放在data属性中, 在3中通过setup方法中通过hooks调用reactive和ref方法创建响应式数据
5. 生命周期钩子不同, 3将2中的beforeCreate和Created钩子合并到了setup中
6. 3中新增瞬移组件
