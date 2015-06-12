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

	$("#table").css({
		width: function(){
			return (table = pageWidth*(3/10));
		},
		left: function(){
			return (pageWidth-$(this).width())/2;
		},
		top: function(){
			/* metade do complemento do valor escolhido para height */
			return pageHeight*(1.1/10);
		}
	});

	$(".philosopher").css({
		height: function(){
			return(table*0.3);
		},
		left: function(){	
				return (pageWidth*0.5 -$(this).width()/2);
		},
		top: function(){	
				return (table*1.28 -$(this).width()/2);
		}
	});
		$(".left").css({
			left: function(){	
				return ((pageWidth/2-table/2)*0.94-$(this).width()/2);
			}

		});

		$(".right").css({
			left: function(){	
				return (pageWidth/2+table/2)*0.98;
			}
		});
		$(".top").css({
			top: function(){	
				return (table*0.25 -$(this).width()/2);
			}
		});
		
		$(".bottom").css({
			top: function(){	
				return (table*0.95 -$(this).width()/2);
			}
		});

});
