<template>
    <div>
        <h1>{{msg | mySlice}}</h1>
        <h2>姓名：</h2>
        <h2>性别：</h2>
        <h2>年龄：</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: '我是尚硅谷的学生！'
        }
    },
    // 简单接收
    // props: ['name', 'age', 'sex'], 
    // 接收的同时进行数据验证
    // props: { 
    //     name: 'String',
    //     age: 'Number',
    //     sex: 'String',
    // }

    // 完整写法，其中required和default一般不在一起使用

    // props的优先级比data要高
    // props是只读的，vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    // 若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
    props:{
        name:{
            type: 'String',
            required: true
        },
        age:{
            type: 'Number',
            default: 99
        },
        sex:{
            type: 'String',
            required: true
        }
    }
}
</script>

<style>

</style>