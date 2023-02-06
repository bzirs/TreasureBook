---
nav: JS
group: Vue-Router
---

# 路由跳转的方式

`$router.push`方法跳转到指定的 URL, 并在history 中添加记录, 回退时返回上一个页面.

`$router.replace`方法跳转到指定的 URL, 但是history 中不会添加记录, 回退时返回上上个页面

`$router.go(n)`方法向前或向后跳转n 个页面, n 可以是整数或负数
