
//继承:让Target构造函数构造出来的对象继承Origin的原型的属性和方法
// var inherit = (function () {
//     function F() { };
//     return function (Target, Origin) {
//         F.prototype = Origin.prototype;
//         Target.prototype = new F();
//         Target.prototype.constructor = Target;
//         Target.prototype._super = Origin.prototype;
//     }
// }());