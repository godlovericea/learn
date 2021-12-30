<template>
    <div>
        <h2>count组件sum值：{{sum}}</h2>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加人员</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>

    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data(){
        return{
            name: ''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods:{
        add(){
            const personObj = {id: nanoid(), name: this.name}
            this.name = ""
            this.$store.commit("ADD_PERSON", personObj)
        }
    }
}
</script>

<style>

</style>