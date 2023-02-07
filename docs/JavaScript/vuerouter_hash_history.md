---
nav: JS
group: Vue-Router
---

# hash和history

路由本质就是url 和 页面的映射关系. **更新视图不重新请求页面**是前端路由原理核心之一, 浏览器中有两种实现方式

hash 模式中利用`#`和它之后的字符串称之为hash, 使用`window.location.hash`api读取, 使用hashchange事件监听hash值变化,对页面进行跳转

history 模式采用了HTML5新特性同时提供了`pushState`, `replaceState`方法对浏览器历史记录栈进行修改, 以及`popState`事件监听状态变更
