// 类型断言和类型守卫
// ---------------------------------------------------------------
// 断言：断定、确定、绝对的意思
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}
showUser({ name: 'Alice', age: 12 });
var errorType = 1;
// showUser(errorType) 错误方式
function isUser(arg) {
    if (!arg) {
        return false;
    }
    else {
        if (typeof arg.name == 'string' && typeof arg.age == 'number') {
            return true;
        }
        else {
            return false;
        }
    }
}
//类型断言
if (isUser(errorType)) {
    showUser(errorType);
}
