var button = document.getElementById('button'),
    title =document.getElementById('title'),
    leftLine = document.getElementById('line-left'),
    rightLine = document.getElementById('line-right');

addEvent(button,'click',function () {
    if(hasClass(leftLine, 'left-transition')){
        removeClass(leftLine, 'left-transition');
        removeClass(rightLine, 'right-transition');
        removeClass(title, 'toBlue');
        addClass(leftLine, 'left-reverse');
        addClass(rightLine, 'right-reverse');
        addClass(title, 'toBlack');


    }else{
        removeClass(leftLine, 'left-reverse');
        removeClass(rightLine, 'right-reverse');
        removeClass(title, 'toBlack');
        addClass(leftLine, 'left-transition');
        addClass(rightLine, 'right-transition');
        addClass(title, 'toBlue');
    }

});


/*
* 检查是否存在某个class
* ele 要被查询元素
* strClass 查询class的名称，为string类型
* */
function hasClass(ele, strClass) {
    var reg = new RegExp('(^| +)'+ strClass +'( +|$)');
    return reg.test(ele.className);
}

/*
* 添加class
* ele 要添加的元素
* 添加元素的名称，可以为以空格分开的多个class，为string
* */
function addClass(ele, strClass) {
    var classAry = strClass.replace(/^ +| +$/g,'').split(/ +/g); //strClass = [c2,c3]
    for(var i = 0; i<classAry.length; i++){
        var curClass = classAry[i];
        if(!hasClass(ele,curClass)){ //在ele中有curClass
            ele.className += ' ' + curClass;
        }
    }
}

/*
* 移除class
* 要被移除class的元素
* 要移除的class名称，需要为string类型，可以为单一class，也可以为多个以空格个分隔开的sting
* */
function removeClass(ele, strClass) {
    var classAry = strClass.replace(/^ +| +$/g,'').split(/ +/g);
    for (var i=0; i<classAry.length; i++){
        var curClass = classAry[i];
        if(hasClass(ele,curClass)){
            var reg = new RegExp('(^| +)'+ curClass+ '( +|$)','g');
            ele.className = ele.className.replace(reg,' ');
        }
    }
}


/*
* 添加监听事件
* */
function addEvent(ele, type, handler) {
    if(ele.addEventListener){
        ele.addEventListener(type, handler, false);
    }else if(ele.attachEvent){
        ele.attachEvent('on' + type, handler);
    }else{
        ele['on' + type] = handler;
    }
}

