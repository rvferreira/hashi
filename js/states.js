var jsonObj;
var currentFrame = 0;
var framesCount;

function setObjectListVisible(objList){
    var arrayLength = objList.length;
    for (var i = 0; i < arrayLength; i++) {
        $(""+objList[i]).css('display', 'inline');
    }
}

function setObjectListInvisible(objList){
    var arrayLength = objList.length;
    for (var i = 0; i < arrayLength; i++) {
        $(""+objList[i]).hide();
    }
}

function unsetFrame(index){
    setObjectListVisible(jsonObj.states[index].invisibleElements);

    if (jsonObj.states[index].highlighted) {
        setObjectListInvisible(["#cover"]);
        $(".focus").remove();
        $("#coverText").empty();
    }
}

function setFrame(index){
    $("#prev").off('click');
    $("#next").off('click');

    if (index <= 0){
        currentFrame = 0;
        $("#next").click(function() {
            next();
        });
    }
    else if (index >= (framesCount - 1)){
        currentFrame = framesCount - 1;
        $("#prev").click(function() {
            prev();
        });
    }
    else {
        $("#prev").click(function() {
            prev();
        });
        $("#next").click(function() {
            next();
        });
    }
    setObjectListInvisible(jsonObj.states[index].invisibleElements);

    if (jsonObj.states[index].highlighted) {
        setObjectListVisible(["#cover"]);
        $(""+jsonObj.states[index].highlightTarget).clone().addClass("focus").appendTo("body");

        var elementHeight = pageHeight * 0.25;
        var proportion = $(""+jsonObj.states[index].highlightTarget).height() / $(""+jsonObj.states[index].highlightTarget).width();

        $(".focus").each(function(index){
            $(this).css({
                top: pageHeight * 0.12,
                left: (pageWidth - elementHeight/proportion)/2,
                "transform":"rotate(0deg)",
                height: elementHeight,
                width: elementHeight/proportion
            });
        });

        $("#coverText").append(jsonObj.states[index].portugueseFrameText);
    }
}

function statesInit(){
    $.getJSON( "./states.json", function( json ) {
        jsonObj = json;
        framesCount = jsonObj.states.length;
        setFrame(currentFrame);
    });
}

function next() {
    unsetFrame(currentFrame++);
    setFrame(currentFrame);
}

function prev() {
    unsetFrame(currentFrame--);
    setFrame(currentFrame);
}