$(document).ready(function() {
    $('body').keydown(function(e) {
        if(e.keyCode == 39) { // right key pressed
         $('.box')
              .addClass('right')
              .removeClass('left down up')
              .stop()
              .animate({
                 left: '+=5'
             });
       }
    }).keyup(function(){ 
        // On keyup all direction classes are moved and face toward you
     $('.box').removeClass('right down up left');
  });
});