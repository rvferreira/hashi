var jsonObj;
var currentFrame = 0;
var framesCount;

function setObjectListVisible(objList){
    var arrayLength = objList.length;
    for (var i = 0; i < arrayLength; i++) {
        $("#"+objList[i]).css('display', 'inline');
    }
}

function setObjectListInvisible(objList){
    var arrayLength = objList.length;
    for (var i = 0; i < arrayLength; i++) {
        $("#"+objList[i]).hide();
    }
}

function unsetFrame(index){
    setObjectListVisible(jsonObj.states[index].invisibleElements);
    console.log("Saindo de :" + index);
}

function setFrame(index){
    if (index <= 0){
        currentFrame = 0;
        $("#next").click(function() {
            next();
        });
        $("#prev").off('click');
    }
    else if (index >= (framesCount - 1)){
        currentFrame = framesCount - 1;
        $("#prev").click(function() {
            prev();
        });
        $("#next").off('click');
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
}

function statesInit(){
    $.getJSON( "./states.json", function( json ) {
        jsonObj = json;
        framesCount = jsonObj.states.length;
        setFrame(currentFrame);
    });
}

function next() {
    console.log("printf "+ $("#tb1").width() +" "+$("#tb1").height());
    unsetFrame(currentFrame++);
    setFrame(currentFrame);
}

function prev() {
    unsetFrame(currentFrame--);
    setFrame(currentFrame);
}