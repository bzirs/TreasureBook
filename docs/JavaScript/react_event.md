---
nav: JS
group: React
---

# React事件机制

React 不是将事件绑定到了真实dom上, 而是在document处监听了所有事件. 当事件发生并且冒泡到document的时候. react将事件封装并交给真正的处理函数运行. 这样方式减少了内存消耗还能在组件挂载销毁时统一订阅和移除事件.
