window.onload=function  () {


             
                 var dhnei=document.getElementsByClassName("zuodaohangnei")
                 var ceng=document.getElementsByClassName("qinzi")
                 for (var i = 1; i < dhnei.length-3; i++) {
                 	 dhnei[i].aa=i-1
                 	dhnei[i].onclick=function(){
                 	var numceng=ceng[this.aa].offsetTop;
                     animate(scrolltopobj,{scrollTop:numceng})
                 	}
                 }
            
  var daohang=$(".banner_boxtanchu") 
console.log(daohang)
  var neirong=$(".liebiao")    
   var liebiao1=function(a){

    function bb(){
      for (var i = 0; i < neirong.length; i++) {
        daohang[i].style.zIndex='0'
        daohang[i].style.display="none"
      }
       daohang[a].style.display="block"
      daohang[a].style.zIndex='999999'
    
    } return bb;
  }

 
    for (var i = 0; i < daohang.length; i++) {
          neirong[i].onmouseover=(liebiao1)(i)
          daohang[i].onmouseover=(liebiao1)(i)
          neirong[i].onmouseout=function(){
              for (var i = 0; i < neirong.length; i++) {
                daohang[i].style.zIndex="0"
              };
          }
           daohang[i].onmouseout=function(){         
              for (var i = 0; i < neirong.length; i++) {
                daohang[i].style.zIndex="0"
              };            
          }
        }; 
               






	//banner切换
	var  bto=document.getElementsByClassName('banner-bto')
	var  tu=document.getElementsByClassName("pngtu")
	var  bg=document.getElementsByClassName("banner-bg")[0]
	var bgcol=["#e8e8e8", "e8e8e8","#f0f0f0","#2cb0f8","#00baff"]
	var aa=function(a){
	    function bb(){
	    	num=a
			for (var i = 0; i < bto.length; i++) {
				bto[i].style.border="2px solid #aaa"
				tu[i].style.zIndex='1'
				bto[i].style.backgroundColor="#aaa"
			}
			bto[a].style.border="2px solid #666"
			bto[a].style.backgroundColor="#fff"
			tu[a].style.zIndex='99'
			bg.style.backgroundColor=bgcol[a]
		}
		return bb;
	}
    for (var i = 0; i < bto.length; i++) {
    	//给每个按钮对象添加一个index属性值为他在集合中的下标
	    bto[i].onmouseover=(aa)(i)
}
	//动画
	var num=0
	var donghua=setInterval(move,2000)
	 function move(){
          num++
          if (num==bto.length) {
          	num=0
          }
		for (var i = 0; i < bto.length; i++) {
				bto[i].style.border="2px solid #aaa";
				tu[i].style.zIndex='1';
				bto[i].style.backgroundColor="#aaa";
			}
			bto[num].style.border="2px solid #666";
			bto[num].style.backgroundColor="#fff";
			tu[num].style.zIndex="99";
			bg.style.backgroundColor=bgcol[num]
	}
bg.onmouseover=function(){
	clearInterval(donghua);
}
bg.onmouseout=function(){
	donghua=setInterval(move,2000);
}

var anniu=document.getElementsByClassName("daohanganniu")
var maotou=document.getElementsByClassName('maotou')

  var maotouchange=function(a){
		function bb(){
			for (var i = 0; i < maotou.length; i++) {
				
				maotou[i].style.display="none"
				maotou[i].style.top="0"
			
			}
			maotou[a].style.display="block"
			
			animate(maotou[a],{top:-10},200)
		
		}
		return bb;
	}
  var maotouxiaoshi=function(){
      for (var i = 0; i < maotou.length; i++) {
        
        maotou[i].style.display="none"
        maotou[i].style.top="0"
      
      }
  
  }
for (var i = 0; i < maotou.length; i++) {
	anniu[i].onmouseover=(maotouchange)(i)
  anniu[i].onmouseout=maotouxiaoshi

}




    var mangguo=document.getElementsByClassName("mangguokuang")
    // console.log(mangguo)
    var chaoliu=document.getElementsByClassName("chaoliukuang")
    // console.log(chaoliu)
     	for (var i = 0; i < chaoliu.length; i++) {
     		chaoliu[i].index=i
     		 chaoliu[i].onmouseover=function(){
     		animate(mangguo[this.index],{height:150,width:150},200)
     	    }
     	    chaoliu[i].onmouseout=function(){
     		animate(mangguo[this.index],{height:140,width:140},200)
     		}

       }

 var item_r=document.getElementsByClassName("item-r");
   var names=document.getElementsByClassName("name");
   var t;
   for (var i = 0; i < item_r.length; i++) {
    item_r[i].index=i;
    hover(item_r[i],function(){
    var that=this;
    clearTimeout(t);
    t=setTimeout(function(){
    names[that.index].style.display="block";
    animate(names[that.index],{left:-80,opacity:1},200) 
   },200);
    },function(){
    clearTimeout(t);
    animate(names[this.index],{left:-120,opacity:0.7},200,function(){
    this.style.display="none";
     }) 
    },200)
    }
     var totop1=document.getElementsByClassName("right10")[0];
     totop1.onclick=function(){
       var obj=document.body.scrollTop==0?document.documentElement:document.body;
         animate(obj,{scrollTop:0},200)
       }
       on(window,"scroll",function(){
      var obj=document.body.scrollTop==0?document.documentElement:document.body;
       if(obj.scrollTop>650) {
        animate(totop1,{opacity: 1},200);
       }else{
        animate(totop1,{opacity: 0},200);
       }
      })


          var ss=$(".show-box")[0]
         var dh=document.getElementsByClassName('zuodaohang')[0]
         document.documentElement.scrollTop=1
         var kg1=true;
         var kg2=true;

         if (document.documentElement.scrollTop==1) {
           var scrolltopobj=document.documentElement;
         }else{
           var scrolltopobj=document.body
         }
        on(window,"scroll",function(){
         console.log(scrolltopobj.scrollTop)
           if (scrolltopobj.scrollTop>650) {
             if (kg1) {
               kg1=false;
               kg2=true;
               ss.style.display="block"
             animate(ss,{top:0},300)
             animate(dh,{ width:36,height:380,opacity:1},1000)
            }
           }else {
             if (kg2) {
             kg1=true ;
             kg2=false;
             ss.style.display="none"
             animate(ss,{top:-100},300)
             animate(dh,{width:0,height:0,opacity:0},1000)
          
           }
         }})




    var floor=$(".qinzi")
    var arr=[]
    var doc=getDoc()   //doc方法
         for (var i = 0; i < floor.length; i++) {
          arr.push(floor[i].offsetTop)
         }

on(window,"scroll",function(){          
         var wh=document.documentElement.clientHeight
            for (var i = 0; i < floor.length; i++) {
              if(doc.scrollTop+700>arr[i]&&!floor[i].getAttribute("flag")){
                var imgs=$("img",floor[i])
              
                for (var j = 0; j < imgs.length; j++) {
                  imgs[j].src=imgs[j].getAttribute("asrc")
                }
                floor[i].setAttribute("flag",true)
              }
            }
          }) 


   var col=["red","blue","yellow","purple","orange","purple","green","yellow"]
  var scrnum=[1700,2200,2800,3300,4000,4500,5100,5900]
  var zuodhn=$(".zuodaohangnei")
on(window,"scroll",function(){
  for (var i = 0; i < zuodhn.length; i++) {
    if(scrolltopobj.scrollTop-400<scrnum[i]&&scrolltopobj.scrollTop+100>scrnum[i]){
    zuodhn[i].style.backgroundColor=scrnum[i]

  }
  };
  

})
}