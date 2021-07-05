/**
 * JS数组得一些方法
 */

//  数组对象去重
var formArr = [{
        "FieldCode": "selectName_0",
        "FieldName": "项目状态",
        "FieldType": "string",
        "FormKey": "项目信息台账",
    },
    {
        "FieldCode": "selectName_0",
        "FieldName": "项目状态",
        "FieldType": "string",
        "FormKey": "项目信息台账",
    },
    {
        "FieldCode": "unrecognized_1",
        "FieldName": "项目名称",
        "FieldType": "string",
        "FormKey": "项目信息台账",
    }
]

var result = [];
var obj = {};
for (var i = 0; i < formArr.length; i++) {
    if (!obj[formArr[i].FieldCode]) {
        result.push(formArr[i]);
        obj[formArr[i].FieldCode] = true;
    }
}
console.log(result)