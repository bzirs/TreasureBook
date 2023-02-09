---
nav: Browser
group: 浏览器
---

# 如何减少回流与重绘

1. 对元素进行复杂的操作时, 可以先隐藏(display:none), 操作完成后再显示.
2. 避免使用table布局(一旦触发回流就导致表格内所有元素回流)
3. 避免使用css表达式, 每次调用都会重新计算
4. 尽量使用css属性简写, 如使用border替换border-width等
5. 批量修改元素样式. 如className
