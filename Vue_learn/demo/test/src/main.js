import Vue from 'vue'
import App from './App.vue'
// 引入自定义插件
import plugins from './plugins/plugins'
import store from './store/index'
// 使用插件
Vue.use(plugins)
// 关闭Vue生产提示

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


// render: h => h(App)解析：
// render(createElement){
//   return createElement('h1', "你好啊")
// }

// 1，vue.js和vue.runtime.xxx.js区别
// vue.js是完整版本的Vue，包含核心功能 + 模板解析器
// vue.runtime.xxx.js是运行时版本的vue，只包含核心功能，没有模板解析器
// 2，因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
// 需要使用render函数接收到createElement函数去指定具体内容