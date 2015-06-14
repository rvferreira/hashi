HEADER_HEIGHT = 0.08;
HASHI_ANGLE_OFFSET = 35;

var pageWidth;
var pageHeight;
var headerHeight;
var table;

jQuery(document).ready(function($){

    statesInit();

	pageWidth = window.innerWidth;

	if (window.innerHeight < 400){
		pageHeight = 400;
		$("body").css ("overflow-y", "auto");
	}
	else pageHeight = window.innerHeight;
	
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
			return(pageHeight / 5);
		},
		left: function(){
				return ((pageWidth-$(this).width())/2);
		},
		top: function(){
				return headerHeight * 1.3;
		},
	});

	$("#table").css({
		height: function(){
			return (pageHeight*(6/10));
		},
		left: function(){
			return (pageWidth-$(this).width())/2;
		},
		top: function(){
			/* metade do complemento do valor escolhido para height */
			return ((pageHeight-$(this).height())/2) + $(".philosopher").height()*0.3;
		}
	});

	$(".tableware > img").css({
		height: function(){
			return(pageHeight / 8.8);
		},	
		left: function(){
				return ((pageWidth-$(this).width())/2);
		},
		top: function(){
				return headerHeight * 2.7;
		},
	});

	$(".tableware > img").css({"transform-origin":""+(50)+"% "+(240)+"%"});
	$(".philosopher").css({"transform-origin":""+(50)+"% "+(232)+"%"});
	
	$("#phi1, #tb1 > img").css({"transform":"rotate("+0+"deg)"});
	$("#phi2, #tb2 > img").css({"transform":"rotate("+72+"deg)"});
	$("#phi3, #tb3 > img").css({"transform":"rotate("+144+"deg)"});
	$("#phi4, #tb4 > img").css({"transform":"rotate("+216+"deg)"});
	$("#phi5, #tb1 > img").css({"transform":"rotate("+288+"deg)"});


	$("#hs1").css({"transform":"rotate("+(0+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs2").css({"transform":"rotate("+(72+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs3").css({"transform":"rotate("+(144+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs4").css({"transform":"rotate("+(216+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs5").css({"transform":"rotate("+(288+HASHI_ANGLE_OFFSET)+"deg)"});

});
