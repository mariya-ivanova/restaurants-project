/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	// $(function() {

		// var	$window = $(window),
		// 	$body = $('body');


	// });

$(document).ready(function(){
	  $('#nav li a').click(function(){
	    $('#nav li a').removeClass("active");
	    $(this).addClass("active");
	    // console.log($(this));	    
	});

	  $('#header a').click(function(){
	    $('#header a').removeClass("active");
	    $(this).addClass("active");
	    // console.log($(this));
	});	  
});

// from stackoverflow.com/questions/48121795/add-and-remove-active-class-on-item-click
// $("#nav li").on("click", function(e) {
//      e.preventDefault();
//      if ($(this).parent().hasClass('collapse')) {
//         $(this).parent().parent().addClass("active");
//      } else {
//        $("#nav li").removeClass("active");
//        $(this).addClass("active");
//      }
// });

		$('#manual').change(function() {
			if(this.checked == true) {
				$('#search-form').show();
			}
			else {
			  $('#search-form').hide();  	
			}
		});

		var themeColor = localStorage.getItem('themeColor');
		var $colorThemeLink = $('<link rel="stylesheet" type="text/css" href="assets/css/green.css" />');
		$('head').append($colorThemeLink);
		if(themeColor) {
			// var $colorThemeLink = $('<link rel="stylesheet" type="text/css" />');
			$colorThemeLink.attr('href', 'assets/css/' + themeColor + '.css'); 
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/' + themeColor + '.css') 
			// );		
			console.log(themeColor);
			// $('head').append($colorThemeLink);		
			// console.log($colorThemeLink);					
		}
		console.log(themeColor);

		$('#green').click(function(){
			localStorage.setItem('themeColor', 'green');
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/green.css') 
			// );			
			$colorThemeLink.attr('href', 'assets/css/green.css'); 		

		});

		$('#yellow').click(function(){
			localStorage.setItem('themeColor', 'yellow');			
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/yellow.css') 
			// );
			$colorThemeLink.attr('href', 'assets/css/yellow.css'); 	
		});

		$('#red').click(function(){
			localStorage.setItem('themeColor', 'red');			
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/red.css') 
			// );
			$colorThemeLink.attr('href', 'assets/css/red.css');
		});		

		$('#blue').click(function(){
			localStorage.setItem('themeColor', 'blue');			
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/blue.css') 
			// );
			$colorThemeLink.attr('href', 'assets/css/blue.css');
		});	

		$('#violet').click(function(){
			localStorage.setItem('themeColor', 'violet');			
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/violet.css') 
			// );
			$colorThemeLink.attr('href', 'assets/css/violet.css');
		});	

		$('#gray').click(function(){
			localStorage.setItem('themeColor', 'gray');			
			// $('head').append( $('<link rel="stylesheet" type="text/css" />')
			// 	.attr('href', 'assets/css/violet.css') 
			// );
			$colorThemeLink.attr('href', 'assets/css/gray.css');
		});					

})(jQuery);
