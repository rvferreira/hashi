HEADER_HEIGHT = 0.08;
HASHI_ANGLE_OFFSET = 35;
RHAND_ANGLE_OFFSET = -15;
LHAND_ANGLE_OFFSET = 15;

var pageWidth;
var pageHeight;
var headerHeight;
var table;
var philosopherHeight;

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
	
	menuPositioning();

	philosopherHeight = (pageHeight / 5);
	var philosopherWidth = philosopherHeight * 224 / 300;

	$(".philosopher").css({
		height: function(){
			return philosopherHeight;
		},
		left: function(){
				return ((pageWidth-philosopherWidth)/2);
		},
		top: function(){
				return headerHeight * 1.3;
		},
	});

	var handSize = philosopherHeight * 0.15;
	var handTop = headerHeight * 3.5;

	$(".hand").css({
		height: function(){
			return handSize;
		},
		width: function(){
				return handSize;
		},
		"border-radius": handSize,
		left: (pageWidth-handSize)/2 - 1,
		top: handTop
	});


	$("#legend").css({
		padding: function(){
			return pageWidth*0.02;
		},
		top: function(){
			return pageHeight*0.2;
		},
		right: function(){
			return pageWidth*0.1;
		},
		fontSize: function(){
			return pageWidth*0.01;
		},
	});

	

	$(".hand").data('top', handTop);


	var tableDiameter = (pageHeight*(6/10));

	$("#table").css({
		height: function(){
			return tableDiameter;
		},
		left: function(){
			return (pageWidth-tableDiameter)/2;
		},
		top: function(){
			/* metade do complemento do valor escolhido para height */
			return ((pageHeight-tableDiameter)/2) + philosopherHeight*0.35;
		}
	});

	$("#intro, #end").css({
		height: function(){
			return pageHeight;
		},
		right: function(){
			return 0;
		}
	});	

	$(".title").css({
		fontSize: function(){
			return pageWidth*0.04;
		},
		width: function(){
			return pageWidth*0.6;
		},
		left: function(){
			return (pageWidth - pageWidth*0.37)/2;
		},
		top: function(){
			return pageHeight/5;
		}
	});	

	$("#play").css({
		width: function(){
			return pageWidth*0.05;
		},
		height: function(){
			return pageWidth*0.05;
		},
		left: function(){
			return (pageWidth - pageWidth*0.05)/2;
		},
		top: function(){
			return (pageHeight - pageWidth*0.05)/2;
		},
		padding: function(){
			return pageWidth*0.008;
		},
		backgroundSize: function(){
			return pageWidth*0.05;
		}
	});	

    var tablewareHeight = (pageHeight / 8.8);
    var tablewareWidth = tablewareHeight * 1.0;

	$(".dish").css({
		height: function(){
			return tablewareHeight;
		},	
		left: function(){
				return ((pageWidth-tablewareHeight)/2);
		},
		top: function(){
				return headerHeight * 2.7;
		},
	});

	$(".hashi").css({
        height: function(){
            return tablewareHeight;
        },
        left: function(){
                return ((pageWidth-tablewareHeight/20)/2);
        },
        top: function(){
                return headerHeight * 2.7;
        },
    });

    $("#next, #prev").css({
    	width: function(){
    		return philosopherWidth/2;
    	},
    	height: function(){
    		return philosopherWidth/2;	
    	},
    	marginBottom: function(){
    		return philosopherWidth/14;
    	}
    })
 

    $("#death").css({
    	left: "100%",
    	top: headerHeight * 1.5,
    	width: pageWidth/2,
    });

	$(".death").each(function(index){
		if (index > 0){
			$(this).css({
				width: pageWidth/20,
				left: pageWidth*index/20 + pageWidth/10,
				top: (index % 2) * 50
			});
		}
		else {
			$(this).css({
				width: pageWidth/10,
				left: 0,
				top: 0
			});
		}

	});
	
	var character_photo = pageWidth*0.002;
	$(".img_photo").css({
    	width: character_photo
    });


	$("#about, #about pre").css({
		fontSize: function(){
			return character_photo*5;
		}
	});

    var nav_button_left = pageWidth*(5.1/7);
    $("#prev").css("left",nav_button_left);
    $("#next").css("left",(nav_button_left+(philosopherWidth/2))*1.005);

	setRotationCenter();
	
	$(".phi1, #tb1 > img").css({"transform":"rotate("+0+"deg)"});
	$(".phi2, #tb2 > img").css({"transform":"rotate("+72+"deg)"});
	$(".phi3, #tb3 > img").css({"transform":"rotate("+144+"deg)"});
	$(".phi4, #tb4 > img").css({"transform":"rotate("+216+"deg)"});
	$(".phi5, #tb5 > img").css({"transform":"rotate("+288+"deg)"});


	$("#hs1").css({"transform":"rotate("+(0+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs2").css({"transform":"rotate("+(72+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs3").css({"transform":"rotate("+(144+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs4").css({"transform":"rotate("+(216+HASHI_ANGLE_OFFSET)+"deg)"});
	$("#hs5").css({"transform":"rotate("+(288+HASHI_ANGLE_OFFSET)+"deg)"});

	$("#rhand1").css({"transform":"rotate("+(360+RHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (360+RHAND_ANGLE_OFFSET));
	$("#rhand2").css({"transform":"rotate("+(72+RHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (72+RHAND_ANGLE_OFFSET));
	$("#rhand3").css({"transform":"rotate("+(144+RHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (144+RHAND_ANGLE_OFFSET));
	$("#rhand4").css({"transform":"rotate("+(216+RHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (216+RHAND_ANGLE_OFFSET));
	$("#rhand5").css({"transform":"rotate("+(288+RHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (288+RHAND_ANGLE_OFFSET));

	$("#lhand1").css({"transform":"rotate("+(0+LHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (0+LHAND_ANGLE_OFFSET));
	$("#lhand2").css({"transform":"rotate("+(72+LHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (72+LHAND_ANGLE_OFFSET));
	$("#lhand3").css({"transform":"rotate("+(144+LHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (144+LHAND_ANGLE_OFFSET));
	$("#lhand4").css({"transform":"rotate("+(216+LHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (216+LHAND_ANGLE_OFFSET));
	$("#lhand5").css({"transform":"rotate("+(288+LHAND_ANGLE_OFFSET)+"deg)"}).data('rot', (288+LHAND_ANGLE_OFFSET));


	styleCode("code_error");
	styleCode("code_correct");
});

function setRotationCenter(){
	$(".tableware > img").css({"transform-origin":""+(50)+"% "+(240)+"%"});
	$(".philosopher").css({"transform-origin":""+(50)+"% "+(232)+"%"});
	$(".hand").css({"transform-origin":""+(50)+"% "+(pageHeight/2 - philosopherHeight*0.35*3)+"px"});
}

function menuPositioning(){
	$("#menuItems li").css({

		paddingLeft: function(){
			return pageWidth*(5/100);
		},
		paddingRight: function(){
			return pageWidth*(5/100);
		}
	});

	$("#menuItems").css({

		fontSize: function(){
			return headerHeight * 0.5;
		},
		left: function(){
			return (pageWidth-$("#menuItems").width())/2.2;
		}
	});

	$(".content_menu").css({
		width: function(){
			return pageWidth*0.6;
		},
		left: function (){
			return (pageWidth - pageWidth*0.6)/2;
		},
		marginTop: function(){
			return (pageWidth*0.05);
		},
		padding: function(){
			return (pageWidth*0.01);
		}
	});

	contentAbout(0);
	contentCode();
	contentSimulator(0);
	codeLanguageComment(0);
	legendContent(0)
}
