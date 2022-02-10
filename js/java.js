$(".nav-item").on("click" , function(){
$(this).find("a").addClass("Active") ;
$(this).siblings().find("a").removeClass("Active") ;
})




$(".tags .btn").on("click" , function(){
$(this).removeClass("btn-dark").siblings().removeClass("btn-warning")
$(this).addClass("btn-warning").siblings().addClass("btn-dark")
if ( $(this).data("feature") == "All" ){
    $(".shuffle img ").css("opacity" , "1" )
}
else{
    $(".shuffle img ").css("opacity" , ".09" )
    $(`.shuffle  .${$(this).data("feature")}` ).css("opacity" , "1" )   
}})


