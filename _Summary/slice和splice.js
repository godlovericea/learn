// 1.slice(start,end)：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素。

// 注意：该方法不会改变原数组，而是返回一个子数组，如果想删除数组中的一段元素，应该使用Array.splice()方法。

// start参数：必须，规定从何处开始选取，如果为负数，规定从数组尾部算起的位置，-1是指最后一个元素。
// end参数：可选（如果该参数没有指定，那么切分的数组包含从start倒数组结束的所有元素，如果这个参数为负数，那么规定是从数组尾部开始算起的元素）。

 

var arr = [1,2,3,4,5];
console.log(arr.slice(1));//[2,3,4,5] 选择序列号从1到最后的所有元素组成的新数组。
console.log(arr.slice(1,3))//[2,3] 不包含end，序列号为3的元素
 

// 同时slice(start,end)可以作用于字符串的切割

/*字符串切割和提取----slice(start,end),substring(),substr()*/

var str = "Hello,world!";
var sliceStr = str.slice(1,5);//ello (不包含end)
var subStr = str.substring(1,5);//ello
var subStr = str.substr(1,5);//ello,
var str = "1000000";
var sliceStr = str.slice(-3);//000 从序列号为-3的位置到最后
 

// 2.splice()：该方法向或者从数组中添加或者删除项目，返回被删除的项目。（该方法会改变原数组）

// splice（index,howmany,item1,...itemX）

// index参数：必须，整数，规定添加或者删除的位置，使用负数，从数组尾部规定位置。
// howmany参数：必须，要删除的数量，如果为0，则不删除项目。
// tem1,...itemX参数：可选，向数组添加的新项目。

var arr = [1,2,3,4,5];
console.log(arr.splice(2,1,"hello"));//[3] 返回的新数组
console.log(arr);//[1, 2, "hello", 4, 5] 改变了原数组