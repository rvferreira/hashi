
function simulatorLink() {	
	setObjectListInvisible(["#code","#about"]);
	$("body").css("overflow-y","hidden");
}

function aboutLink() {	
	setObjectListInvisible(["#code"]);
	setObjectListVisible(["#about"]);
	$("body").css("overflow-y","hidden");
}

function codeLink() {	
	setObjectListInvisible(["#about"]);
	setObjectListVisible(["#code"]);
	$("body").css("overflow-y","auto");
}

