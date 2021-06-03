
这是我参与更文挑战的第`3`天，活动详情查看： [更文挑战](https://juejin.cn/post/6967194882926444557)

# 前言
我们知道，前几天在杭州举办了第四届Vue.js开发者大会。会议中由vue的作者尤雨溪老师介绍了Vue 3 生态的现状。

![1.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10a6a4d3b903400ba8ea68533d2caa81~tplv-k3u1fbpfcp-watermark.image)

大概内容是，今年 Vue 开发者数量还是有比较大的增长，Vue 3 周边库以及开发工具链都已经跟上了如Vuex4.0、Vue Router 4.0以及Quasar、Element Plus、And Design Vue、Vuetify、Nuxt3等。script setup 加 volar 结合 ts，使得 SFC 的 template 是有很不错的开发体验，而且计划 Q2 end Vue 3 就会成为主版本；另外已经决定不在支持IE11，Vue 2可以迁移到 @vue/compat 或者等 v2.7 版本。

具体详情可移步观看视频：

[Vue.js作者尤雨溪在VueConf 2021谈Vue 3 生态进展](https://www.bilibili.com/video/BV1JK4y1G7bf)

其中他还提到VitePress，也是我今天要讲的主角


![2.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34a6c504fe1b485882e654cd4c22138b~tplv-k3u1fbpfcp-watermark.image)

# 什么是VitePress及其作用

引用尤雨溪的话：`VitePress其实就是一个基于Vue3+Vite的静态站生成器`

如果你之前用过VuePress、Hexo、Gatsby等静态站生成工具，可能很好理解，其实相当于VuePress，只是把Vue2换成Vue3，把webpack换成vite；如果你没有接触过，你就将它理解为：利用它可以搭建静态类网站，比如快速搭建博客或者文档等


# 为什么要用VitePress
换句话说它有什么优势？

其实优势也很明显，刚刚也说了，它相当于VuePress，当它将Vue2换成Vue3，把webpack换成vite，因此：
1. `它有VuePress的所有优点`；如：可以在md里面混合vue组件等；
2. `具有Vite的速度`；如：可以秒开一个VitePress开发服务器以及md的编辑也会瞬间更新

3. 利用Vue3的一些高阶特性，做了一些更细致的优化；比如`避免纯静态内容的double payload（双重负载）和hydration开销`

一句话小结：性能好

所以，如果你要搭建博客，或者有新的项目要做文档，可以试试VitePress

# 开始搭建
## 1.初始化目录及index.md
```
yarn init
yarn add --dev vitepress
```
index.md文档创建doc目录下，可以在文档中写上hello VuePress，方便测查
## 2.添加以下脚本到package.json中
```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
```
注意：是在package.json的大括号里面填充，即{要填充的代码}
## 3.启动服务
```
yarn docs:dev
```
出现以下代码表示搭建成功

![3.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e01b1eafd2114b1b9f1d25a80f3e5a0b~tplv-k3u1fbpfcp-watermark.image)
## 4.通过http://localhost：3000进入
结果如图所示：


![4.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7672e9b46e745ef85a001427ffde73c~tplv-k3u1fbpfcp-watermark.image)

默认没有配置的情况下，页面也简单，图中只有我们写的hello VuePress。不妨填充一些内容，我将上述所有md内容copy到index.md中，显示如图

![5.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57468bbb586c4ff68bf685de025e680d~tplv-k3u1fbpfcp-watermark.image)

恩，挺简洁的，是我喜欢的调调

但是怎么没有导航哪些呢，其实是需要配置的

## 5.创建配置
首先在 docs 目录下创建 .vitepress 目录，然后开始设置配置;在.vitepress文件夹下创建config.js，它是配置 VitePress 站的必要的文件，其将导出一个 JavaScript 对象：
```js
module.exports = {
  title: 'Hello VitePress',
  description: 'A VitePress site.'
}
```
title表示页面标题

description 渲染成页面的 
```html
<meta name="description" content="A VitePress site">
```

到这里的目录结果是这样子的
```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```
另外需要注意：.vitepress需要用命令行命令进行创建，否则可能提示创建不了

如window系统使用md命令
```
md config.js
```
完整的选项配置列表[参考](https://fttp.jjf-tech.cn/config/basics.html)

## 6.资源处理
### 6.1可通过相对 URL 来指向资源文件：
```
![An image](./image.png)
```
### 6.2所有引用的资源文件
- 在生产打包时，会被复制到 dist 目录并文件名会带上 hash
- 未被引用的资源文件不会被复制
- 图片资源小于 4kb 的会被 base64
### 6.3公开文件
public 目录是个特殊的目录
- 用来放置你没有在任何 markdown 里面引用的资源文件
- 这个目录下的文件名不会被重命名加上 hash 值
- 引用该目录的资源需要直接使用根路径引用，比如 public/icon.png 文件则需要通过 /icon.png 引用
### 6.4基础 URL
解决你的站点部署不是在根目录的情况。
以 https://domain.com/sub-path/ 为例：
- 设置 .vitepress/config.js 的 base 参数为 /sub-path/ （注意必须以 / 开头及结尾）
- 如果要引用 public 的图片，使用 $withBase （被注入到了 Vue 的原型了），这个可以同时用在主题组件及 Markdown 文件
```
<img :src="$withBase('/foo.png')" alt="foo">

```
另外关于Markdown的规则，其实跟平时用的差不多，具体可以移步[Markdown 扩展](https://fttp.jjf-tech.cn/vitepress/guide/markdown.html)