# Hello VuePress

---
home: true
actionText: 前往 →
actionLink: /baseComponents/
features:
- title: 布局类组件
  details: 基本组件，为常用组件提供快速，可用的组件
- title: 可视化组件
  details: 积累将数据可视化的业务组件
- title: 知识库
  details: 积累前端相关的知识，涵盖 vue、react、koa2、nodejs 相关的知识点
---
::: danger
这是一个危险警告
:::
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
<span v-for="i in 3">{{ i }} </span>
{{ $page }}
:::demo
```Vue
<template>
  <Quarter/>
</template>
```
:::