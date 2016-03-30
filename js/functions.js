
// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
	jQuery('html').addClass('osx');
}

// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";


  $(window).load(function() { 

	// Custom scrool bar
   
  
  $(".works-container").mCustomScrollbar({
		axis: "x",
    setLeft: "150px",
    autoDraggerLength: false,
		advanced:{
			autoExpandHorizontalScroll:true
		}
	});       
  
	// Masonry portfolio
   


    $('.masonry-container').isotope({
        itemSelector: '.masonry-post',
        layoutMode: 'masonry'
    });




    // Single item slider
    $('.single-item').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      items:1,
      navText: [],
      smartSpeed:650
    });
    
    // One page navigation 	
    $('header .nav').onePageNav({
	     scrollOffset: 69,
	     scrollThreshold: 0.1,
	     filter: ':not(.ext)',
	     easing: 'swing'
    }); 

    // One page navigation on mobile device
    $('.mean-container .mean-nav').onePageNav({
	     scrollOffset: 69,
	     scrollThreshold: 0.1,
	     filter: ':not(.ext)',
	     easing: 'swing'
    });

    if ($(this).scrollTop() >  100 ){     
      $('.navbar').addClass("navbar-move");
      $('.mean-bar').addClass("navbar-move");                
    } 



      
});




	// External links
   
	$('a[rel=external]').attr('target','_blank');	
    
  
  // vertical text
  $(window).on('load', function (e) {
    e.preventDefault(); 
    var vt1 = $("#vt1").width(); $("#vt1").css("top", vt1+5);
    var vt2 = $("#vt2").width(); $("#vt2").css("top", vt2+5);
    var vt3 = $("#vt3").width(); $("#vt3").css("top", vt3+5);
   
  });
  
  $(window).on('resize', function (e) {
    e.preventDefault(); 
    var vt1 = $("#vt1").width(); $("#vt1").css("top", vt1+5);
    var vt2 = $("#vt2").width(); $("#vt2").css("top", vt2+5);
    var vt3 = $("#vt3").width(); $("#vt3").css("top", vt3+5);
   
  });
 

  //	Images portfolio
  

    // magnific popoup 
    $('.popup-link').magnificPopup({
  		type: 'image'
  	});
    
    // magnific popoup for video 
    $('.popup-youtube, .popup-vimeo').magnificPopup({
		    disableOn: 700,
		    type: 'iframe',
		    mainClass: 'mfp-fade',
		    removalDelay: 160,
		    preloader: false,
		    fixedContentPos: false
    });
  
    // image gallery  
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a.triangle', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    }); 




	
	// Move Nav
   

  $(window).on('scroll', function (e) {
    e.preventDefault();  
    if ($(this).scrollTop() >  20 ){     
      $('.navbar').addClass("navbar-move");
      $('.mean-bar').addClass("navbar-move");           
    } 
    else{
      $('.navbar').removeClass("navbar-move");      
      $('.mean-bar').removeClass("navbar-move");  
    }
  });
  

  

	
	// Mobile navigation

    $('nav').meanmenu({
        meanMenuClose: "X", // single character you want to represent the close menu button
        meanMenuCloseSize: "22px", // set font size of close button
        meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
        meanRevealPosition: "right", // left right or center positions
        meanRevealPositionDistance: "0", // Tweak the position of the menu
        meanRevealColour: "", // override CSS colours for the reveal background
        meanRevealHoverColour: "", // override CSS colours for the reveal hover
        meanScreenWidth: "991", // set the screen width you want meanmenu to kick in at
        meanNavPush: "", // set height in px, em or % if you want to budge your layout now the navigation is missing.
        meanShowChildren: true, // true to show children in the menu, false to hide them
        meanExpandableChildren: true, // true to allow expand/collapse children
        meanExpand: "+", // single character you want to represent the expand for ULs
        meanContract: "-", // single character you want to represent the contract for ULs
        meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
				onePage: true, // set to true for one page sites
				meanDisplay: "inline-block", // override display method for table cell based layouts e.g. table-cell
				removeElements: ".search-top-bt" // set to hide page elements
	 });
  


    var height = jQuery(window).height();
    jQuery('.mean-container .navbar-inner, .mean-container .mean-nav').css('max-height', height+'px');

    jQuery(window).on('resize', function (e) {
        e.preventDefault();
        var height = jQuery(window).height();
        jQuery('.mean-container .navbar-inner, .mean-container .mean-nav').css('max-height', height+'px');
      
        $('.mean-container .mean-nav').onePageNav({
	         scrollOffset: 69,
	         scrollThreshold: 0.1,
	         filter: ':not(.ext)',
	         easing: 'swing'
        });
    });





	 //counter - timers
    
    $('.counter-text').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
        }
    });

      
    // start all the timers
    $('.counter').appear(function() {
      $('.counter-text').each(count);
     },{accY: -100});
          

 
      
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    
      





});

