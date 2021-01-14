const fs = require('fs')
// 读文件，readFile(哪个文件，回调函数)
// fs.readFile('a.txt',function(err,data){
//     if(err){
//         console.log('读取失败')
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// fs.writeFile(文件名，内容，回调函数)
fs.writeFile('b.txt','bbbbbbbb',function(err){
    console.log(err)
})