$(document).ready(function(){
    var pathNames = window.location.pathname.split( '/' );
    $('a[href="' + pathNames[pathNames.length-1] + '"]').addClass("features-active");
});
    
