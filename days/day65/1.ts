// 泛型
// 把类型当一种特殊的参数传入类或函数中
// 例如
class Person<T extends Date>{
    private _value: T;
    constructor(val: T) {
        this._value = val;
    }
}
let p1 = new Person(new Date())

class MyDate extends Date{}
let p2 = new Person(new MyDate())

// p.value = 12;
// console.log(p.value)

// let a = new Array<number>();


// function fn<T>(arg: T): T {
//     return arg;
// }
// fn<number>(12);


