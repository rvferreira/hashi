function setLang(lang){
    language = lang;
    unsetFrame(currentFrame);
    setFrame(currentFrame);
    
    contentSimulator(lang);
    codeLanguageComment(lang);
    legendContent(lang);

    styleCode("code_error");
    styleCode("code_correct");

    contentAbout(lang);

    if (lang == 0) {
        $("#simLink").text("Simulador");
        $("#codLink").text("Códigos");
        $("#abtLink").text("Sobre");
    }
    else if (lang ==1) {
        $("#simLink").text("Simulator");
        $("#codLink").text("Codes");
        $("#abtLink").text("About");
    }

    menuPositioning();
}

function simulatorLink() {	
	setObjectListInvisible(["#code","#about"]);
  //  $("body").css("overflow-y","hidden");
	
}

function aboutLink() {	
	setObjectListInvisible(["#code"]);
	setObjectListVisible(["#about"]);
	$("#about").css("overflow-y","auto");
}

function codeLink() {	
	setObjectListInvisible(["#about"]);
	setObjectListVisible(["#code"]);
	$("#code").css("overflow-y","auto");
}

