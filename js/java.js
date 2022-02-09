$(".nav-item").on("click" , function(){
$(this).find("a").addClass("Active") ;
$(this).siblings().find("a").removeClass("Active") ;
})




$(".tags .btn").on("click" , function(){
$(this).removeClass("btn-dark")
$(this).addClass("btn-warning")
$(this).siblings().removeClass("btn-warning")
$(this).siblings().addClass("btn-dark")
})