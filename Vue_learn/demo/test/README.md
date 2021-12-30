# 笔记

## vue.config.js配置文件
```
vue inspec > output.js
可以查看到vue脚手架的默认配置
vue.config.js可以对脚手架进行个性化定制
```

## Ref属性
1，被用来给元素或者子组件注册引用信息（id替代者）
2，用用在html标签上获取真实DOM元素，应用在组件标签上是组件的实例对象（VC）

## 混入（混合）
可以把多个组件公用的数据提取出来
第一步：定义混合，例如：
{
    data() {...},
    methods:{...},
    mounted(){}
    ...
}
第二步：使用混合，例如：
全局混入：Vue.mixin(xxx)
局部混入：minxins: [hunhe, hunhe2]

