---
nav: 工程化
group: webpack
---

# webpack的loader

1. image-loader: 加载并压缩图片文件
2. file-loader: 将文件输出到一个文件夹中, 代码中通过相对url 引用输出的文件
3. url-loader: 和file-loader相似, 但是能在文件很小的情况下以base64 的方式把文件注入到代码中
4. source-map-loader: 加载额外的 source map文件, 方便断点调试
5. babel-loader: 将es6 代码转换为es5
6. css-loader: 加载css, 支持模块化, 压缩, 文件导入等特性
7. style-loader: 将css 代码注入到js 中,通过dom 操作加载css
8. eslint-loader: 通过eslint检查js代码
