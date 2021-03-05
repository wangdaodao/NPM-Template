# 物料组件demo
基于`Vue CLI 3.0` 封装的物料库模版，内置两个组件component1，和component2，支持统一加载和按需加载，按需加载用`babel-plugin-component`组件支持。

此代码为 NPM 初始化模板，基于Vue-CLI搭建，增加了UT测试和E2E测试。

## 命令

```shell
npm install materiel-demo --save
```

## 统一加载

```js
import materiel from 'materiel-demo'
Vue.use(materiel)
```

## 按需加载

> 按需加载功能只针对有Babel配置的项目，单纯用script和link的方式引入js和样式是全量引入

首先，安装 `babel-plugin-component`：

# 打包
npm run package
```
