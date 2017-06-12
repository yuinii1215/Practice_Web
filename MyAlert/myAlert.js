/**
 * Created by mmm on 2017/4/24.
 */
function forJudge(){
    //if judge
    myAlert.loadBox("消息提醒","用户名已存在，请重新输入！")
}
//DOM operation
var myAlert = {
    loadBox : function(title,content){

        var backContainer= document.createElement("div");
        backContainer.id = "myAlertBox";
        backContainer.style.cssText="position:absolute;height:100%;left:0px;top:0px;width:100%;z-index:9999;display: flex;justify-content: center;flex-direction: column;align-items: center;";


        var alertOpacity = document.createElement("div");
        alertOpacity.style.cssText="position:absolute;left:0px;top:0px;width:100%;background:#000;opacity:0.5;z-index:9999;height:100%;";


        backContainer.appendChild(alertOpacity);

        var alertBox = document.createElement("div");
        alertBox.style.cssText="position:fixed;width:500px;height:250px;line-height:400px;text-align:center;background:#fff;z-index:10000; flex-direction: column;display:flex;justify-content: center;";


        //title
        var alertTitle = document.createElement("div");
        alertTitle.style.cssText="position:relative;width:100%;top:0px;left:0px;background:blue;z-index:10000;flex:1;display: flex;";

        var alertTitleContent = document.createElement("div");
        alertTitleContent.style.cssText="position:relative;width:80%;top:0px;left:0px;padding-left: 50px;line-height:75px;text-align:left;color:white;z-index:10000;";
        alertTitleContent.innerHTML = title;

        var alertExit = document.createElement("button");
        alertExit.id = "exitBtn";
        alertExit.style.cssText = "position:relative;right:0px;top:0px;width:30px;height:30px;background:#fff;cursor:pointer;margin:auto 0;text-align:center;";
        alertExit.innerText="X";

        alertTitle.appendChild(alertTitleContent);
        alertTitle.appendChild(alertExit);

        //content
        var alertContent = document.createElement("div");
        alertContent.style.cssText="position:relative;width:100%;top:0px;left:0px;line-height:100px;text-align:center;z-index:10000;flex:1";
        alertContent.innerHTML = content;
        //button
        var alertBtns = document.createElement("div");
        alertBtns.style.cssText="position:relative;width:100%;bottom:0px;left:0px;z-index:10000;flex:1;display:flex;";

        var alertSure = document.createElement("button");
        alertSure.content="确定";
        alertSure.id = "sureBtn";
        alertSure.style.cssText = "position:relative;width:70px;height:30px;background:blue;cursor:pointer;margin: 0 80px;flex:1;color:#fff;";
        alertBtns.appendChild(alertSure);

        var alertCancel = document.createElement("button");
        alertCancel.content="取消";
        alertCancel.id = "cancelBtn";
        alertCancel.style.cssText = "position:relative;width:70px;height:30px;background:blue;cursor:pointer;margin: 0 80px;flex:1;color:#fff;";
        alertBtns.appendChild(alertCancel);


        alertBox.appendChild(alertTitle);
        alertBox.appendChild(alertContent);
        alertBox.appendChild(alertBtns);

        backContainer.appendChild(alertBox);


        document.body.appendChild(backContainer);
        var cancelBtn = document.getElementById("cancelBtn");
        cancelBtn.onclick = function(){
            document.body.removeChild(document.getElementById("myAlertBox"));
            //do something?
        };

        var exitBtn = document.getElementById("exitBtn");
        cancelBtn.innerText="关闭";
        exitBtn.onclick = function(){
            document.body.removeChild(document.getElementById("myAlertBox"));
            //do something?
        };

        var sureBtn = document.getElementById("sureBtn");
        sureBtn.innerText="确定";
        sureBtn.onclick = function(){
            document.body.removeChild(document.getElementById("myAlertBox"));
            //do something?
        }
    }
};

