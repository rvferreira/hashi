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
    console.log("Saindo de :" + index);

    if (jsonObj.states[index].highlighted) {
        setObjectListInvisible(["#cover"]);
        $(""+jsonObj.states[index].highlightTarget).removeClass("focus");
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
    console.log("Para :" + index);

    if (jsonObj.states[index].highlighted) {
        setObjectListVisible(["#cover"]);
        $(""+jsonObj.states[index].highlightTarget).addClass("focus");
        $(".focus:eq(0)").css({
            left: function(){
                return 0;
            }
        });
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