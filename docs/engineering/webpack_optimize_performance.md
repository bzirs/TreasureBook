---
nav: 工程化
group: webpack
---

# webpack常用优化前端性能的手段

webpack 优化前端性能通常指优化webpack 的输出结果, 让打包后的文件在浏览器中运行速度快速高效

1. 删除多余代码, 注释, 简化代码写法
2. 使用terser 插件压缩JS 文件
3. 使用cssnano 插件压缩CSS 代码
4. 项目中将静态资源路径转换为CDN 对应的路径
5. 利用Tree Shaking 删除项目中用不到的代码片段. (启动webpack是追加参数`--optimize-minimize`)
6. 将代码按照组件或路由代码分块, 然后按需加载文件, 充分利用浏览器缓存
7. 生产环境关闭 sourceMap
