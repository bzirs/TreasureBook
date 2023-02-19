---
nav: 工程化
group: webpack
---

# assets和static

这两个文件夹都是用来存放项目中使用的静态资源文件. assets 内的文件在使用webpack打包后会被压缩体积, 代码格式化之类, 打包后被放入static 文件夹中

而static 中的文件并不会被打包

> 可使用如下优化: 将图片等未处理过的文件放入assets中, 在打包后减小体积. 而第三方引入的资源文件可放入static中, 这些文件已经被处理过了
