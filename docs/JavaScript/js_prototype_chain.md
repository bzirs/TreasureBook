---
nav: JS
group: js
---

# 什么是原型链

原型链是一种**查找规则**, 为对象成员查找提供了一种规则. 构造函数的`prototype`(原型)和它实例的`proto` 都指向原型对象.

可以通过`__proto__`查找当前实例的原型对象有没有该属性, 没有就继续向上找原型的原型, 一直找到Object(null)为止. 链式查找的过程为原型链