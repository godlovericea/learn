/**
 * 普通数组排序
 */

const arr = [96,89,52,8,25,74,69,52,10,23,98]
//
Array.prototype.csSort = function() {
    var newarr = this;
    /** 1、 插入法排序
    * 插入发排序，即那数组的后边一项和前面一项对比，如果后面一项小于前面
    * 一项，则将两者位置互换，从数组第2个元素开始对比；如下示例
    */
    for (let i = 1; i < newarr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (newarr[j] < newarr[j-1]) {
                let pre = newarr[j];
                newarr[j] = newarr[j-1];
                newarr[j-1] = pre;
            };
        };
    };
    return newarr;
}
console.log(arr.csSort().toString());

Array.prototype.csSort = function() {
    var newarr = this;
    /** 2、 冒泡法排序
    * 插入发排序，即那数组的前一项和后一项对比，如果前面一项小于后面
    * 一项，则将两者位置互换，从数组第1个元素开始对比；如下示例
    */
    for (let i = 0; i < newarr.length; i++) {
        for (let j = 0; j < newarr.length; j++) {
            if (newarr[j] > newarr[j+1]) {
                let pre = newarr[j];
                newarr[j] = newarr[j+1];
                newarr[j+1] = pre;
            };
        };
    };
    return newarr;
}
console.log(arr.csSort().toString());

// sort排序
var arr1 = [
    {id:10,age:2},
    {id:5,age:4},
    {id:6,age:10},
    {id:9,age:6},
    {id:2,age:8},
    {id:10,age:9}
];
arr1.sort(function(a,b){
    if(a.id === b.id){//如果id相同，按照age的降序
        return b.age - a.age
    }else{
        return a.id - b.id
    }
})
console.log(arr1);