---
nav: JS
group: React
---

# React事件件和普通的HTML 事件有什么不同

对于事件名称命名方式不同，原生事件为全小写，react 事件采用小驼峰

对于事件函数处理语法不同，原生事件为字符串，react 事件为函数

react 事件不能采用return false 的方式来阻止浏览器的默认行为,而必须要地明确地调用preventDefault()来阻止默认行为。
