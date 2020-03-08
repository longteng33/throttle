function throttle(fn,delay){
    var t=null;
    // 记录一个开始时间
    var begin =new Date().getTime();
    return function(){
        var _self=this;
        var args=arguments;
        // 记录一个当前时间
        var cur=new Date().getTime();
        clearTimeout(t);
        // 如果当前时间已经在记录时间的n秒之后了，就执行回调函数
        if(cur-begin>=delay){
            fn.apply(_self,args);
            begin=cur;
        }else{
            // 否则就在秒之后执行回调函数，所以最后一次点击，如果没有触发回调函数fn，就会在此次点击的n秒之后再触发
            t=setTimeout(function(){
                fn.apply(_self,args)
            },delay)
        }
    }
}