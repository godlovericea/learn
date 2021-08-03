const obj = {
    "modelId": "644813cb-de2a-11eb-a27b-00ff4611b785",
    "bounds": {
        "lowerRight": {
            "x": 1200,
            "y": 1050
        },
        "upperLeft": {
            "x": 0,
            "y": 0
        }
    },
    "properties": {
        "process_id": "排他网关测试76-07",
        "name": "排他网关测试76-07",
        "documentation": "排他网关测试76-07",
        "process_author": "",
        "process_version": "",
        "process_namespace": "http://www.flowable.org/processdef",
        "process_historylevel": "",
        "isexecutable": true,
        "dataproperties": "",
        "executionlisteners": "",
        "eventlisteners": "",
        "signaldefinitions": "",
        "messagedefinitions": "",
        "escalationdefinitions": "",
        "process_potentialstarteruser": "",
        "process_potentialstartergroup": "",
        "iseagerexecutionfetch": "false"
    },
    "childShapes": [{
            "resourceId": "startEvent1",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "executionlisteners": "",
                "initiator": "",
                "formkeydefinition": "",
                "formreference": "",
                "formfieldvalidation": true,
                "formproperties": ""
            },
            "stencil": {
                "id": "StartNoneEvent"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-9FDBFE6E-98E6-45F3-9A42-C3D38CDCD0D8"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 130,
                    "y": 193
                },
                "upperLeft": {
                    "x": 100,
                    "y": 163
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-FBF72118-82BB-4E76-96CD-2412174D9B5A",
            "properties": {
                "overrideid": "",
                "name": "节点一",
                "documentation": "",
                "asynchronousdefinition": "false",
                "exclusivedefinition": "false",
                "executionlisteners": "",
                "multiinstance_type": "None",
                "multiinstance_cardinality": "",
                "multiinstance_collection": "",
                "multiinstance_variable": "",
                "multiinstance_condition": "",
                "isforcompensation": "false",
                "usertaskassignment": {
                    "assignment": {
                        "type": "idm",
                        "idm": {
                            "type": "initiator"
                        }
                    }
                },
                "formkeydefinition": "",
                "formreference": {
                    "id": "217dd068-d887-11eb-9c80-309c230828b1",
                    "name": "事件_项目管理_流程审批表",
                    "key": "事件_项目管理_流程审批表"
                },
                "formfieldvalidation": true,
                "duedatedefinition": "",
                "prioritydefinition": "",
                "formproperties": "",
                "tasklisteners": "",
                "skipexpression": "",
                "categorydefinition": "",
                "taskidvariablename": ""
            },
            "stencil": {
                "id": "UserTask"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-BE42D49A-DF4A-4206-A675-35A2E8ED2587"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 275,
                    "y": 218
                },
                "upperLeft": {
                    "x": 175,
                    "y": 138
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-9FDBFE6E-98E6-45F3-9A42-C3D38CDCD0D8",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": "",
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-FBF72118-82BB-4E76-96CD-2412174D9B5A"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 174.15625,
                    "y": 178
                },
                "upperLeft": {
                    "x": 130.609375,
                    "y": 178
                }
            },
            "dockers": [{
                    "x": 15,
                    "y": 15
                },
                {
                    "x": 50,
                    "y": 40
                }
            ],
            "target": {
                "resourceId": "sid-FBF72118-82BB-4E76-96CD-2412174D9B5A"
            }
        },
        {
            "resourceId": "sid-24C40488-750C-4E1B-ADC2-AB0D235B84C8",
            "properties": {
                "overrideid": "",
                "name": "节点二",
                "documentation": "",
                "asynchronousdefinition": "false",
                "exclusivedefinition": "false",
                "executionlisteners": "",
                "multiinstance_type": "None",
                "multiinstance_cardinality": "",
                "multiinstance_collection": "",
                "multiinstance_variable": "",
                "multiinstance_condition": "",
                "isforcompensation": "false",
                "usertaskassignment": {
                    "assignment": {
                        "type": "idm",
                        "idm": {
                            "type": "initiator"
                        }
                    }
                },
                "formkeydefinition": "",
                "formreference": {
                    "id": "217dd068-d887-11eb-9c80-309c230828b1",
                    "name": "事件_项目管理_流程审批表",
                    "key": "事件_项目管理_流程审批表"
                },
                "formfieldvalidation": true,
                "duedatedefinition": "",
                "prioritydefinition": "",
                "formproperties": "",
                "tasklisteners": "",
                "skipexpression": "",
                "categorydefinition": "",
                "taskidvariablename": ""
            },
            "stencil": {
                "id": "UserTask"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-1854A267-DB1F-42EF-AA78-E943A06C888C"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 420,
                    "y": 218
                },
                "upperLeft": {
                    "x": 320,
                    "y": 138
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-BE42D49A-DF4A-4206-A675-35A2E8ED2587",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": "",
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-24C40488-750C-4E1B-ADC2-AB0D235B84C8"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 319.15625,
                    "y": 178
                },
                "upperLeft": {
                    "x": 275.84375,
                    "y": 178
                }
            },
            "dockers": [{
                    "x": 50,
                    "y": 40
                },
                {
                    "x": 50,
                    "y": 40
                }
            ],
            "target": {
                "resourceId": "sid-24C40488-750C-4E1B-ADC2-AB0D235B84C8"
            }
        },
        {
            "resourceId": "sid-638726AE-A734-4CC8-B986-25EEFF1609C6",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "asynchronousdefinition": "false",
                "exclusivedefinition": "false",
                "sequencefloworder": ""
            },
            "stencil": {
                "id": "ExclusiveGateway"
            },
            "childShapes": [

            ],
            "outgoing": [{
                    "resourceId": "sid-D3007AE7-D85B-4632-A1E8-25E5B112B2FB"
                },
                {
                    "resourceId": "sid-39E86F19-106D-4E83-BB4B-22C64277E1EA"
                }
            ],
            "bounds": {
                "lowerRight": {
                    "x": 505,
                    "y": 198
                },
                "upperLeft": {
                    "x": 465,
                    "y": 158
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-1854A267-DB1F-42EF-AA78-E943A06C888C",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": "",
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-638726AE-A734-4CC8-B986-25EEFF1609C6"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 464.64844687000755,
                    "y": 178.4097335362338
                },
                "upperLeft": {
                    "x": 420.62889687999245,
                    "y": 178.2191727137662
                }
            },
            "dockers": [{
                    "x": 50,
                    "y": 40
                },
                {
                    "x": 20.5,
                    "y": 20.5
                }
            ],
            "target": {
                "resourceId": "sid-638726AE-A734-4CC8-B986-25EEFF1609C6"
            }
        },
        {
            "resourceId": "sid-D804FB54-9F34-4977-8082-390269935275",
            "properties": {
                "overrideid": "",
                "name": "合同项目",
                "documentation": "",
                "asynchronousdefinition": "false",
                "exclusivedefinition": "false",
                "executionlisteners": "",
                "multiinstance_type": "None",
                "multiinstance_cardinality": "",
                "multiinstance_collection": "",
                "multiinstance_variable": "",
                "multiinstance_condition": "",
                "isforcompensation": "false",
                "usertaskassignment": {
                    "assignment": {
                        "type": "idm",
                        "idm": {
                            "type": "user",
                            "assignee": {
                                "id": "wangwanli",
                                "firstName": "wangwanli",
                                "lastName": null,
                                "email": null,
                                "fullName": "wangwanli ",
                                "tenantId": null,
                                "groups": [

                                ],
                                "privileges": [

                                ],
                                "$$hashKey": "object:4701"
                            }
                        }
                    }
                },
                "formkeydefinition": "",
                "formreference": {
                    "id": "217dd068-d887-11eb-9c80-309c230828b1",
                    "name": "事件_项目管理_流程审批表",
                    "key": "事件_项目管理_流程审批表"
                },
                "formfieldvalidation": true,
                "duedatedefinition": "",
                "prioritydefinition": "",
                "formproperties": "",
                "tasklisteners": "",
                "skipexpression": "",
                "categorydefinition": "",
                "taskidvariablename": ""
            },
            "stencil": {
                "id": "UserTask"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-0CB6E236-9398-4F4B-8E29-28994635C3DA"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 650,
                    "y": 410
                },
                "upperLeft": {
                    "x": 550,
                    "y": 330
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-2ED45D0D-5095-48D5-8739-16B296FD5213",
            "properties": {
                "overrideid": "",
                "name": "售前项目",
                "documentation": "",
                "asynchronousdefinition": "false",
                "exclusivedefinition": "false",
                "executionlisteners": "",
                "multiinstance_type": "None",
                "multiinstance_cardinality": "",
                "multiinstance_collection": "",
                "multiinstance_variable": "",
                "multiinstance_condition": "",
                "isforcompensation": "false",
                "usertaskassignment": {
                    "assignment": {
                        "type": "idm",
                        "idm": {
                            "type": "user",
                            "assignee": {
                                "id": "zhengyue",
                                "firstName": "zhengyue",
                                "lastName": null,
                                "email": null,
                                "fullName": "zhengyue ",
                                "tenantId": null,
                                "groups": [

                                ],
                                "privileges": [

                                ],
                                "$$hashKey": "object:4372"
                            }
                        }
                    }
                },
                "formkeydefinition": "",
                "formreference": {
                    "id": "217dd068-d887-11eb-9c80-309c230828b1",
                    "name": "事件_项目管理_流程审批表",
                    "key": "事件_项目管理_流程审批表"
                },
                "formfieldvalidation": true,
                "duedatedefinition": "",
                "prioritydefinition": "",
                "formproperties": "",
                "tasklisteners": "",
                "skipexpression": "",
                "categorydefinition": "",
                "taskidvariablename": ""
            },
            "stencil": {
                "id": "UserTask"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-8FA443FF-5ACF-4261-B6AC-AE3330A2C32A"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 650,
                    "y": 110
                },
                "upperLeft": {
                    "x": 550,
                    "y": 30
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-C2D48172-D617-4F39-A8FB-AAAE16E940A1",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "executionlisteners": ""
            },
            "stencil": {
                "id": "EndNoneEvent"
            },
            "childShapes": [

            ],
            "outgoing": [

            ],
            "bounds": {
                "lowerRight": {
                    "x": 723,
                    "y": 384
                },
                "upperLeft": {
                    "x": 695,
                    "y": 356
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-0CB6E236-9398-4F4B-8E29-28994635C3DA",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": "",
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-C2D48172-D617-4F39-A8FB-AAAE16E940A1"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 694.375,
                    "y": 370
                },
                "upperLeft": {
                    "x": 650.390625,
                    "y": 370
                }
            },
            "dockers": [{
                    "x": 50,
                    "y": 40
                },
                {
                    "x": 14,
                    "y": 14
                }
            ],
            "target": {
                "resourceId": "sid-C2D48172-D617-4F39-A8FB-AAAE16E940A1"
            }
        },
        {
            "resourceId": "sid-85E47E95-3467-4517-AB85-99506DE8DFA0",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "executionlisteners": ""
            },
            "stencil": {
                "id": "EndNoneEvent"
            },
            "childShapes": [

            ],
            "outgoing": [

            ],
            "bounds": {
                "lowerRight": {
                    "x": 723,
                    "y": 84
                },
                "upperLeft": {
                    "x": 695,
                    "y": 56
                }
            },
            "dockers": [

            ]
        },
        {
            "resourceId": "sid-8FA443FF-5ACF-4261-B6AC-AE3330A2C32A",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": "",
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-85E47E95-3467-4517-AB85-99506DE8DFA0"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 694.375,
                    "y": 70
                },
                "upperLeft": {
                    "x": 650.390625,
                    "y": 70
                }
            },
            "dockers": [{
                    "x": 50,
                    "y": 40
                },
                {
                    "x": 14,
                    "y": 14
                }
            ],
            "target": {
                "resourceId": "sid-85E47E95-3467-4517-AB85-99506DE8DFA0"
            }
        },
        {
            "resourceId": "sid-39E86F19-106D-4E83-BB4B-22C64277E1EA",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": {
                    "expression": {
                        "type": "static",
                        "staticValue": "${项目类型=='售前项目' }"
                    }
                },
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-2ED45D0D-5095-48D5-8739-16B296FD5213"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 600,
                    "y": 157.3359375
                },
                "upperLeft": {
                    "x": 485.5,
                    "y": 111
                }
            },
            "dockers": [{
                    "x": 20.5,
                    "y": 20.5
                },
                {
                    "x": 485.5,
                    "y": 134
                },
                {
                    "x": 600,
                    "y": 134
                },
                {
                    "x": 50,
                    "y": 40
                }
            ],
            "target": {
                "resourceId": "sid-2ED45D0D-5095-48D5-8739-16B296FD5213"
            }
        },
        {
            "resourceId": "sid-D3007AE7-D85B-4632-A1E8-25E5B112B2FB",
            "properties": {
                "overrideid": "",
                "name": "",
                "documentation": "",
                "conditionsequenceflow": {
                    "expression": {
                        "type": "static",
                        "staticValue": "${项目类型=='合同项目' }"
                    }
                },
                "executionlisteners": "",
                "defaultflow": "false",
                "skipexpression": ""
            },
            "stencil": {
                "id": "SequenceFlow"
            },
            "childShapes": [

            ],
            "outgoing": [{
                "resourceId": "sid-D804FB54-9F34-4977-8082-390269935275"
            }],
            "bounds": {
                "lowerRight": {
                    "x": 600,
                    "y": 329.25
                },
                "upperLeft": {
                    "x": 485.5,
                    "y": 198.203125
                }
            },
            "dockers": [{
                    "x": 20.5,
                    "y": 20.5
                },
                {
                    "x": 485.5,
                    "y": 264
                },
                {
                    "x": 600,
                    "y": 264
                },
                {
                    "x": 50,
                    "y": 40
                }
            ],
            "target": {
                "resourceId": "sid-D804FB54-9F34-4977-8082-390269935275"
            }
        }
    ],
    "stencil": {
        "id": "BPMNDiagram"
    },
    "stencilset": {
        "namespace": "http://b3mn.org/stencilset/bpmn2.0#",
        "url": "../editor/stencilsets/bpmn2.0/bpmn2.0.json"
    }
}
let { childShapes } = obj
let processArr = [{
        "Comment": null,
        "DeleteReason": "",
        "ETime": "2021/7/30 14:24:20",
        "GoBackReason": "",
        "OperationMan": "wangwanli",
        "STime": "2021/7/30 14:24:19",
        "State": "提交",
        "TaskID": "c5f5785e-f0fe-11eb-89f7-00ff4611b785",
        "TaskName": "节点一"
    },
    {
        "Comment": null,
        "DeleteReason": "",
        "ETime": "",
        "GoBackReason": "",
        "OperationMan": "wangwanli",
        "STime": "2021/7/30 14:24:20",
        "State": "进行中",
        "TaskID": "c6800525-f0fe-11eb-89f7-00ff4611b785",
        "TaskName": "节点二"
    },
    {
        "Comment": null,
        "DeleteReason": "",
        "ETime": "",
        "GoBackReason": "",
        "OperationMan": "wangwanli",
        "STime": "2021/7/30 14:24:20",
        "State": "进行中",
        "TaskID": "c6800525-f0fe-11eb-89f7-00ff4611b785",
        "TaskName": "合同项目"
    }
]

