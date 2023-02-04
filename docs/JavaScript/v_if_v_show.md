---
nav: JS
group: vue
---
# Vif和Vshow的区别

v-if 和v-show 都可以控制元素的显示隐藏, 但是v-if 会根据判断条件真实的创建和销毁元素, 会有很高的切换开销. v-show 会一直渲染元素, 只是根据css 的display:none/block 样式切换元素的显示与隐藏.
