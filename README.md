# 物料组件demo
基于`Vue CLI 3.0` 封装的物料库模版，内置两个组件component1，和component2，支持统一加载和按需加载，按需加载用`babel-plugin-component`组件支持。

## 安装

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

```shell
npm install babel-plugin-component -D
```

然后将`babel.config.js`修改为：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "materiel-demo",
        "style": false,
      }
    ]
  ]
}
```

多组件按需加载：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      { "libraryName": "element-gui", "styleLibraryName": "theme-chalk" },
      "element-gui"
    ],
    [
      "component",
      { "libraryName": "materiel-demo", "style": false, },
      "materiel-demo"
    ]
  ]
}

```


```js
// 只加载component1
import { component1 } from 'materiel-demo'
Vue.use(component1)

// 加载component1和component2
import { component1 , component2} from 'materiel-demo'
Vue.use(component1)
Vue.use(component2)
```