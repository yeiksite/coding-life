$(function(){
	var h = $( window ).height();
	if (h > 626) {
		$('.i-main,.item').css({
			'height': h
		});
	}
	  var w = $( window ).width();
	  var menu = $('#menu');
	  var menu_offset = menu.offset();
	  // Cada vez que se haga scroll en la página
	  // haremos un chequeo del estado del menú
	  // y lo vamos a alternar entre 'fixed' y 'static'.
	  $(window).on('scroll', function() {
	    if($(window).scrollTop() > menu_offset.top) {
	      menu.addClass('menu-fijo');
	      if (w <= 600) {
		 	menu.css({
		 		'display': 'none'
		 	});
		 	$('.show-hidde').css({
		 		'display': 'block'
		 	});
	     }
	    } else {
	      menu.removeClass('menu-fijo');
	      if (w <= 600) {
		 	menu.css({
		 		'display': 'block'
		 	});
		 	$('.show-hidde').css({
		 		'display': 'none'
		 	});
	     }
	    }
	  });

	 $('#s-h-btn').click(function(){
	 	menu.toggle();
	 	menu.css({
	 		'top': 29
	 	});
	 	$('.menu-fijo').css({
	 		'width': '100%',
	 		'left': 0
	 	});
	 });

	$('.ss').on('click',function(e){
		//prevenir en comportamiento predeterminado del enlace
		e.preventDefault();
		//obtenemos el id del elemento en el que debemos posicionarnos
		var strAncla=$(this).attr('href');
		
		//utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
		$('body,html').stop(true,true).animate({
			//realizamos la animacion hacia el ancla
			scrollTop: $(strAncla).offset().top
		},1000);
	});

//MAGNIFIC-POPUP	
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

});