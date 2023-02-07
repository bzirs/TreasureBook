---
nav: JS
group: Vue-Router
---

# history模式

根据HTML5 `pushState` 和 `replaceState` 方法, 以及`popstate`事件. 地址改变时, 利用`window.location.pathname`找到对应组件. 通过构造Router类, 配置routes对象以及对应的组件

路径美观, 新的URL可以与当前URl同源, 新的URL可以与当前URL一模一样, 通过`stateObject`参数可以添加任意类型的数据到记录, 可额外设置title属性, 触发浏览器popstate事件,控制页面变化

兼容性差, 需要后端配置支持
