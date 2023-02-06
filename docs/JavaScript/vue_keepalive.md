---
nav: JS
group: vue
---
# keep-alive

keep-alive 是 Vue 内置的一个组件，可以用来做**组件缓存**以提升性能。

一般用这个内置组件可以包裹住动态组件(component)或路由出口的地方, 它提供的也有 include 属性可以`控制缓存哪些组件名`, exclude 属性`控制不缓存哪些组件`, 它对应的也有两个钩子, 分别是激活时触发的 activated 和失活时触发的 deactivated.
