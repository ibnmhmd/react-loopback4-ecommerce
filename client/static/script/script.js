$(document).ready(function(){
   

  
    /********* on scroll fix the header *****/
    window.onscroll = function() {fixHeader();};
    
    // Get the header
    var header = document.getElementsByClassName("__navbar_main_bar_wrapper");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function fixHeader() {
       // console.log('scrolled')
    if (window.pageYOffset >= 100) {
        $('.float-panel').addClass('fixed');
    } else {
        $('.float-panel').removeClass('fixed');
    }
  }
});