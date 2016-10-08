function $(selector,range){
	range=range||document
	if (typeof(selector)=="string") {
        if (selector.charAt(0)=="#") {
        	return document.getElementById(selector.slice(1))
        }
        if (selector.charAt(0)==".") {
        	return getClass(selector.slice(1),range)
        }
        if (/^[a-z][a-z,1-6]{0,9}$/.test(selector)) {
        	return range.getElementsByTagName(selector)
        }
	}
	if (typeof(selector)=="function") {
		on(window,"load",selector)
	}

}
	function getStyle(obj,attr){
			if (window.getComputedStyle) {
				return window.getComputedStyle(obj,null)[attr]
			}else{
				return obj.currentStyle[attr]
			}

		}
		function getClass(selector,context){
  context=context||document;
	if (document.getElementsByClassName){
     return context.getElementsByClassName(selector)
   }else{
   	var all=context.all;      
   	var newarr=[];
   	for (var i = 0; i < all.length; i++) {
   	 if(checkstr(all[i].className,selector)){
   	 	newarr.push(all[i])
   	 }
   	}
   	return newarr;
   }
}
function checkstr(lstr,str){
      var arr=lstr.split(" ")
      for (var i = 0; i < arr.length; i++) {
        if(arr[i]==str){
         return true;
        }
      }
      return false;
   }

// !=8 &&!( ==3 && ==“”)
function getChild(obj){    //获取子元素   且不获取注释  及回车
  var arr=[]
  var all=obj.childNodes

  for (var i = 0; i < all.length; i++) {
    if (pd(all[i])) {  //all[i].nodeType!=8&&!(all[i].nodeType==3&&trim(all[i].nodeValue)=="")
      arr.push(all[i])
    };
  }
  return arr
}
//去除字符串两侧空格
   function trim(str){
     return str.replace(/^\s*|\s*$/g,"")
}
//判断   不是注释节点   且     不是      文本节点和空字符串
function pd(obj){
  return obj.nodeType!=8&&!(obj.nodeType==3&&trim(obj.nodeValue)=="")
}
//
function getFirst(obj){
  var all=getChild(obj)
  return all[0]

}
function getLast(obj){
  var all=getChild(obj)
  return all[all.length-1]
}
function getNum(obj,num){    //第几个元素即为num  
  var all=getChild(obj)
  return all[num-1]
}
function getNext(obj){
  var next=obj.nextElementSibling
     if (!next) {
          return false
        };
  // if (!next) {    //当下一个元素不存在时   不报错  保证程序执行
  //   return false
  // };
  while(!pd(next)){
    if (next==null) {
          return false
        };
        next=next.nextSibling
  }
  return next
}
// val-(val*0.5)   缓冲运动    先快后满

function insertAfter(charu,zhihou){
  var parent=zhihou.parentNode
  var next=getNext(zhihou)
  if (next) {
    parent.insertBefore(charu,next)
  }else{
    parent.appendChild(charu)
  }
}

//兼容性获取 滚动条
function getDoc(){
  var doc=null
  document.documentElement.scrollTop=1;
  if (document.documentElement.scrollTop==1){
    doc=document.documentElement
  }else{
    doc=document.body
  }
return doc
}


// 事件绑定
function on(obj,ev,fn){
  if (obj.addEventListener) {
    obj.addEventListener(ev,fn)
  }else{
    obj.attachEvent("on"+ev,fn)
  }
}

function off(obj,ev,fn){
  if (obj.removeEventListener){
    obj.removeEventListener(ev,fn)
  }else{
    obj.detachEvent('on'+ev,fn)
  }
}


//给某个对象添加滚轮事件
function mousewheel(obj,upfun,downfun){
    if (obj.addEventListener) {
      obj.addEventListener("mousewheel",scrollfun,false)
      //谷歌和ie9-11
      obj.addEventListener("DOMMouseScroll",scrollfun,false)
        //火狐
    }else{
      obj.attachEvent("onmousewheel",scrollfun)
      //ie6-8
    }
    function scrollfun(e){
      var ev=e||window.event;
    // console.log(ev.detail)    //-3  3   ff
    // console.log(ev.wheelDelta)  //120  -120    gg+ie
    var  dir=ev.detail||ev.wheelDelta;    //ie与谷歌火狐不同
    if(dir==-3||dir==120){     //向上
      // console.log('shang')
        upfun.call(obj)}
    if(dir==3||dir==-120){      
      // console.log('xia')
        downfun.call(obj)
    }
    if (ev.parentDefault) {
      ev.parentDefault()
    }else{
      ev.returnValue
    }
    }
}

//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }
 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
    function getEvent(e){
    return e||window.event;
  }