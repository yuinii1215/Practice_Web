var oBox = document.getElementById('box');
oBox.onmousedown = function(e){
    var oEvent = e || window.event,
        disL = oEvent.clientX - oBox.offsetLeft,
        disT = oEvent.clientY - oBox.offsetTop,
        maxL = document.documentElement.clientWidth - oBox.offsetWidth,
        maxT = document.documentElement.clientHeight - oBox.offsetHeight;
    document.onmousemove = function(e){
        var oEvent = e || window.event,
            disX = oEvent.clientX - disL,
            disY = oEvent.clientY - disT;

        if(disX <=0){ disX =0}
        if(disY <=0){ disY =0}
        if(disX >=maxL){ disX =maxL}
        if(disY >=maxT){ disY =maxT}
        oBox.style.left = disX+'px';
        oBox.style.top = disY+'px';
    }

};
document.onmouseup=function(){
    document.onmousemove=null;
};