---
nav: JS
group: Vue-Router
---
# history模式为什么跳404

url改变属于http 请求, 借助`history.pushState`实现页面无刷新跳转, 因此会重新请求服务器. 所以URl地址必须和后端URL路径一致
