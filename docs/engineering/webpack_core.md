---
nav: 工程化
group: webpack
---

# webpack五大核心

1. entry: 定义webpack 从哪个文件为入口起点开始打包, 分析构建内部依赖图
2. output: 定义webpack 打包后资源的输出文件夹, 以及如何命名
3. module: 定义webpack 如何处理非js文件
4. plugins: 插件可以用于执行范围更广的任务, 从打包到优化, 到重新定义环境的变量等
5. mode: 告知 webpack 使用相应模式的内置优化. 修改`process.env.NODE_ENV`的值为`development`或`production`
