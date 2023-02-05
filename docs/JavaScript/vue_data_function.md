---
nav: JS
group: vue
---
# data属性是函数而不是对象?

因为组件是引用类型, 当组件复用时, 数据对象都指向同一个data 对象, 在一个组件内修改data 时, 会影响到其他复用组件的data, 每个组件函数返回的data 对象都是全新的对象, 就不会有这个问题.