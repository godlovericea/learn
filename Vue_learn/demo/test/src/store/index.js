// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const countOptions = {
    namespaced: true,
    actions:{
        jiaOdd(context, value){
            if (context.state.sum % 2) {
                context.commit('JIAN', value)
            }
            
        },
        jiaWait(context, value){
            console.log(context, "context")
            console.log(value, "value")
            setTimeout(()=>{
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations:{
        JIA(state, value){
            console.log(state, "state")
            console.log(value, "value")
            state.sum += value
        },
        JIAN(state, value){
            console.log(state, "state")
            console.log(value, "value")
            state.sum -= value
        },
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    },
    state:{
        sum: 0,
        school: '尚硅谷',
        subject: 'web前端',
    }
}

const personOptions = {
    namespaced: true,
    actions:{

    },
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    getters:{

    },
    state:{
        personList: [
            {
                id: '001',
                name: '张三'
            }
        ]
    }
}

// 创建Store
const store = new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})

export default store