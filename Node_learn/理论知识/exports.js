// module.exports 和  exports 有什么关系和区别

// CommonJS中是没有module.exports的概念的
// 但是为了实现模块的导出，Node中使用的是Module的类；
// 每一个模块都是Module的一个实例，也就是说module
// 所以在node中真正用于导出的其实根本就不是exports，而是module.exports
// 因为module才是导出的真正实现者

// 一个JS文件就是一个实例
// module 就是 new Module()的实例
// 在代码内部，使用 module.exports = exports

console.log(module);