---
nav: JS
group: vue
---
# 生命周期

vue 实例从创建到销毁的过程就是生命周期. 声明周期分为四大阶段, 八大钩子函数.

- 在挂载阶段有beforeCreate, created, beforeMount, mounted 四个钩子.
  1. beforeCreate 执行的时候, data 和method 还没有初始化, 只有一些默认的方法
  2. created 执行时, data 和method 已经初始化完毕, 可以操作
  3. beforeMount 执行时, 内存中已经渲染好了模板, 还没有渲染到页面上
  4. mounted 执行时, 内存中的模板, 已经真实的替换到了DOM上

- 在更新阶段有beforeUpdate, updated两个钩子.
  1. beforeUpdate 执行时, 页面显示的数据还是上一次的, 但是data 中数据已经更新
  2. updated 执行时, 已经将更新后的数据渲染到视图, 页面的数据和data 中保持了同步

- 在销毁阶段有beforeDestroy, destroyed两个钩子
  1. beforeDestroy 执行时, 实例准备进入销毁阶段, 此时 data, method, 指令还是可以使用的
  2. destroyed 执行时, 实例已经销毁了, 此时 data, method, 指令不可使用