function handleNode(TaskName) {
    let obj = {} // 需返回出去的对象
    let prevNodeId = ""//上个节点的Id
    let prevSequenceId = ""// 前面一个链接的箭头的Id
    let currentNodeId = ""// 当前节点的ID
    // 通过当前节点，查找箭头的ID
    childShapes.forEach((item) => {
        if (item.properties.name === TaskName) {
            currentNodeId = item.resourceId
        }
        item.outgoing.forEach((oItem) => {
            if (currentNodeId && oItem.resourceId === currentNodeId) {
                prevSequenceId = item.resourceId
            }
        })
    })
    // 通过箭头的Id，去查找
    childShapes.forEach((item) => {
        item.outgoing.forEach((cOitem) => {
            if (prevSequenceId && cOitem.resourceId === prevSequenceId) {
                prevNodeId = item.resourceId
            }
        })
    })
    // 比对ID，判断网关是否存在
    childShapes.forEach((item) => {
        if (prevNodeId && item.resourceId === prevNodeId) {
            let myArr = []
            let currentNodes = []
            item.outgoing.forEach((item) => {
                childShapes.forEach((cItem) => {
                    if (item.resourceId === cItem.resourceId) {
                        myArr.push(cItem.outgoing[0].resourceId)
                    }
                })
            })
            myArr.forEach((item) => {
                childShapes.forEach((cItem) => {
                    if (item === cItem.resourceId) {
                        currentNodes.push({
                            resourceId: item,
                            name: cItem.properties.name,
                            msg: '测试数据',
                            assignee: '王万里',
                            type: cItem.stencil.id
                        })
                    }
                })
            })
            obj = {
                nodes: currentNodes,
                nodeCount: currentNodes.length
            }
        }
    })
    return obj
}

// 生成所需数组
function generatorArr() {
    let flowList = []
    processArr.forEach((item) => {
        const myObj = handleNode(item.TaskName)
        flowList.push(myObj)
    })

    const xStart = 50
    const xTo = 150
    flowList.forEach((item, index) => {
        item.xStart = xStart + 150 * index
        item.xTo = xTo + 150 * index
    })
    console.log(flowList, "flowList")
    return flowList
}

// 判断网关
function judgeGateway(resId){
    childShapes.forEach((item)=>{
        if (item.resourceId === resId) {
            
        }
    })
}