// 类型断言和类型守卫
// ---------------------------------------------------------------
// 断言：断定、确定、绝对的意思

// 类型断言需要借助类型守卫函数
// 类型守卫函数用于检测是否符合要求


// 为什么会由这个东西？
// 我们知道所有的语言，类型其实都是静态的，只存在于编译期，换句话说在运行时是不具有类型这个概念的。
// 类型断言用于运行时的类型保证

type User = {
    name: string;
    age: number;
}
function showUser(user: User) {
    console.log(user.name);
    console.log(user.age);
}
showUser({ name: 'Alice', age: 12 })
let errorType = '';
// showUser(errorType) 错误方式
function isUser(arg: any): arg is User {
    if (!arg) {
        return false;
    }
    else {
        if (typeof arg.name == 'string' && typeof arg.age == 'number') {
            return true;
        } else {
            return false;
        }
    }
}
//类型断言
if (isUser(errorType)) {
    showUser(errorType);
}
