

$(document).ready(function(){

/*//////////////////////////////////////////////ONE/*/

$("#a-1").one("mouseover", function(){
	
	$("#one-t-bar-2, #one-t-bar-4").animate({
		top: "-=29px",
		height: "45px"
	}, 400);

	$("#one-t-bar-3").animate({
		top: "-=29px",
	}, 400);

	$("#one-b-bar-2, #one-b-bar-4").animate({
		top: "+=23px",
	}, 400);

	$("#one-b-bar-3").animate({
		top: "+=13px",
		height: "45px"
	}, 400);

});

/*//////////////////////////////////////////////TWO/*/

$("#a-2").one("click", function(){

	$("#two-t-bar-2, #two-t-bar-4").animate({
		top: "-=29px",
		height: "45px"
	}, 0);

	$("#two-t-bar-3").animate({
		top: "-=29px",
	}, 0);

	$("#two-b-bar-2, #two-b-bar-4").animate({
		top: "+=23px",
	}, 0);

	$("#two-b-bar-3").animate({
		top: "+=13px",
		height: "45px"
	}, 0);
	
});

/*//////////////////////////////////////////////THREE/*/

$("#a-3").one("mouseover", function(){

	$("#top-3, #bottom-3").animate({
		opacity: 0
	}, 300);

});

/*//////////////////////////////////////////////FOUR/*/

var fourBars = $("#four-t-bar-2-2, #four-t-bar-3-2, #four-b-bar-4-2, #four-t-bar-1, #four-t-bar-2, #four-t-bar-3, #four-t-bar-4, #four-t-bar-5, #four-b-bar-1, #four-b-bar-2, #four-b-bar-3, #four-b-bar-4, #four-b-bar-5");

$("#a-4").on("click", function(){

	fourBars.animate({
		top: "-=100px",
		left: "-=150px"
	}, 0);

});

$("#a-4").off("click", function(){

	fourBars.animate({

	}, 0);

});

/*//////////////////////////////////////////////SIX/*/

var sixBars = $("#six-t-bar-2-2, #six-t-bar-3-2, #six-b-bar-4-2, #six-t-bar-1, #six-t-bar-2, #six-t-bar-3, #six-t-bar-4, #six-t-bar-5, #six-b-bar-1, #six-b-bar-2, #six-b-bar-3, #six-b-bar-4, #six-b-bar-5");

$("#a-6").mouseenter(function(){

		sixBars.animate({
			borderRadius: "15px"
		}, 200);

});

$("#a-6").mouseleave(function(){

	sixBars.animate({
		borderRadius: "0px"
	}, 200);

});

/*//////////////////////////////////////////////SEVEN/*/

var sevBars = $("#sev-t-bar-2-2, #sev-t-bar-3-2, #sev-b-bar-4-2, #sev-t-bar-1, #sev-t-bar-2, #sev-t-bar-3, #sev-t-bar-4, #sev-t-bar-5, #sev-b-bar-1, #sev-b-bar-2, #sev-b-bar-3, #sev-b-bar-4, #sev-b-bar-5");

$("#a-7").on("click", function(){
	
	sevBars.css({
		"filter": "invert(80%)"
	}, 200);

});

$("#a-7").one("click", function(){

	$("#sev-t-bar-2, #sev-t-bar-4").animate({
		top: "-=29px",
		height: "45px"
	}, 150);

	$("#sev-t-bar-3").animate({
		top: "-=29px",
	}, 150);

	$("#sev-b-bar-2, #sev-b-bar-4").animate({
		top: "+=23px",
	}, 150);

	$("#sev-b-bar-3").animate({
		top: "+=13px",
		height: "45px"
	}, 150);
	
});

/*//////////////////////////////////////////////EIGHT/*/

$( function() {
    var state = true;
    $("#a-8").on( "click", function() {
      if ( state ) {
        $( ".bar" ).css({
          "filter": "invert(40%)"
        }, 300);
        $("html").css({
        	"background-color": "#0000ff"
        }, 300 );

      } else {
        $( ".bar" ).css({
          "filter": "invert(0%)"
        }, 300 );
        $("html").css({
        	"background-color": "#ffffff"
        }, 300 );
      }
      state = !state;
    });
  } );

/*//////////////////////////////////////////////NINE/*/

var nineTopBars = $("#nine-t-bar-2-2, #nine-t-bar-3-2, #nine-t-bar-1, #nine-t-bar-2, #nine-t-bar-3, #nine-t-bar-4, #nine-t-bar-5");
var nineBottomBars = $("#nine-b-bar-1, #nine-b-bar-2, #nine-b-bar-3, #nine-b-bar-4, #nine-b-bar-4-2, #nine-b-bar-5");

$(function() {
	var state = true;
	$("#a-9").on("mouseover", function(){
		if (state) {
			nineTopBars.animate({
				top: "-=200px",
				backgroundColor: "#98bf21"
			}, 200);

			nineBottomBars.animate({
				top: "+=200px",
				backgroundColor: "#98bf21"
			}, 200);

		} else {
			nineTopBars.animate({
				top: "+=200px",
				backgroundColor: "#000000"
			}, 200);

			nineBottomBars.animate({
				top: "-=200px",
				backgroundColor: "#a6a6a6"
			}, 200);
		}
		state = !state;
	});
});

/*//////////////////////////////////////////////TEN/*/

var tenTopBars = $("#ten-t-bar-1, #ten-t-bar-2, #ten-t-bar-3, #ten-t-bar-4, #ten-t-bar-5");
var tenBottomBars = $("#ten-b-bar-1, #ten-b-bar-2, #ten-b-bar-3, #ten-b-bar-4, #ten-b-bar-5");
var tenCounters = $("#ten-t-bar-2-2, #ten-t-bar-3-2, #ten-b-bar-4-2");

$(function() {
	var state = true;
	$("#a-10").one("mouseover", function(){
		if (state) {
			tenTopBars.animate({
				opacity: 0
			}, 400);

			tenBottomBars.animate({
				opacity: 0
			}, 400);

		} else {
			tenTopBars.animate({
				opacity: 1
			}, 400);
			
			tenBottomBars.animate({
				opacity: 1
			}, 400);
		}
		state = !state;
	});
});

/*//////////////////////////////////////////////ELEVEN/*/

$(function() {
	var state = true;
	$("#a-11").one("click", function(){
		if (state) {

			$("#ten-t-bar-2, #ten-t-bar-4").animate({
				top: "-=29px",
				height: "45px"
			}, 150);

			$("#ten-t-bar-3").animate({
				top: "-=29px",
			}, 150);

			$("#ten-b-bar-2, #ten-b-bar-4").animate({
				top: "+=23px",
			}, 150);

			$("#ten-b-bar-3").animate({
				top: "+=13px",
				height: "45px"
			}, 150);

			tenTopBars.animate({
				opacity: 1
			}, 400);

			tenBottomBars.animate({
				opacity: 1
			}, 400);

		} else {
			tenTopBars.animate({
				opacity: 0
			}, 400);
			
			tenBottomBars.animate({
				opacity: 0
			}, 400);
		}
		state = !state;
	});
});

/*//////////////////////////////////////////////TWELVE/*/

$(function() {
	var state = true;
	$("#a-12").on("click", function(){
		if (state) {
			$("#twlv-t-bar-1, #twlv-b-bar-5").animate({
				height: "0px"
			}, {
				specialEasinig: {
					height: "easeOutBounce"
				}
			}, 400);

			$("#twlv-t-bar-2-2, #twlv-t-bar-3-2").animate({
				backgroundColor: "#a6a6a6"
			}, 400);

		} else {
			$("#twlv-t-bar-1, #twlv-b-bar-5").animate({
				height: "55px"
			}, 400);

			$("#twlv-t-bar-2-2, #twlv-t-bar-3-2").animate({
				backgroundColor: "#000000"
			}, 400);
		}
		state = !state;
	});
});

/*//////////////////////////////////////////////THIRTEEN/*/

$("#a-13").click(function() {
	alert("boo this button is useless");
});

/*//////////////////////////////////////////////FOURTEEN/*/

var fourtnTopBars = $("#fourtn-t-bar-1, #fourtn-t-bar-2, #fourtn-t-bar-3, #fourtn-t-bar-4, #fourtn-t-bar-5");
var fourtnBottomBars = $("#fourtn-b-bar-1, #fourtn-b-bar-2, #fourtn-b-bar-3, #fourtn-b-bar-4, #fourtn-b-bar-5");
var fourtnCounters = $("#fourtn-t-bar-2-2, #fourtn-t-bar-3-2, #fourtn-b-bar-4-2");
var fourtnBarWidth = "11px";

$("#a-14").on("click", function() {
	fourtnTopBars.outerWidth(fourtnBarWidth);
	fourtnBottomBars.outerWidth(fourtnBarWidth);
});

/*//////////////////////////////////////////////FIFTEEN/*/

var fourtnBarOGWidth = "9px";
var fiftnTopBars = $("#fiftn-t-bar-1, #fiftn-t-bar-2, #fiftn-t-bar-3, #fiftn-t-bar-4, #fiftn-t-bar-5");
var fiftnBottomBars = $("#fiftn-b-bar-1, #fiftn-b-bar-2, #fiftn-b-bar-3, #fiftn-b-bar-4, #fiftn-b-bar-5");
var fiftnCounters = $("#fiftn-t-bar-2-2, #fiftn-t-bar-3-2, #fiftn-b-bar-4-2");


$("#a-15").on("click", function() {
	fourtnTopBars.outerWidth(fourtnBarOGWidth);
	fourtnBottomBars.outerWidth(fourtnBarOGWidth);
	fiftnTopBars.hide();
	fiftnCounters.hide();
});

/*//////////////////////////////////////////////SIXTEEN/*/

var sixtnCounters = $("#sixtn-t-bar-2-2, #sixtn-t-bar-3-2, #sixtn-b-bar-4-2");

$("#a-16").one("mouseover", function (){
	$("#sixtn-t-bar-2").animate({
		top: "-=7px",
		height: "55px"
	});
	$("#sixtn-t-bar-3").animate({
		top: "+=1px",
		height: "55px"
	});
	$("#sixtn-t-bar-4").animate({
		top: "-=8px",
		height: "55px"
	});
	sixtnCounters.animate({
		height: "0px"
	});
	$("#sixtn-b-bar-3").animate({
		top: "-=39px"
	});
	$("#sixtn-b-bar-4").animate({
		top: "+=1px"
	});

});

/*//////////////////////////////////////////////SEVENTEEN/*/

var svntnCounters = $("#svntn-t-bar-2-2, #svntn-t-bar-3-2, #svntn-b-bar-4-2");

$("#a-17").mouseenter(function () {
	svntnCounters.animate({
		backgroundColor: "#98bf21"
	}, 300);
});

$("#a-17").mouseleave(function () {
	svntnCounters.animate({
		backgroundColor: "#000000"
	}, 300);
});

/*//////////////////////////////////////////////EIGHTEEN/*/

$("#a-18").on("click", function () {
	$(this).animate({
		opacity: .7
	});
});

/*//////////////////////////////////////////////TWENTY/*/

$("#a-20").mouseenter(function () {
	$("#twnty-t-bar-1").animate({
		top: "+=10px"
	});
	$("#twnty-t-bar-2").animate({
		top: "-=10px"
	});
	$("#twnty-t-bar-3").animate({
		top: "-=50px"
	});
	$("#twnty-t-bar-4").animate({
		top: "-=150px"
	});
	$("#twnty-t-bar-5").animate({
		top: "-=20px"
	});
	$("#twnty-b-bar-1").animate({
		top: "+=5px"
	});
	$("#twnty-b-bar-2").animate({
		top: "+=20px"
	});
	$("#twnty-b-bar-3").animate({
		top: "-=15px"
	});
	$("#twnty-b-bar-4").animate({
		top: "+=30px"
	});
	$("#twnty-b-bar-5").animate({
		top: "-=50px"
	});
});

/*//////////////////////////////////////////////TWENTY ONE/*/

var twnty1Bars = $("#twnty1-t-bar-2-2, #twnty1-t-bar-3-2, #twnty1-b-bar-4-2, #twnty1-t-bar-1, #twnty1-t-bar-2, #twnty1-t-bar-3, #twnty1-t-bar-4, #twnty1-t-bar-5, #twnty1-b-bar-1, #twnty1-b-bar-2, #twnty1-b-bar-3, #twnty1-b-bar-4, #twnty1-b-bar-5");

$("#a-21").mouseenter(function () {
	twnty1Bars.animate ({
		left: "+=20px"
	}, 300);
	twnty1Bars.animate ({
		top: "-=90px"
	}, 300);
	twnty1Bars.animate ({
		left: "-=50px"
	}, 300);
	twnty1Bars.animate ({
		top: "+=80px"
	}, 300);
})

/*//////////////////////////////////////////////TWENTY TWO/*/

var twnty2Bars = $("#twnty2-t-bar-2-2, #twnty2-t-bar-3-2, #twnty2-b-bar-4-2, #twnty2-t-bar-1, #twnty2-t-bar-2, #twnty2-t-bar-3, #twnty2-t-bar-4, #twnty2-t-bar-5, #twnty2-b-bar-1, #twnty2-b-bar-2, #twnty2-b-bar-3, #twnty2-b-bar-4, #twnty2-b-bar-5");

$("#a-22").on("click", function (){
	
	twnty2Bars.css ({
		"transform": "rotate(20deg)"
	});
});

/*//////////////////////////////////////////////TWENTY THREE/*/

var twnty3TopBars = $("#twnty3-t-bar-2-2, #twnty3-t-bar-3-2, #twnty3-t-bar-1, #twnty3-t-bar-2, #twnty3-t-bar-3, #twnty3-t-bar-4, #twnty3-t-bar-5");
var twnty3BottomBars = $("#twnty3-b-bar-4-2, #twnty3-b-bar-1, #twnty3-b-bar-2, #twnty3-b-bar-3, #twnty3-b-bar-4, #twnty3-b-bar-5");

$("#a-23").mouseenter(function () {
	twnty3TopBars.animate ({
		backgroundColor: "#ffbf80"
	}, 300);
	twnty3BottomBars.animate ({
		backgroundColor: "#99ddff"
	}, 300);
});

$("#a-23").mouseout(function () {
	twnty3TopBars.animate ({
		backgroundColor: "#99ddff"
	}, 300);
	twnty3BottomBars.animate ({
		backgroundColor: "#ffbf80"
	}, 300);
});

/*//////////////////////////////////////////////TWENTY FOUR/*/

var twnty4TopBars = $("#twnty4-t-bar-2-2, #twnty4-t-bar-3-2, #twnty4-t-bar-1, #twnty4-t-bar-2, #twnty4-t-bar-3, #twnty4-t-bar-4, #twnty4-t-bar-5");
var twnty4BottomBars = $("#twnty4-b-bar-4-2, #twnty4-b-bar-1, #twnty4-b-bar-2, #twnty4-b-bar-3, #twnty4-b-bar-4, #twnty4-b-bar-5");

$("#a-24").mouseenter(function () {
	twnty4TopBars.css ({
		"transition": "height",
		"transition-duration": "3s",
		"transition-timing-function": "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
	});
	twnty4BottomBars.css ({
		"transition": "height",
		"transition-duration": "3s",
		"transition-timing-function": "cubic-bezier(0.2, 0.5, 1.0, 0.3)"
	});
});

/*//////////////////////////////////////////////TWENTY FIVE/*/

$("#a-25").mouseenter(function () {
	$("#twnty5-t-bar-1, #twnty5-t-bar-5").animate ({
		borderRadius: "25px",
		top: "-=20px"
	});
	$("#twnty5-b-bar-1, #twnty5-b-bar-5").animate ({
		borderRadius: "25px",
		top: "+=20px"
	});
});

$("#a-25").mouseleave(function () {
	$("#twnty5-t-bar-1, #twnty5-t-bar-5").animate ({
		borderRadius: "0px",
		top: "+=20px"
	});
	$("#twnty5-b-bar-1, #twnty5-b-bar-5").animate ({
		borderRadius: "0px",
		top: "-=20px"
	});
});

/*//////////////////////////////////////////////TWENTY SIX/*/

var twnty6Counters = $("#twnty6-t-bar-2-2, #twnty6-t-bar-3-2, #twnty6-b-bar-4-2");

$("#a-26").mouseenter(function () {
	twnty6Counters.hide ("slow")
});

$("#a-26").mouseleave(function () {
	twnty6Counters.show ("slow")
})

/*//////////////////////////////////////////////TWENTY SEVEN/*/

var twnty7TopBars = $("#twnty7-t-bar-1, #twnty7-t-bar-2, #twnty7-t-bar-3, #twnty7-t-bar-4, #twnty7-t-bar-5");
var twnty7BottomBars = $("#twnty7-b-bar-1, #twnty7-b-bar-2, #twnty7-b-bar-3, #twnty7-b-bar-4, #twnty7-b-bar-5");
var twnty7Counters = $("#twnty7-t-bar-2-2, #twnty7-t-bar-3-2, #twnty7-b-bar-4-2");

$("#a-27").mouseenter(function () {
	twnty7Counters.hide ("fast"),
	$("#hi").show ("fast")
});

$("#a-27").mouseleave(function () {
	twnty7Counters.show ("fast"),
	$("#hi").hide ("fast")
});

/*//////////////////////////////////////////////TWENTY EIGHTEEN/*/

var twnty8TopBars = $("#twnty8-t-bar-2-2, #twnty8-t-bar-3-2, #twnty8-t-bar-1, #twnty8-t-bar-2, #twnty8-t-bar-3, #twnty8-t-bar-4, #twnty8-t-bar-5");
var twnty8BottomBars = $("#twnty8-b-bar-4-2, #twnty8-b-bar-1, #twnty8-b-bar-2, #twnty8-b-bar-3, #twnty8-b-bar-4, #twnty8-b-bar-5");

$("#a-28").mouseenter(function () {
	twnty8TopBars.animate ({
		top: "-=20px",
		left: "-=45px"
	});
	twnty8TopBars.animate ({
		top: "+=60px",
		left: "+=15px"
	});
	twnty8BottomBars.animate ({
		top: "-=20px",
		left: "-=45px"
	});
	twnty8BottomBars.animate ({
		top: "+=60px",
		left: "+=15px"
	});
});

$("#a-28").mouseleave(function () {
	twnty8TopBars.animate ({
		top: "-=60px",
		left: "-=15px"
	});
	twnty8TopBars.animate ({
		top: "+=20px",
		left: "+=45px"
	});
	twnty8BottomBars.animate ({
		top: "-=60px",
		left: "-=15px"
	});
	twnty8BottomBars.animate ({
		top: "+=20px",
		left: "+=45px"
	});
});

/*//////////////////////////////////////////////TWENTY NINE/*/

$("#a-29").on("click", function(){
	
	$("#twnty9-t-bar-2, #twnty9-t-bar-4").animate({
		top: "+=29px",
		height: "55px"
	}, 400);

	$("#twnty9-t-bar-3").animate({
		top: "+=29px",
	}, 400);

	$("#twnty9-b-bar-2, #twnty9-b-bar-4").animate({
		top: "-=23px",
	}, 400);

	$("#twnty9-b-bar-3").animate({
		top: "-=23px",
		height: "55px"
	}, 400);

});

/*//////////////////////////////////////////////THIRTY ONE/*/

$(function() {
   $(window).unload(function() {
      var scrollPosition = $("div#a-31").scrollTop();
      localStorage.setItem("scrollPosition", scrollPosition);
   });
   if(localStorage.scrollPosition) {
      $("div#a-31").scrollTop(localStorage.getItem("scrollPosition"));
   }
});

$(function() {
   $(window).reload(function() {
      var scrollPosition = $("div#a-31").scrollTop();
      localStorage.setItem("scrollPosition", scrollPosition);
   });
   if(localStorage.scrollPosition) {
      $("div#a-31").scrollTop(localStorage.getItem("scrollPosition"));
   }
});

/*//////////////////////////////////////////////THIRTY TWO/*/

$( "#a-32" ).one("mousemove", function( event ) {
  $( this ).position({
    my: "top+2",
    of: event,
    within: ".a",
    collision: "fit"
  });
});

/*//////////////////////////////////////////////THIRTY THREE/*/

$("#a-33").on("mouseenter", function () {
	$("body").animate ({
		backgroundColor: "#000000"
	});
})

$("#a-33").on("mouseleave", function () {
	$("body").animate ({
		backgroundColor: "#ffffff"
	});
})


























});


























