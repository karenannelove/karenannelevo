
$(document).ready(function() {
   
   	// $('.menu').localScroll({duration:800});

   	// Linking nav to sections for animated scrolling

   	$("[title=About]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.about',1000,{offset:-97});
   	});
   
	$("[title=Services]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.services',1000,{offset:-70});
   	});

   	$("[title=Work]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.work',1000,{offset:-40});
   	});

   	$("[title=Contact]").on('click', function(event){
		event.preventDefault();
		$(window).scrollTo('.contact',1000,{offset:-97});
   	});

// Filtering portfolio nav (art vs design)

   	 $('#btn-design').on("click", function(event){
   	 	event.preventDefault();
   		$('.design').addClass('is-shown');
   		$('.design').removeClass('is-hidden');
   		$('.art').addClass('is-hidden');
   	 });

   	 $('#btn-art').on("click", function(event){
   	 	event.preventDefault();
   		$('.art').addClass('is-shown');
   		$('.art').removeClass('is-hidden');
   		$('.design').addClass('is-hidden');
   		
   	 });

   	 $('#btn-all').on("click", function(event){
   	 	event.preventDefault();
   		$('.art').addClass('is-shown');
   		$('.design').addClass('is-shown');
   		$('.art').removeClass('is-hidden');
   		$('.design').removeClass('is-hidden');
   		
   	 });

});