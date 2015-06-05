HEADER_HEIGHT = 0.08;

var pageWidth;
var pageHeight;
var headerHeight;

function layoutInit() {
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
		},
		width: function(){
			return headerHeight * (5/2);
		}
	});
	
	$("#menuItems").css({
		left: function(){
			return (pageWidth/2 - $(this).width()/2);
		},
		fontSize: function(){
			return headerHeight * 0.5;
		}
	});
}
