/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

 $(window).on("load",function() {
   function fade(pageLoad) {
   	var windowBottom = $(window).scrollTop() + $(window).innerHeight();
     var min = 0.4;
     var max = 0.7;
     var threshold = 0.01;

     $(".box").each(function() {
       /* Check the location of each desired element */
       var objectBottom = $(this).offset().top + $(this).outerHeight();

       /* If the element is completely within bounds of the window, fade it in */
       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo(500,max);}
       } else { //object goes out of view (scrolling up)
         if ($(this).css("opacity")>=max-threshold || pageLoad) {$(this).fadeTo(500,min);}
       }
     });
   } fade(true); //fade elements on page-load
   $(window).scroll(function(){fade(false);}); //fade elements on scroll
 });
