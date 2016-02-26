
$(document).ready(function() {

    // If I want the design work to be visible on page load
        // $(window).scrollTo('.work',1000,{offset:-80});

   	// $('.menu').localScroll({duration:800});

   	// Linking nav to sections for animated scrolling

   	$("[title=About]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.about',1000,{offset:-100});
   	});

	  $("[title=Services]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.services',1000,{offset:-40});
   	});

   	//$("[title=Work]").on('click', function(event){
		//event.preventDefault();
		//$(window).scrollTo('.work',1000,{offset:-50});
   //	});

   	$("[title=Contact]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.contact',1000,{offset:-20});
   	});

    $("[title=Design]").on('click', function(event){
    event.preventDefault();
    $(window).scrollTo('.work',1000,{offset:-40});
    });

    $("[title=Art]").on('click', function(event){
    event.preventDefault();
    $(window).scrollTo('.artport',1000,{offset:-80});
    });


    //Drop down menu on click for touch devices

});

    $(".dropdown").on('click', function() {
      $('.dropdown-content').toggle('show');
    });

