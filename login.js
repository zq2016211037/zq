//登陆框
var btnLogin = document.getElementById('btnLogin');
var maska = document.getElementById('maska');
var oClose=document.getElementById("close");
var login=document.getElementById("login");
btnLogin.onclick=function(){  
    maska.style.display = "block";
    login.style.display = "block";
}
//点击遮罩小红叉关闭登陆框
oClose.onclick=maska.onclick=function(){
    maska.style.display ="none";
    login.style.display ="none";
 };

function lunbo(){
    var container=document.getElementById("container");
    var list=document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var prev= document.getElementById('prev');
    var next = document.getElementById('next');
    var index=1;
    function buttonOn(){
       for (var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
               }
            }
            buttons[index-1].className="on";
   }
    function animation(offset){
        var newLeft=parseInt(list.style.left)+offset;
        list.style.left=newLeft+"px";
        if (newLeft> -1400) {
            list.style.left=-4200+"px";
        }
        if  (newLeft< -4200) {
            list.style.left=-1400+"px";
        }
     }
    next.onclick=function(){
        if (index==3) {
            index=1;
        }
        else{
            index++;
       }
        buttonOn();
        animation(-1400);
    };
     prev.onclick=function(){
        if (index==1) {
            index=3;
        }
        else{
            index--;
        }
    buttonOn();
    animation(1400);
    };
    
//自动轮播函数。
     function auto(){
       var time = null;
       time = setInterval(function(){
         next.onclick()
         },2000);
     }
      auto();       
//点击小点切换。
  for(var i=0;i<buttons.length;i++){
        buttons[i].onclick= function(){
            if(this.className=="on"){
                    return;
              }
        var myIndex=parseInt(this.getAttribute("index"));
        var offset=-1400*(myIndex-index);
        animation(offset);
        index=myIndex;
        buttonOn();
        };
    }  
    
}  
 lunbo();
 //学校搜索
        var sText=document.getElementById("search-text");
        var sButton=document.getElementById("sButton");
        var tishi=document.getElementById("tishi");
        var preSchool=document.getElementById("pre-school");
        var i=0;
    function show(sText){
            var lists=document.getElementsByTagName("li");
                preSchool.innerHTML=lists[i].innerHTML=sText.value;
                i++;
                if(lists.length==i)
                i=0;        
        }
    sButton.onclick=function(){
        //含有非法字符
        var re=/^[\u4e00-\u9fa5]+$/;
        if(re.test(sText.value)){
            show(sText);
        }
        else{
            tishi.style.display="block";
        }
    };         