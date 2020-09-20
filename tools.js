//1.【继承】:让Target构造函数构造出来的对象继承Origin的原型的属性和方法
// var inherit = (function () {
//     function F() { };
//     return function (Target, Origin) {
//         F.prototype = Origin.prototype;
//         Target.prototype = new F();
//         Target.prototype.constructor = Target;
//         Target.prototype._super = Origin.prototype;
//     }
// }());


// 2.【递归】计算n的阶层
// function mul(n){
//     if(n==0||n==1){
//         return 1;
//     }
//     return n*arguments.callee(n-1);
// }


//3. 查找任意字符串的字节长度
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


//4. 封装一个方法insertAfter,功能类似insertBefore
// Element.prototype.insertAfter = function (targetNode, afterNode) {
//     var beforeNode = afterNode.nextElementSibling;
//     if (beforeNode) {
//         this.appendChild(targetNode);
//     }
//     this.insertBefore(targetNode, beforeNode);
// }


// 5. 封装一个方法获取dom元素的css样式的某属性的值，兼容所有浏览器
// function getStyle(ele, prop) {
//     return window.getComputedStyle ? window.getComputedStyle(ele, null)[prop] : ele.currentStyle[prop];
// }



//6. 封装一个绑定事件的方法，兼容所有浏览器
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


// 7. 手动封装异步加载js的方法
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

// 8. 封装一个兼容性方法获取浏览器可视宽高：
// window.getInnerWH = function () {
//     return {
//         width: window.innerWidth || window.documentElement.clientWidth || window.body.clientWidth,
//         height: window.innerHeight || window.documentElement.clientHeight || window.body.clientHeight
//     }
// }


// 9. 封装一个兼容所有浏览器的方法，用于查看滚动条滚动距离：
// window.getScrollLT = function () {
//   return {
//     left: window.pageXOffset || document.documentElement.scrollLeft + document.body.scrollLeft,
//     top: window.pageYOffset || document.documentElement.scrollTop + document.body.scrollTo
//   }
// }


//  10. 模拟jQuery中的ajax，手动封装一个自己的ajax()
// function ajax(option) {//type,url,data,timeout,success,error将所有参数换成一个对象{}
//    //  0.将对象转换成字符串
//    var str = objToString(option.data);
//    //  1.创建一个异步对象xmlhttp；
//    var xmlhttp, timer;
//    if (window.XMLHttpRequest) {
//       xmlhttp = new XMLHttpRequest();
//    } else {// code for IE6, IE5 
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    //  2.设置请求方式和请求地址； 
//    // 判断请求的类型是POST还是GET
//    if (option.type.toLowerCase() === 'get') {
//       xmlhttp.open(option.type, option.url + "?t=" + str, true);
//       //  3.发送请求；
//       xmlhttp.send();
//    } else {
//       xmlhttp.open(option.type, option.url, true);
//       // 注意：在post请求中，必须在open和send之间添加HTTP请求头：setRequestHeader(header,value);
//       xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//       //  3.发送请求；
//       xmlhttp.send(str);
//    }
//    //  4.监听状态的变化；
//    xmlhttp.onreadystatechange = function () {
//       clearInterval(timer);
//       if (xmlhttp.readyState === 4) {
//          if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304) {
//             //  5.处理返回的结果；
//             option.success(xmlhttp);//成功后回调；
//          } else {
//             option.error(xmlhttp);//失败后回调；
//          }
//       }
//    }
//    //处理obj 
//    function objToString(data) {
//       data.t = new Date().getTime();
//       var res = [];
//       for (var key in data) {
//          //需要将key和value转成非中文的形式，因为url不能有中文。使用encodeURIComponent();
//          res.push(encodeURIConponent(key) + " = " + encodeURIConponent(data[key]));
//       }
//       return res.join("&");
//    }
//    //判断外界是否传入了超时时间
//    if (timeout) {
//       timer = setInterval(function () {
//          xmlhttp.abort();//中断请求
//          clearInterval(timer);
//       }, timeout);
//    }
// }

// 11. 模拟实现new
// Function.prototype._new = function (...arg) {
//     let _this = {};//第一步，创建this对象
//     _this.__proto__ = this.prototype;//第二步，添加属性指向构造函数原型
//     let _constructorRes = this.apply(_this, arg);//第三步，让构造函数执行，并绑定构造函数中的this指向新对象
//     //第四步，判断返回结果是什么类型
//     if (typeof _constructorRes === 'number'
//         || typeof _constructorRes === 'string'
//         || typeof _constructorRes === 'boolean'
//         || _constructorRes === null
//         || _constructorRes === undefined) {//判断为原始值，返回_this对象
//         return _this;
//     } else {
//         return _constructorRes;
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let p1 = Person._new('alice', 12);//结果与let p1 = new Person('alice', 12)一致
// console.log(p1);//{name: "alice", age: 12}

// 12. 防抖
// function debounce(fn,ms = 1000){
//     let timer;
//     return function(...args){
//         if(timer){
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn.apply(this,args)
//         }, ms);
//     }
// }
// //test code
// const test = ()=>{
//     console.log('testFn code')
// }
// window.addEventListener('scroll',debounce(test))






