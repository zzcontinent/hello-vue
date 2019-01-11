### 1.搭建开发环境
- 1.安装 Node.js
sudo apt-get install nodejs
sudo apt-get install npm

- 2.基于 Node.js 安装npm（淘宝镜像）
npm install -g cnpm --registry=https://registry.npm.taobao.org

- 3.安装 webpack
cnpm install webpack -g

- 4.安装 vue-cli 脚手架
npm install vue-cli -g

```
tips:
可以选择安装路由（vue-router）和网络请求模块（vue-resource）
但是，vue-resource 已经停止了更新，所以推荐大家使用 axios.js 进行交互
vue-router 会在新建项目的时候询问你是否安装，如果已经安装了就不需要再安装
```

### 2.新项目的创建
> vue init webpack-simple 项目名称
> vue init webpack 项目名称

- 启动
npm install
npm run dev
