---
nav: CSS
---
# link和@import

两者都是外部引用css样式的方式

1. link 是XHTML标签, 除了加载css样式外, 还可以定义RSS 等其他事务. @import 属于css 范畴, 只能加载css
2. link 引用css时, 页面载入时同时加载. @import 需要完全载入后再加载css
3. link 没有兼容性问题, @import 低版本浏览器不支持
4. link 支持js 控制dom 改变样式. @import 不支持
