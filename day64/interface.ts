// interface
// 接口是一种规范，跟抽象类有点类似

// 定义一个接口


// interface User {
//     name: string;
//     password?: string;
//     (): number[];
// }
// type User2 = {
//     name: string;
// }

// interface可以规范三个东西：
// 1. 函数interface
// 2. 类
// 3. 构造器


// 一. 函数interface
// 函数interface可定义且仅仅可定义两个东西：
// 1. 参数
// 2. 返回值

// interface xxx{
//     (参数,...):返回值类型
// }

// interface SearchFn {
//     (key: string, page?: number): number[]
// }

// const search: SearchFn = function (key: string, page: number) {
//     return [1, 2, 3]
// }
// 函数interface需要注意一下几点：
// 1. 返回值必须一致
// 2. 参数可少不可多，且必须对应的上

//二. 类interface
// interface serialization {
//     toJSON(): object;
//     formJSON(json: object): void;
// }

// class Box implements serialization {
//     width: number;
//     height: number;
//     constructor(width:number,height:number){
//         this.width = width;
//         this.height = height;
//     }
//     toJSON(): object {
//         return { width: this.width, height: this.height }
//     }
//     formJSON(json: object): void {
//         if (isSize(json)) {
//             this.width = json.width;
//             this.height = json.height;
//         }
//     }
// }

// function isSize(json: any): json is { width: number, height: number } {
//     if (typeof json != 'object') {
//         console.log('必须是object类型');
//     } else {
//         if (typeof json.width != 'number' || typeof json.height != 'number') {
//             console.log('width 和 height 必须是number类型!!')
//         }
//     }
//     return true;
// }

// function serialize(obj:serialization){
//     let json = obj.toJSON();
//     let str = JSON.stringify(json);
//     console.log(str)
// }

// let box = new Box(50,50)
// serialize(box)

// 继承 vs interface
// 继承：单继承，重用代码、层级关系清晰
// 接口：多实现，灵活


//三. 构造函数interface
// interface BoxConstructorInterface{
//     new (a:string)
// }
// const Box = class{
//     private a:string;
//     constructor(a:string){
//         this.a = a;
//     }
// }



// interface BoxConstructorInterface{
//     new (a:string)
// }
// interface BoxInterface{
//     show(a:number):void;
// }
// const Box:BoxConstructorInterface = class implements BoxInterface {
//     private a:string;
//     constructor(a:string){
//         this.a = a;
//     }
//     show(a:number){
//         console.log(this.a)
//     }
// }
// 注意：构造函数interface是通过赋值的形式来实现

// 我们知道class可以继承，
// interface也能继承另外一个interface
// interface A { }
// interface B extends A { }
// class C implements B { }

// 注意的是：类可以继承一个类，接口可以继承一个接口，一个类还能继承一个接口
// interface A { }
// class B extends A { }
