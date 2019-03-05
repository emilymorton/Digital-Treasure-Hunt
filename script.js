$(".button").click(function(){
        $(".Text1").text("Move your mouse over the picture");  
    
});
$(".treasure").mouseenter(function(){
        $(".treasure").attr("src","https://roslandcapital.imgix.net/2014/12/2.50-liberty-gold-coin-heads-web.jpg?auto=compress%2Cformat&ixlib=php-2.1.0&max-h=400&s=571d25bf5d2f506e4565ae778d46c622");
        $(".Text1").text("double click On the 'Digital Tresure Hunt'");
        
        });
        
        $(".header").dblclick(function(){
        $(".treasure").hide();
        $(".button").hide();
        $(".Text1").hide();
        $(".Text2").text("click on the last text");
        $(".Text3").text("click on text 1st text");
        $(".Text4").text("click on the 2nd text");
        
        });
        

  $(".Text4").click(function(){
      $("body").css("background-color","blue");
      
      
  });
        