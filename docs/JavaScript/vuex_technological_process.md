---
nav: JS
group: Vuex
---
# vuex工作流程

1. 组件内通过`dispatch(得死半尺)`触发action, 通常处理异步操作.
2. 拿到数据后通过`commit(课美特)`触发mutation
3. mutation来修改state(嘶得特)中的状态(数据), 所有组件内的vuex状态都会发生改变
4. 也可以直接通过`commit`跳过action, 直接同步操作state内的状态
