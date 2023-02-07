---
nav: Browser
group: 浏览器
---
# 前端路由原理

路由的核心, 是改变视图的同时不会向后端发送请求, 而是加载路由对应的组件

vueRouter 就是将组件映射到路由渲染, 实现了三种模式 Hash模式, History 模式, Abstract模式. 默认Hash模式
