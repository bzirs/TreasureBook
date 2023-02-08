---
nav: JS
group: Vue-Router
---

# 路由守卫

当用户满足条件时, 才让它进入路由, 否则就跳转到设定好的其他路由页面. 如登录权限认证

vueRouter 全局有三个守卫. `router.beforeEach`全局前置守卫在进入路由之前(三个参数to,from,next). `router.beforeResolve`全局解析守卫,
在`beforRouterEnter`调用之后调用(三个参数to,from,next). `router.afterEach`全局后置狗子, 在进入路由之后(两个参数to,from)

to: 要到哪里去, from:从哪里来, next:是否放行. 是函数, 必须调用, 否则无法进入页面.  next参数为空时, 放行. false时取消进入路由, 传路径跳转到指定路径, 重新开始路由
