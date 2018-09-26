$(document).ready(function(){

var letters = $("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z");

var top = $(".top");
var bottom = $(".bottom");
var oddBar = $(".bar:odd");
var evenBar = $(".bar:even");


$("body").mouseenter(function () {

    var topEven = top.find(evenBar)
    var botEven = bottom.find(evenBar)
    var topOdd = top.find(oddBar)
    var botOdd = bottom.find(oddBar)

	topEven.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOdd.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	botEven.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	botOdd.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("body").mouseenter(function(){

	var animated = $(":animated")

	if (animated.hasClass("op2", "topCo", "botCo", "topCo2", "botCo2", "topCo3", "botCo3")) {
		animated.removeClass('op2 topCo botCo topCo2 botCo2 topCo3 botCo3');
	} else {
		animated.addClass('op');
	}

});


});