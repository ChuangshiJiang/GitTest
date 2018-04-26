/*
 * Create by JCS on 2017-10-09
 */
//work with jQuery 1.x
$.fn.serializeObject=function(){
    var obj=new Object();
    $.each(this.serializeArray(),function(index,param){
        if(!(param.name in obj)){
            obj[param.name]=param.value;
        }
    });
    return obj;
};

$(function () {
    $(".commitBtn").click(function () {
        console.log( $("form").serialize()); //"username=&password="
        console.log( $("form").serializeArray()); //[{name:"username",value:""},{name:"password",value:""}]
        console.log($("form").serializeObject()); //{username:"",password:""}
    });


});


