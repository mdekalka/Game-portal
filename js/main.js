$(document).ready(function() {

	/* mobile menu show */
	$(".header_menu-mobile").css("display", "none");
 	$(".header-wrapper").css("display", "block");   
	 
	/* resize func for mobile menu */
	$(window).resize(function() {
		if ($(window).width() < 800)
		{
			$(".header-wrapper").css("display","none")
			$(".header_menu-mobile").css("display", "block");
		}
		else
		{
			$(".header_menu-mobile").css("display", "none");
			$(".header-wrapper").css("display", "block");
		}
	});
		
	/*   nth-child for old IE burn in hell*/
	$(".servers_connect-list li:nth-child(even)").css("margin-bottom", "18px");
	
	/* checkbox overload */
	$('.check').on('click', function(){
		var checkbox = $('input', $(this));
		$(this).toggleClass('checkOn');
		checkbox.prop('checked', !checkbox.prop('checked'));
	});
	
	/* inputs overload */
	 if ($('#place-select').length){
	 	$('#place-select').coreUISelect(); 
		} 
			
	 if ($('#map-select').length){
	 	$('#map-select').coreUISelect(); 
		} 
			
/* 	add stars to active list */
	$(".games-sub li a").click(function() {
		$(this).toggleClass("active");
	
	});
	$(".inners-list li a").click(function() {
		$(this).removeClass("active");
	});
	
	
	$(".content_box p a").click(function() {
		$(".content_box p a").removeClass("active");
		$(this).toggleClass("active");
	});


	








			
	
	
	
});
