var easingsList = [
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine ",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElasic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];


var moveRight = function(){
    var d = parseInt($("#delay").val());
    var n = 0;
    while (n <= easingsList.length)
    {
        var e = easingsList[n];
        moveBoxRight(n, e, d);
        n++;
    }
}

var moveLeft = function(){
    var d = parseInt($("#delay").val());
    var n = 0;
    while(n <= easingsList.length)
    {
        var e = easingsList[n];
        moveBoxLeft(n, e ,d);
        n++;
    }
}

var moveBoxRight = function(n, easing, duration)
{    var id = "#button" + n.toString();
     var pageWidth = $("body").width();
     var boxWidth = 150;
     $(id).animate({"margin-left" : pageWidth-boxWidth + "px"}, duration, easing);
}

var moveBoxLeft = function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left" : "0px"}, duration, easing); 
}

var showBoxes = function(){
    var selection = parseInt($(".button").val();



var hideBoxes = function(){
    var selection = parseInt($("#jqoption").val())
    if(selection == 0 ){
        $(".button").fadeOut();
    }
    else if(selection == 1){
        $(".button").fadeToggle();
    }
    else if(selection == 2){
        $(".button").slideToggle();
    }
    else if(selection == 3){
        $(".button").slideUp();
    $(".button").animate("visibility: hidden");
}

var toggleBoxes = function(){
    var selection = $("#hideShowButton").html();
    if(selection == "Hide Boxes"){
        hideBoxes();
        $("#hideShowButton").html("Show Boxes");
    }
    else{
        showBoxes();
        $("#hideBoxes").html("Hide Boxes");
    }

}

