<template>
    <div>
        <!-- <h1>当前求和为：{{$store.state.sum}}</h1> -->
        <!-- 对象写法 -->
        <!-- <h1>当前求和为：{{he}}</h1> -->
        <!-- 数组写法 -->
        <h1>当前求和为：{{sum}}</h1>
        <!-- <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3> -->
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <!-- 对象写法 -->
        <!-- <h3>我在：{{xuexiao}}学习{{xueke}}</h3> -->
        <!-- 数组写法 -->
        <h3>我在：{{school}}学习{{subject}}</h3>
        <!-- <h3>下方组件的总人数是：{{personList.length}}</h3> -->
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为基数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Count',
    data(){
        return{
            n: 1
        }
    },
    computed:{
        // 自己写计算属性
        // he(){
        //     return this.$store.state.sum
        // },
        // xuexiao(){
        //     return this.$store.state.school
        // },
        // xueke(){
        //     return this.$store.state.subject
        // },
        // 对象写法:生成计算属性，从state中读取数据
        // ...mapState({
        //     he: 'sum',
        //     xuexiao: 'school',
        //     xueke: 'subject'
        // }),
        // 数组写法：:生成计算属性，从state中读取数据
        ...mapState(['sum', 'school', 'subject', 'personList']),
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // ...mapGetters({
        //     bigSum: 'bigSum'
        // })
        // 数组写法
        ...mapGetters(['bigSum'])
    },
    methods:{
        increment(){
            // this.$store.dispatch("jia", this.n)
            this.$store.commit("JIA", this.n)
        },
        decrement(){
            // this.$store.dispatch("jian", this.n)
            this.$store.commit("JIAN", this.n)
        },
        incrementOdd(){
            this.$store.dispatch("jiaOdd", this.n)
        },
        incrementWait(){
            this.$store.dispatch("jianWait", this.n)
        },
    },
    mounted() {
        console.log(this.$store)
        const x = mapState({

        })
        console.log(mapState, "mapState")
    }
}
</script>

<style>

</style>