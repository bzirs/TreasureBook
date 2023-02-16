---
nav: JS
group: Vue-Router
---

# 路由传参方式

**声明式导航**利用`router-link`组件的to 属性传值. 一种是路径上使用?后拼接参数,使用`$route.query`接收参数, 另一种是路径上使用 /值 的形式, 使用`$route.params`接收参数

**编程式导航**使用`$router.push`中`name+params`方式传参, 使用`$route.params`接收参数. `path+query`传参, 使用`$route.query`接收参数.

params和query区别, 写法不同, 地址栏不同, 刷新方式不同
