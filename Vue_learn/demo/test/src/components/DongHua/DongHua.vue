<template>
    <div>
        <button @click="isShow = !isShow">显示/影藏</button>
        <!-- <transition name="hello" appear>
            <h1 v-show="isShow" class="com">你好啊</h1>
        </transition> -->
        <DongHuaCom></DongHuaCom>
        <div class="box">
            <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            >
                <h1 key="1" v-show="!isShow" class="com">你好啊</h1>
                <h1 key="2" v-show="isShow" class="com">你好啊</h1>
            </transition-group>
            hello box!
        </div>
    </div>
</template>

<script>
import DongHuaCom from './DongHuaCom.vue'
import 'animate.css'
import axios from 'axios'
export default {
    name: 'DongHua',
    data() {
        return {
            isShow: true
        }
    },
    components:{
        DongHuaCom
    },
    mounted() {
        axios.get("https://api.github.com/search/users?q=test")
        .then(res=>{
            console.log(res.data)
        })
    }
}
</script>

<style>
    h1{
        background-color: orange;
        transition: 0.5s linear;
    }
    /* 进入的起点 */
    .hello-enter{
        transform: translateX(-100%);
    }
    /* 进入的终点   */
    .hello-enter-to{
        transform: translateX(0px);
    }
    /* 离开的起点 */
    .hello-leave{
        transform: translateX(0);
    }
    /* 离开的终点   */
    .hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active{
        animation: atguigu 1s;
    }
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }
    @keyframes atguigu {
        from{
            transform: translateX(-100px);
        }
        to{
            transform: translateX(0px);
        }
    }
    .box{
        background-color: aquamarine;
    }
</style>