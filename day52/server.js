//引入相应模块
const http=require('http');//http协议相关
const fs=require('fs');//文件系统相关
const querystring=require('querystring');//查询字符串相关
const urlLib=require('url');//处理url相关

var server=http.createServer(function(req,res){
    //GET
    var obj=urlLib.parse(req.url,true);
    var url=obj.pathname;
    const GET=obj.query;

    //POST
    var str='';
    var POST='';
    req.on('data',function(data){
        str+=data;
    });
    req.on('end',function(){
        POST=querystring.parse(str);
    });
    // console.log(url,GET,POST)

    //文件请求
    var file_name='./www'+url;
    fs.readFile(file_name,function(err,data){
        if (err) {
            res.write("404");
        }else{
            res.write(eval(data));
        }
        res.end();
    });

});

server.listen(8088);//要个端口并且监听该端口