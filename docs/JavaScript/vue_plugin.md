---

nav: JS
group: vue
---

# vue插件

Vue.use()的参数类型必须是 object 或 Function, 如果是 Function 那么这个函数就被当做 install 方法, 如果是 object 则需要定义一个 install 方法.

插件通常用来为 Vue 添加全局功能. 如添加全局方法或者属性, 全局资源, 公共组件, 公共指今, 通过全局混入来添加一些组件选项, 添加 Vue 实例方法
