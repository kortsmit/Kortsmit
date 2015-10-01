$(window).ready(function() {  
  $(".connect-icons a").hover(function(){
    $(".connect-box").toggleClass("color-"+ this.className );
    $(".text-"+ this.className).toggleClass("show");
    console.log('test'); 
  });
});