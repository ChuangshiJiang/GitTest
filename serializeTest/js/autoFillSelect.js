$(function () {
    
    $("#valueOf").html(new Date().valueOf());


    startTime();


    if(!window.localStorage){
        //alert("not support!");
        return false;
    }else{
         //alert("yes support!");
        var storage = window.localStorage;
        storage["a"] = 1;
        storage.b = 2;
        storage.setItem("c",3);
    }

    $("#clearLocal").click(function(){
        window.localStorage.clear();
    });
    $("#removeA").click(function(){
        window.localStorage.removeItem("a");
    });
});

function startTime()
{
    var today=new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
// add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('txt').innerHTML=year+"-"+month+"-"+day+"&nbsp;&nbsp;"+h+":"+m+":"+s;
    t=setTimeout('startTime()',1000)
}


function checkTime(i)
{
    if (i<10)
    {i="0" + i}
    return i
}


