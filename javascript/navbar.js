$(document).ready ( function(){
  $('#nav-toggle').click(function () {
  $('body').toggleClass('open');
  });
});​
$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });
