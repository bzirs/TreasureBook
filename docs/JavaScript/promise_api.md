---
nav: JS
group: promise
---

# promise的API

1. 构造函数`Promise(excutor)`([文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise))
   - executor 函数, 执行器`(resolve,reject)=>promise`
   - resolve 函数, 内部pending 成功时调用的函数
   - reject 函数, 内部pending 失败时调用的函数
   - executor函数会在Promise 构造函数立即**同步**调用, 成功或失败的异步操作在执行器中执行
2. `Promise.prototype.then`方法`(onFulfilled[, onRejected])=>promise`
