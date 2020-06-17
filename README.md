# vue-project

一个基于vue+webpack+element+sass的项目实战


# 功能模块

### 菜单
    关于菜单组件的实现逻辑，可以移步至我的博客文章 [【项目实战篇】Vue结合路由配置递归实现菜单栏](https://juejin.im/post/5ed9f0daf265da76f159f5a9)

### 首页


# 插件安装和使用

### elementui安装和使用
##### 安装
npm install element-ui --save

##### 使用
在mian.js中引入样式文件

```javascript
// main.js

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

```

> elementui也可以按需引入
> 这里暂时不做，后面统一优化

### echarts安装和使用
在webpack中使用echarts在[echarts的官方文档](https://echarts.apache.org/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)有详细的说明。  

##### 安装
npm install echarts --save

##### 使用
```javascript
var echarts = require('echarts');

var myChart = echarts.init(document.getElementById("chart")) 
myChart.setOptions({

})
```

> 这里需要注意的是使用echarts可以按需引入    
> 这里暂时不做，后面统一优化

### sass安装和使用

##### 安装
npm install sass-loader@7.3.1 node-sass --save   

> 这里有一点需要注意，刚开始我使用的安装命令为`npm install sass-loader node-sass --save`。最后安装出来`sass-loader`的版本为`8.0.2`,编写完`sass`的样式代码以后发现控制台报错：`Module build failed: TypeError: this.getResolve is not a function`。   

网上查了一下说是因为`sass-loader`的版本太高，和`webpack`无法适配，因此我将高版本的`sass-loader`卸载，重新安装了`sass-loader@7.3.1`。  

> 卸载并重新安装以后，记得重启一下项目，否则还是会报错。

##### 使用
```html
<!-- 组件中 -->
<template>

</template>
<style lang='sass'>
.content{
   font-size: 16px; 
   a{
       text-decoration: none;
   }
}
</style>
```