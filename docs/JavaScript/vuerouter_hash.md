---
nav: JS
group: Vue-Router
---

# hash路由模式

基于浏览器hash change事件, 当url地址改变时, 通过window.location.hash 获取地址的hash值, 通过构造Router类, 配置routes 对象改变对应的组件内容

hash 值的改变不会重新加载页面, 可以触发hash change事件, 控制浏览器的前进后退,兼容性好

url地址携带#, 不美观. 只能修改#后面内容, 只能设置同URL的路径. hash有体积限制, 只能添加段字符串. 设置的新值不一样才会触发change事件. 不利于seo(url改变不属于http请求)
