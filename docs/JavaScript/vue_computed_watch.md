---
nav: JS
group: vue
---
# 计算属性和侦听器的区别

计算属性是触发函数内部任一依赖项的变化都会重新执行该函数, 计算属性有缓存, 多次重复使用计算属性时会从缓存中获取, 计算属性必须要有 return.  侦听器 某一数据的变化从而会触发函数, 当数据为对象类型时, 对象中的属性值变化时需要使用深度侦听 deep 属性, 也可在页面第一次加载时使用立即侦听 immediate 属性.
