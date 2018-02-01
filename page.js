$("ul li a").click(function(){
  $(".active").removeClass("active");        
  $(this).addClass("active");
});