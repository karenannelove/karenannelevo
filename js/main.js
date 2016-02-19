
$(document).ready(function() {

    // Initialize the Filter State
    var filterState = 'all';

    // If I want the design work to be visible on page load
    $(window).scrollTo('.about',1000,{offset:-80});

   	// $('.menu').localScroll({duration:800});

   	// Linking nav to sections for animated scrolling

   	$("[title=About]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.about',1000,{offset:-97});
   	});

	  $("[title=Services]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.services',1000,{offset:30});
   	});

   	$("[title=Work]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.work',1000,{offset:-10});
   	});

   	$("[title=Contact]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.contact',1000,{offset:-20});
   	});



// Filtering portfolio nav (art vs design)

   	 $('#btn-design').on("click", function(event){
   	 	event.preventDefault();
   		$('.design').addClass('is-shown');
   		$('.design').removeClass('is-hidden');
   		$('.art').addClass('is-hidden');

      // Reassign Filter State to Design (on click of design filter btn)
      filterState = 'design';
   	 });

   	 $('#btn-art').on("click", function(event){
   	 	event.preventDefault();
   		$('.art').addClass('is-shown');
   		$('.art').removeClass('is-hidden');
   		$('.design').addClass('is-hidden');

      // Reassign Filter State to Art (on click of art filter btn)
      filterState = 'art';
   	 });

   	 $('#btn-all').on("click", function(event){
   	 	event.preventDefault();
   		$('.art').addClass('is-shown');
   		$('.design').addClass('is-shown');
   		$('.art').removeClass('is-hidden');
   		$('.design').removeClass('is-hidden');

      // Reassign Filter State to All (on click of all filter btn)
      filterState = 'all';
   	 });

// SwipeBox Gallery

  // Removed swipebox plugin call on load
  // 	$( '.swipebox' ).swipebox();


    // Arrays that store the list of images we'll load on click of an image
    var designCollection = [
      { href:'images/portfolio/design_a.png', title:'My Caption A' },
      { href:'images/portfolio/design_b.png', title:'My Second Caption' }
    ];

    var artCollection = [
      { href:'images/portfolio/art_a.png', title:'My Caption Arrrrrtt' },
      { href:'images/portfolio/art_b.png', title:'My Second arttt Caption' }
    ];

    var allCollection = [
      { href:'images/portfolio/design_a.png', title:'My Caption A' },
      { href:'images/portfolio/design_b.png', title:'My Second Caption' },
      { href:'images/portfolio/art_a.png', title:'My Caption Arrrrrtt' },
      { href:'images/portfolio/art_b.png', title:'My Second arttt Caption' }
    ];


    // On click of an image, we'll dynamically set the swipebox gallery
    $( '.thumbs > li img' ).on('click', function( e ) {
    	e.preventDefault();

      if (filterState === 'design') {
        $.swipebox(designCollection);

      } else if (filterState === 'art') {
        $.swipebox(artCollection);

      } else {
        $.swipebox(allCollection);
      }

    });

    /*
      Potential hacky work around if you want the gallery to start at the selected image

      $('design-a').on('click', function(){
        $.swipebox(designACollection);
      });

      $('design-b').on('click', function(){
          $.swipebox(designBCollection);
      });
    */

});
