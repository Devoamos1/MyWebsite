$(document).ready(function(){
			$(".menu-toggle a").click(function(){
				$(".menu").slideToggle(700);
			});
		});


    var yourNavigation = $(".menu-toggle");
    stickyDiv = "test";
    yourHeader = $(".header").height();

    $(window).scroll(function() {
      if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
      } else {
        yourNavigation.removeClass(stickyDiv);
      }
    });
