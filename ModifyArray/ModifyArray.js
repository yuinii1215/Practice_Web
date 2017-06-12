/**
 * Created by mmm on 2017/4/24.
 */
var arr2=[];
window.onload=function() {
   var  arr  =[['灰色', '银色'],['128g', '256g']];
    document.getElementById("source").innerText=arr;
    modifyArray(arr,0,new Array(0));
    document.getElementById("result").innerText=arr2;
};



function modifyArray(arr,level,former){

    if(arr.length == level + 1){
        if(arr[level] instanceof Array){
            for(var i = 0; i < arr[level].length; i++){
                temp = former.slice(0);
                temp.push(arr[level][i]);
                arr2.push(temp);
            }
        }
        else{
            temp = former.slice(0);
            temp.push(arr[level]);
            arr2.push(temp);
        }
    }
    else{
        if(arr[level] instanceof Array){
            for(var i = 0; i < arr[level].length; i++){
                temp = former.slice(0);
                temp.push(arr[level][i]);
                modifyArray(arr,level+1,temp);
            }
        }
        else{
            temp = former.slice(0);
            temp.push(arr[level]);
            modifyArray(arr,level+1,temp);
        }
    }
}