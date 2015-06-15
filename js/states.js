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

$(".focus").each(function(index){
    $(this).css({
        top: pageHeight * 0.12,
        left: (pageWidth - elementHeight/proportion)/2,
        "transform":"rotate(0deg)",
        height: elementHeight,
        width: elementHeight/proportion
    });
});

function setHandsColor(objList){
    var color = [0, 0, 0, 0, 0];
    var handColorList = ["none", "red", "green", "blue"];

    var arrayLength = objList.length;
    for (var i = 0; i < arrayLength; i++) {
        switch (""+objList[i]){
        case ".eating":
            color[0] += 1;
            color[1] += 1;
            color[2] += 1;
            color[3] += 1;
            color[4] += 1;
            break;
        case ".hungry":
            color[0] += 2;
            color[1] += 2;
            color[2] += 2;
            color[3] += 2;
            color[4] += 2;
            break;
        case "#phi1_e": color[0] += 1; break;
        case "#phi2_e": color[1] += 1; break;
        case "#phi3_e": color[2] += 1; break;
        case "#phi4_e": color[3] += 1; break;
        case "#phi5_e": color[4] += 1; break;
        case "#phi1_h": color[0] += 2; break;
        case "#phi2_h": color[1] += 2; break;
        case "#phi3_h": color[2] += 2; break;
        case "#phi4_h": color[3] += 2; break;
        case "#phi5_h": color[4] += 2; break;
                     
        }
    }
    $(".hand").each(function(index){
        $(this).css({"border-color":handColorList[color[index % 5]]})
    });
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
    setHandsColor(jsonObj.states[index].invisibleElements);

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