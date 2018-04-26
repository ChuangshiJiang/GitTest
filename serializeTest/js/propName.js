$(function(){
    //输出window的所有属性和方法
    var i =0;
    for(var propName  in window){
        i++;
        if(window.localStorage[i] == "active"){
            $("<div class='prop active'>"+"<span class='num'>"+i+"</span>"+propName+"</div>").appendTo($("body"));
        }else{
            $("<div class='prop'>"+"<span class='num'>"+i+"</span>"+propName+"</div>").appendTo($("body"));
        }
    }

    $(document).on("click",".prop",function () {
        //如果已经标记为已读，询问是否取消已读
        if($(this).hasClass("active")){
            var t = this;
            if(window.confirm("是否取消标志？")){
                $(t).removeClass("active");
                window.localStorage.removeItem($(t).find("span").text());
            }
        }else{
            $(this).addClass("active");
            var objStatus = window.localStorage;
            //console.log(objStatus);
            objStatus[$(this).find("span").text()] = "active";
        }
    });

});