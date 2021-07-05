const arr = [
    {
      "Type": "string",
      "Name": "客户名称",
      "Value": "sdfsafa",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "项目名称",
      "Value": "asfsad",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "项目地址",
      "Value": "110000#=#110100#=#110101",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "地理位置",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "资金来源",
      "Value": "非政府拨款",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "项目预算",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "预计签单金额",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "项目类型",
      "Value": "合同项目",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "订货时间",
      "Value": "A",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "市场类别",
      "Value": "二供改造",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "建设方式",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "流程版本",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "项目描述",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "竞争对手",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "竞争态势",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "所在分公司",
      "Value": "安徽二",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "负责人",
      "Value": "史鹏飞",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "负责部门",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "所属站点",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "上报人名称",
      "Value": "王万里",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "上报人部门",
      "Value": "业务平台组",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "上报时间",
      "Value": "2021-05-27 11:47:46",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "处理站点",
      "Value": "",
      "Code": ""
    },
    {
      "Type": "string",
      "Name": "编码生成器",
      "Value": "",
      "Code": "XNXJ-HT"
    }
]

const obj = {}

arr.forEach((item)=>{
    obj[item.Name] = item.Value
})

console.log(obj)