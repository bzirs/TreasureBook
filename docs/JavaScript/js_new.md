---
nav: JS
group: js
---
# new操作符流程

首先创建一个空的对象, 将对象的原型对象指向构造函数的原型对象, 将对象的this指向构造函数, 判断如果当前的构造函数是否是对象, 如果是对象则返回构造函数, 如果不是则返回新创建的对象