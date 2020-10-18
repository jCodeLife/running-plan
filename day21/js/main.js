// 置顶按钮
let sideTool = document.getElementsByClassName("side-tool")[0];
window.onscroll = function () {
    let  scrollDistance = parseInt(window.pageYOffset);
    if(scrollDistance>0){
        sideTool.style.display ="block";
    }
}
sideTool.addEventListener("click",function(){
    document.body.scrollTop=document.documentElement.scrollTop=0;
    sideTool.style.display ="none";
},false)