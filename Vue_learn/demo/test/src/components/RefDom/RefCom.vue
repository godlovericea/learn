<template>
    <div>
        <h2 ref="domRef">你好啊</h2>
        <School ref="schoolRef"></School>
        <School id="schoolId"></School>
        <button @click="showDom">显示DOM</button>
    </div>
</template>

<script>
import School from './School.vue'
export default {
    name: 'RefCom',
    components:{
        School
    },
    data() {
        return {

        }
    },
    methods:{
        showDom() {
            console.log(this.$refs.domRef)
            console.log(this.$refs.schoolRef)
            const schoolId = document.getElementById("schoolId")
            console.log(schoolId)
        }
    }
}
</script>

<style>

</style>