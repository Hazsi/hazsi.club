jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 15;
    mouseY = e.pageY - 15; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/25);
    yp += ((mouseY - yp)/25);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 2);

});