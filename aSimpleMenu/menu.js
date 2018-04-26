var button = document.getElementById('button'),
    title =document.getElementById('title'),
    leftLine = document.getElementById('line-left'),
    rightLine = document.getElementById('line-right');

button.addEventListener('click',function () {
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



function hasClass(ele, strClass) {
    var reg = new RegExp('(^| +)'+ strClass +'( +|$)');
    return reg.test(ele.className);
}

function addClass(ele, strClass) {
    var classAry = strClass.replace(/^ +| +$/g,'').split(/ +/g); //strClass = [c2,c3]
    for(var i = 0; i<classAry.length; i++){
        var curClass = classAry[i];
        if(!hasClass(ele,curClass)){ //在ele中有curClass
            ele.className += ' ' + curClass;
        }
    }
}

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

