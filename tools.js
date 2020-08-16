//【继承】:让Target构造函数构造出来的对象继承Origin的原型的属性和方法
// var inherit = (function () {
//     function F() { };
//     return function (Target, Origin) {
//         F.prototype = Origin.prototype;
//         Target.prototype = new F();
//         Target.prototype.constructor = Target;
//         Target.prototype._super = Origin.prototype;
//     }
// }());


// 【递归】计算n的阶层
// function mul(n){
//     if(n==0||n==1){
//         return 1;
//     }
//     return n*arguments.callee(n-1);
// }


//查找任意字符串的字节长度
// function bytesLengh(str) {
//     var count = str.length;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) > 255){
//             count++;
//         }
//     }
//     return count;
// }
//charCodeAt(n)：返回字符串第n位字符的unicode编码，大于255字节长度为2，小于为1


//封装一个方法insertAfter,功能类似insertBefore
// Element.prototype.insertAfter = function (targetNode, afterNode) {
//     var beforeNode = afterNode.nextElementSibling;
//     if (beforeNode) {
//         this.appendChild(targetNode);
//     }
//     this.insertBefore(targetNode, beforeNode);
// }
