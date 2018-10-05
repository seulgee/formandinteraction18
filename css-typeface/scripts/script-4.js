$(document).ready(function(){

var letters = $("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z");

var top = $(".top");
var bottom = $(".bottom");
var oddBar = $(".bar:odd");
var evenBar = $(".bar:even");
var counters = $(".bar-2");

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

/*
$("#backLink").on("click", function(e){
	e.preventDefault();
	$("body").fadeOut(150);
});
*/

var link = $(".caption")
link.on("click", function(e){
	e.preventDefault();
	$("body").fadeOut(170, newpage);
	function newpage(){                            
		window.location = $("a#landing").attr("href")
	};
});

link.mouseover(function (){
	$(this).css("cursor", "pointer")
})

counters.on("click", function(){
	$("#s-t-bar-1").css("top", "311px");
	$("#s-t-bar-2").css("top", "284px");
	$("#s-t-bar-3").css("top", "283px");
	$("#s-t-bar-4").css("top", "284px");
	$("#s-b-bar-1").css("top", "0px");
	$("#s-b-bar-2").css("top", "23px");
	$("#s-b-bar-3").css("top", "23px");
	$("#s-b-bar-4").css("top", "22px");
}, 400)

});