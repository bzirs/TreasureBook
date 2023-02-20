---
nav: JS

---

# vue和react区别

他们的相同点有很多

都使用了虚拟DOM. 组件化思想. 都是响应式, 推崇单向数据流. 都有成熟的社区, 都支持服务器渲染. Vue和React实现原理和流程基本一致，都是使用虚拟DOM + Diff算法

他们的不同点也有很多

1. 第一个是**核心思想**不同, vue 推崇灵活易用(渐进式开发体验), 数据可变, 数据双向绑定(依赖收集). react 想要用更好的方式颠覆前端开发方式, 推崇函数式编程(纯组件), 数据不可变以及单向数据流. 通常说react适合大型应用,根本原因就是函数式编程. 因此导致vue和react 外在表现不同
2. 第二个**写法差异**, vue 推崇template模板(简单易懂),单文件vue. react推崇jsx, hoc(高阶组件),all in js
3. 第三个是**api差异**, vue 定位简单易上手, 基于template模板+选项式api(v3以后也支持组合式api)需要学习一些新的概念, react 本质核心只有虚拟dom和diff算法, api非常少
4. 第四个是**社区差异**, vue常见的解决方案, 都是vue官方主导开发和维护.如router, pinia等等. react 只关注底层, 上层应用解决方案基本不插手, 大部分都丢给社区解决
5. 第五个是**未来升级方向**不同, vue依旧定位渐进式开发, 考虑通过依赖收集实现数据可变. react 的函数式编程基本盘不会改变
6. 第六个是**组件实现不同**, vue 是把options挂载到vue核心类,通过new拿到实例. react 直接定义render函数生成虚拟节点
7. 第七个是**响应式原理不同**, vue 通过依赖收集自动优化,递归监听data属性直接修改,数据改变时自动重新渲染. react 基于状态机手动优化, 数据不可变通过setstate驱动新的数据替换旧的数据. 数据改变时一根组件为目录默认全部重新渲染
8. 第八个是**diff算法不同**, vue使用双向链表,一边对比一边更新dom. react 使用diff队列保存需要更新哪些DOM, 统一操作批量更新DOM.
9. 第九个是**事件机制不同**, vue 原生事件使用标准web事件, 组件自定义事件机制实现父子组件通信. react 原生事件被包装, 通过冒泡到顶层document监听, 合成事件下发.可以跨端使用事件机制. 组件上无事件, 通过props父子组件通信