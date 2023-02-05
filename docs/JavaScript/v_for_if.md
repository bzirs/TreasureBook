---
nav: JS
group: vue
---
# Vfor和Vif为什么不能一起使用

v-for 优先级比v-if 高, 每一次都要遍历整个数组再进行v-if 判断, 造成过多的计算, 影响性能.
