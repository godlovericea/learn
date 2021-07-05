// import { getSelectName } from '接口js'

// 循环的方法
const handleFormInfoApi = async(dataObj) => {
    let obj = {...dataObj}
    const {schema} = obj
    const {properties} = schema
    for(let key in properties) {
        for(let cKey in properties[key].properties) {
            // 判断是否有API字段
            if (properties[key].properties[cKey].hasOwnProperty("api") && properties[key].properties[cKey].api) {
                properties[key].properties[cKey].enum = []
                properties[key].properties[cKey].enumNames = []
                // 通过async await处理异步请求
                let res =await getSelectName(properties[key].properties[cKey].api)

                res.data.forEach((item)=>{
                    properties[key].properties[cKey].enum.push(item.NODEVALUE)
                    properties[key].properties[cKey].enumNames.push(item.NODENAME)
                })
            }
        }
    }
    return obj
}

//使用方法
const handleOk = async() => {
    // 必须要在async函数中，使用await字段
    let handledData =await handleFormInfoApi(requiredData)

    console.log(handledData, "handledData")
}

