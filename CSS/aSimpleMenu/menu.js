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
* */
function hasClass(ele, strClass) {
    var reg = new RegExp('(^| +)'+ strClass +'( +|$)');
    return reg.test(ele.className);
}


/*
* 添加class
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
*移除class
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

