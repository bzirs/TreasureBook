---
nav: JS
group: Vue-Router
---
# hash,history,abstract

hash 模式指在url 后面的 #号以及之后的字符, hash虽然出现在url中, 但不会包括在http请求内, 改变hash 不会导致刷新页面

history 模式是 url 路径就像正常的url 路径一样, 它需要后端配置支持, 如果没有配置支持, 访问页面会返回404

abstract 模式 它支持所有js运行模式, 如nodejs 服务器端, 如果发现没有浏览器的api, 路由会自动强制进入这个模式
