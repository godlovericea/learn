export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0,2)
        })
        // 自定义全局指令
        Vue.directive('fbind', {

        })
        // 自定混入
        Vue.mixin({
            data() {
                return{
                    x: 100,
                    y: 200
                }
            },
            mounted() {
                console.log("@@@")
            }
        })
        // 给Vue原型上添加一个方法（vm和vc上都可以使用）
        Vue.prototype.hello =()=>{
            console.log("hello")
        }
    }
}