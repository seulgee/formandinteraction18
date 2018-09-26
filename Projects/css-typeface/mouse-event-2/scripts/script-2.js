$(document).ready(function(){

var letters = $("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z");

var top = $(".top");
var bottom = $(".bottom");
var oddBar = $(".bar:odd");
var evenBar = $(".bar:even");
var counters = $(".bar-2");

$("#a").mouseenter(function () {
	var aTop = $("#a").find(top)
	var aBottom = $("#a").find(bottom)
	var topOddA = aTop.find(oddBar)
	var topEvenA = aTop.find(evenBar)
	var bottomOddA = aBottom.find(oddBar)
	var bottomEvenA = aBottom.find(evenBar)

	topEvenA.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddA.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenA.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddA.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#b").mouseenter(function () {
	var bTop = $("#b").find(top)
	var bBottom = $("#b").find(bottom)
	var topOddB = bTop.find(oddBar)
	var topEvenB = bTop.find(evenBar)
	var bottomOddB = bBottom.find(oddBar)
	var bottomEvenB = bBottom.find(evenBar)

	topEvenB.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddB.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenB.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddB.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#c").mouseenter(function () {
	var cTop = $("#c").find(top)
	var cBottom = $("#c").find(bottom)
	var topOddC = cTop.find(oddBar)
	var topEvenC = cTop.find(evenBar)
	var bottomOddC = cBottom.find(oddBar)
	var bottomEvenC = cBottom.find(evenBar)

	topEvenC.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddC.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenC.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddC.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#d").mouseenter(function () {
	var dTop = $("#d").find(top)
	var dBottom = $("#d").find(bottom)
	var topOddD = dTop.find(oddBar)
	var topEvenD = dTop.find(evenBar)
	var bottomOddD = dBottom.find(oddBar)
	var bottomEvenD = dBottom.find(evenBar)

	topEvenD.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddD.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenD.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddD.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#e").mouseenter(function () {
	var eTop = $("#e").find(top)
	var eBottom = $("#e").find(bottom)
	var topOddE = eTop.find(oddBar)
	var topEvenE = eTop.find(evenBar)
	var bottomOddE = eBottom.find(oddBar)
	var bottomEvenE = eBottom.find(evenBar)

	topEvenE.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddE.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenE.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddE.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#f").mouseenter(function () {
	var fTop = $("#f").find(top)
	var fBottom = $("#f").find(bottom)
	var topOddF = fTop.find(oddBar)
	var topEvenF = fTop.find(evenBar)
	var bottomOddF = fBottom.find(oddBar)
	var bottomEvenF = fBottom.find(evenBar)

	topEvenF.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddF.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenF.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddF.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#g").mouseenter(function () {
	var gTop = $("#g").find(top)
	var gBottom = $("#g").find(bottom)
	var topOddG = gTop.find(oddBar)
	var topEvenG = gTop.find(evenBar)
	var bottomOddG = gBottom.find(oddBar)
	var bottomEvenG = gBottom.find(evenBar)

	topEvenG.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddG.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenG.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddG.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#h").mouseenter(function () {
	var hTop = $("#h").find(top)
	var hBottom = $("#h").find(bottom)
	var topOddH = hTop.find(oddBar)
	var topEvenH = hTop.find(evenBar)
	var bottomOddH = hBottom.find(oddBar)
	var bottomEvenH = hBottom.find(evenBar)

	topEvenH.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddH.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenH.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddH.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#i").mouseenter(function () {
	var iTop = $("#i").find(top)
	var iBottom = $("#i").find(bottom)
	var topOddI = iTop.find(oddBar)
	var topEvenI = iTop.find(evenBar)
	var bottomOddI = iBottom.find(oddBar)
	var bottomEvenI = iBottom.find(evenBar)

	topEvenI.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddI.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenI.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddI.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#j").mouseenter(function () {
	var jTop = $("#j").find(top)
	var jBottom = $("#j").find(bottom)
	var topOddJ = jTop.find(oddBar)
	var topEvenJ = jTop.find(evenBar)
	var bottomOddJ = jBottom.find(oddBar)
	var bottomEvenJ = jBottom.find(evenBar)

	topEvenJ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddJ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenJ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddJ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#k").mouseenter(function () {
	var kTop = $("#k").find(top)
	var kBottom = $("#k").find(bottom)
	var topOddK = kTop.find(oddBar)
	var topEvenK = kTop.find(evenBar)
	var bottomOddK = kBottom.find(oddBar)
	var bottomEvenK = kBottom.find(evenBar)

	topEvenK.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddK.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenK.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddK.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#l").mouseenter(function () {
	var lTop = $("#l").find(top)
	var lBottom = $("#l").find(bottom)
	var topOddL = lTop.find(oddBar)
	var topEvenL = lTop.find(evenBar)
	var bottomOddL = lBottom.find(oddBar)
	var bottomEvenL = lBottom.find(evenBar)

	topEvenL.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddL.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenL.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddL.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#m").mouseenter(function () {
	var mTop = $("#m").find(top)
	var mBottom = $("#m").find(bottom)
	var topOddM = mTop.find(oddBar)
	var topEvenM = mTop.find(evenBar)
	var bottomOddM = mBottom.find(oddBar)
	var bottomEvenM = mBottom.find(evenBar)

	topEvenM.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddM.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenM.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddM.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#n").mouseenter(function () {
	var nTop = $("#n").find(top)
	var nBottom = $("#n").find(bottom)
	var topOddN = nTop.find(oddBar)
	var topEvenN = nTop.find(evenBar)
	var bottomOddN = nBottom.find(oddBar)
	var bottomEvenN = nBottom.find(evenBar)

	topEvenN.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddN.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenN.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddN.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#o").mouseenter(function () {
	var oTop = $("#o").find(top)
	var oBottom = $("#o").find(bottom)
	var topOddO = oTop.find(oddBar)
	var topEvenO = oTop.find(evenBar)
	var bottomOddO = oBottom.find(oddBar)
	var bottomEvenO = oBottom.find(evenBar)

	topEvenO.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddO.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenO.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddO.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#p").mouseenter(function () {
	var pTop = $("#p").find(top)
	var pBottom = $("#p").find(bottom)
	var topOddp = pTop.find(oddBar)
	var topEvenp = pTop.find(evenBar)
	var bottomOddp = pBottom.find(oddBar)
	var bottomEvenp = pBottom.find(evenBar)

	topEvenp.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddp.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenp.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddp.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#q").mouseenter(function () {
	var qTop = $("#q").find(top)
	var qBottom = $("#q").find(bottom)
	var topOddQ = qTop.find(oddBar)
	var topEvenQ = qTop.find(evenBar)
	var bottomOddQ = qBottom.find(oddBar)
	var bottomEvenQ = qBottom.find(evenBar)

	topEvenQ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddQ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenQ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddQ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#r").mouseenter(function () {
	var rTop = $("#r").find(top)
	var rBottom = $("#r").find(bottom)
	var topOddR = rTop.find(oddBar)
	var topEvenR = rTop.find(evenBar)
	var bottomOddR = rBottom.find(oddBar)
	var bottomEvenR = rBottom.find(evenBar)

	topEvenR.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddR.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenR.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddR.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#s").mouseenter(function () {
	var sTop = $("#s").find(top)
	var sBottom = $("#s").find(bottom)
	var topOddS = sTop.find(oddBar)
	var topEvenS = sTop.find(evenBar)
	var bottomOddS = sBottom.find(oddBar)
	var bottomEvenS = sBottom.find(evenBar)

	topEvenS.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	topOddS.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenS.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	bottomOddS.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#t").mouseenter(function () {
	var tTop = $("#t").find(top)
	var tBottom = $("#t").find(bottom)
	var topOddT = tTop.find(oddBar)
	var topEvenT = tTop.find(evenBar)
	var bottomOddT = tBottom.find(oddBar)
	var bottomEvenT = tBottom.find(evenBar)

	topEvenT.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	topOddT.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenT.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	bottomOddT.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#u").mouseenter(function () {
	var uTop = $("#u").find(top)
	var uBottom = $("#u").find(bottom)
	var topOddU = uTop.find(oddBar)
	var topEvenU = uTop.find(evenBar)
	var bottomOddU = uBottom.find(oddBar)
	var bottomEvenU = uBottom.find(evenBar)

	topEvenU.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*-1) + "px"
		})
	});
	topOddU.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenU.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*-1) + "px"
		})
	});
	bottomOddU.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#v").mouseenter(function () {
	var vTop = $("#v").find(top)
	var vBottom = $("#v").find(bottom)
	var topOddV = vTop.find(oddBar)
	var topEvenV = vTop.find(evenBar)
	var bottomOddV = vBottom.find(oddBar)
	var bottomEvenV = vBottom.find(evenBar)

	topEvenV.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddV.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenV.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddV.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#w").mouseenter(function () {
	var wTop = $("#w").find(top)
	var wBottom = $("#w").find(bottom)
	var topOddW = wTop.find(oddBar)
	var topEvenW = wTop.find(evenBar)
	var bottomOddW = wBottom.find(oddBar)
	var bottomEvenW = wBottom.find(evenBar)

	topEvenW.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddW.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenW.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddW.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#x").mouseenter(function () {
	var xTop = $("#x").find(top)
	var xBottom = $("#x").find(bottom)
	var topOddX = xTop.find(oddBar)
	var topEvenX = xTop.find(evenBar)
	var bottomOddX = xBottom.find(oddBar)
	var bottomEvenX = xBottom.find(evenBar)

	topEvenX.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	topOddX.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenX.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*70)*-1) + "px"
		})
	});
	bottomOddX.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#y").mouseenter(function () {
	var yTop = $("#y").find(top)
	var yBottom = $("#y").find(bottom)
	var topOddY = yTop.find(oddBar)
	var topEvenY = yTop.find(evenBar)
	var bottomOddY = yBottom.find(oddBar)
	var bottomEvenY = yBottom.find(evenBar)

	topEvenY.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	topOddY.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenY.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	bottomOddY.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

$("#z").mouseenter(function () {
	var zTop = $("#z").find(top)
	var zBottom = $("#z").find(bottom)
	var topOddZ = zTop.find(oddBar)
	var topEvenZ = zTop.find(evenBar)
	var bottomOddZ = zBottom.find(oddBar)
	var bottomEvenZ = zBottom.find(evenBar)

	topOddZ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	topEvenZ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
	bottomEvenZ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*40)*-1) + "px"
		})
	});
	bottomOddZ.each(function (){
		$(this).animate({
			top: "+=" + ((Math.random()*50)*1) + "px"
		})
	});
});

letters.mouseenter(function(){

	var animated = $(":animated")

	if (animated.hasClass("op2", "topCo", "botCo", "topCo2", "botCo2", "topCo3", "botCo3")) {
		animated.removeClass('op2 topCo botCo topCo2 botCo2 topCo3 botCo3');
	} else {
		animated.addClass('op');
	}

});


});



