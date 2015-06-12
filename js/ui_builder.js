HEADER_HEIGHT = 0.08;

var pageWidth;
var pageHeight;
var headerHeight;
var table;

jQuery(document).ready(function($){
	
	pageWidth = window.innerWidth;
	pageHeight = window.innerHeight;
	
	$("#fullpage").css({
		height: function(){
			return pageHeight;
		},
		width: function(){
			return pageWidth;
		}
	});
	
	$("#header").css({
		height: function(){
			headerHeight = $("#fullpage").height() * HEADER_HEIGHT;

			return headerHeight;
		},
		width: function(){
			return $("#fullpage").width();
		}
	});
	
	$("#logo").css({
		height: function(){
			return headerHeight;
		}
	});

	$(".lang_img").css({
		height: function(){
			return headerHeight * (8/10);
			
		}
	});
	
	
	$("#menuItems").css({
		
		fontSize: function(){
			return headerHeight * 0.5;
		},

		left: function(){
			return (pageWidth-$("#menuItems").width())/2;
		}
	});

	$(".philosopher").css({
		height: function(){
			return(pageHeight / 7);
		},
		left: function(){
				return ((pageWidth-$(this).width())/2);
		},
		top: function(){
				return headerHeight * 1.5;
		},
	});

	$("#table").css({
		width: function(){
			return (table = pageWidth*(3/10));
		},
		left: function(){
			return (pageWidth-$(this).width())/2;
		},
		top: function(){
			/* metade do complemento do valor escolhido para height */
			return ((pageHeight-$(this).height())/2) + $(".philosopher").height()*0.3;
		}
	});

	$(".philosopher").css({"transform-origin":""+(50)+"% "+(298)+"%"});
	$("#phi1").css({"transform":"rotate("+0+"deg)"});
	$("#phi2").css({"transform":"rotate("+72+"deg)"});
	$("#phi3").css({"transform":"rotate("+144+"deg)"});
	$("#phi4").css({"transform":"rotate("+216+"deg)"});
	$("#phi5").css({"transform":"rotate("+288+"deg)"});


});
