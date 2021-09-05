$(document).ready(function(){
    $("#profile").click(function(){
        $("#one").toggle(1000);
        $("two").hide(1000);
        $("#three").hide(1000);
        
    });
    $("#values").click(function(){
        $("#two").toggle(1000)
        $("#one").hide(1000);
        $("#three").hide(1000);
    });
    $("#services").click(function(){
        $("#three").toggle(1000)
        $("#one").hide(1000);
        $("#two").hide(1000);
    });
});