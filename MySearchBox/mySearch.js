//realize the prompt box for search box,still exist some mistakes
var dataList=["a","b","c","d","ac","ad","aaa","dcs","bdx","csa","cs","assq"]; //record the data
var currentSelIndex = -1;
var oldSelIndex = -1;
var Llength=0;

function paint() {
    var searchDiv = document.getElementById("searchDiv");
    var listBox = document.getElementById("listBox");
    listBox.style.top= searchDiv.style.top+searchDiv.style.height;
    listBox.style.left= searchDiv.style.left;

    var searchInput = document.getElementById("searchInput");
    if (searchInput.addEventListener) {
        searchInput.oninput =inputFunction;
    }else if(searchInput.attachEvent){
        searchInput.onpropertychange=inputFunction;
    }

    var searchBtn = document.getElementById("searchBtn");
    if (searchBtn.addEventListener) {
        searchBtn.addEventListener("click",clickFunction);
    }else if(searchBtn.attachEvent){
        searchBtn.attachEvent("onclick",clickFunction);
    }
    searchInput.onkeyup = grabEvent;
}

function clickFunction(){
    var text = document.getElementById("searchInput");
    console.log(text.value);
}

function grabEvent(){
    var keyCode = event.which||event.keyCode;
    oldSelIndex = currentSelIndex;

    switch(keyCode){
        case 13:
            break;
        case 38://up
            if (currentSelIndex == -1) {
                currentSelIndex = Llength - 1;
            }else {
                currentSelIndex = currentSelIndex - 1;
                if (currentSelIndex < 0) {
                    currentSelIndex = Llength - 1;
                }
            }
            if (currentSelIndex != -1) {
                document.getElementById("li_" + currentSelIndex).style.backgroundColor = "#cbf3fd";
                document.getElementById("searchInput").value = document.getElementById("li_" + currentSelIndex).innerText;
            }
            if (oldSelIndex != -1) {
                document.getElementById("li_" + oldSelIndex).style.backgroundColor = "#ffffff";
            }
            break;
        case 40://down

            if (currentSelIndex == Llength - 1) {
                currentSelIndex = 0;
            }
            else {
                currentSelIndex = currentSelIndex + 1;
                if (currentSelIndex > Llength - 1) {
                    currentSelIndex = 0;
                }
            }
            if (currentSelIndex != -1) {
                document.getElementById("li_" + currentSelIndex).style.backgroundColor = "#cbf3fd";
                document.getElementById("searchInput").value = document.getElementById("li_" + currentSelIndex).innerText;
            }
            if (oldSelIndex != -1) {
                document.getElementById("li_" + oldSelIndex).style.backgroundColor = "#ffffff";
            }
            break;
    }
}


function inputFunction() {
    var text = document.getElementById("searchInput");
    var listBox = document.getElementById("listBox");
    var list = document.getElementById("list");
    var a = text.value;

    var reg = new RegExp("^"+a);
    var t=0;

    if(a==""){
        listBox.style.display="none";
        list.innerHTML="";
    }else {
        for (var i = 0; i < dataList.length; i++) {
            if (reg.test(dataList[i])) {
                t++;
            }
        }
        if (t == 0) {
            listBox.style.display = "none";
            list.innerHTML = "";
        }
        var j=0;
        if (t > 0) {
            list.innerHTML = "";
            listBox.style.display = "block";
            for (var k = 0; k < dataList.length; k++) {
                var id="li_"+(j+"");

                if (reg.test(dataList[k])) {
                  j++;
                    list.innerHTML += "<li id="+id+">" + dataList[k] + "</li>";
                }
            }
            Llength=t;
            t=0;
        }
    }
}