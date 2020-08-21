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


// 封装一个方法获取dom元素的css样式的某属性的值，兼容所有浏览器
// function getStyle(ele, prop) {
//     return window.getComputedStyle ? window.getComputedStyle(ele, null)[prop] : ele.currentStyle[prop];
// }



//封装一个绑定事件的方法，兼容所有浏览器
// function bindEvent(ele, type, handleFn) {
//     if (ele.addEventListener) {
//         ele.addEventListener(type, handleFn, false);
//     } else if (ele.attachEvent) {
//         ele.attachEvent('on' + type, function () {
//             handleFn.call(ele);
//         });
//     } else {
//         ele['on' + type] = handleFn
//     }
// }


// 手动封装异步加载js的方法
// function asyncLoadScript(url, callback) {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     if (script.readyState) {//readyState是IE中的状态码
//         script.onreadystatechange = function () {
//             //绑定监听状态码的事件，IE状态码变成complete或者loaded，表示该元素加载完
//             if (script.readyState == "complete" || script.readyState == "loaded") {
//                 callback();//回调函数，当script加载完后调用
//             }
//         }
//     } else {
//         //非IE 用onload事件，表示当script加载完时
//         script.onload = function () {
//             callback();//回调函数，当script加载完后调用
//         }
//     }
//     script.src = url;//放在这，是为了避免IE立即加载完，立即加载完就不再触发onreadystatechange
//     document.head.appendChild(script);//加载到页面中去
// }
// //=============test code=========================
// asyncLoadScript('./js/tools.js', function () {
//     //code
//     console.log('按照加载完了：' + url + '文件')
// });

// 封装一个兼容性方法获取浏览器可视宽高：
// window.getInnerWH = function () {
//     return {
//         width: window.innerWidth || window.documentElement.clientWidth || window.body.clientWidth,
//         height: window.innerHeight || window.documentElement.clientHeight || window.body.clientHeight
//     }
// }