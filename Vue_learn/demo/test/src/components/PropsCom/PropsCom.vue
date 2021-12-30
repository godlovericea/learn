<template>
    <div>
        <!-- <Student  name="张三" :age="18" sex="男"></Student> 
        <Student  name="王老五" :age="58" sex="男"></Student> 
        <Student  name="莉莉" :age="18" sex="女"></Student>  -->
    </div>
</template>

<script>
import Student from './Student.vue'
export default {
    name: 'PropsCom',
    data(){
        console.log(this)
        return{

        }
    },
    components:{
        Student
    }
}
</script>

<style>

</style>