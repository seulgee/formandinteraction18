$(document).ready(function(){

    var letters = $("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z");
    var counters = $(".bar-2");
    
$(function(){
    setTimeout(function(){
        counters.css("cursor", "pointer");
        var intToggle = setInterval(function(){counters.toggleClass("blink");},500);
        //hello
        counters.on("click", function(){
            clearInterval(intToggle);
            counters.removeClass('blink');
            $('html, body').animate({scrollLeft: $("#e-t-bar-3").offset().left}, 300);
            $(function(){
                $("html").css({
                    "background-color": "#000000"
                }, 1200);
            })

            $(function(){
            //h   
                $("#k-t-bar-1").css("top", "311px", 400).addClass('op2 topCo');
                $("#k-t-bar-2").css({"top": "260px"}, 400).addClass('op2 topCo');
                $("#k-t-bar-3").css({"top": "282px"}, 400).addClass('op2 topCo');
                $("#k-t-bar-4").css({"top": "282px"}, 400).addClass('op2 topCo');
                $("#k-b-bar-1").css({"top": "0px"}, 400).addClass('op2 botCo');
                $("#k-b-bar-2").css({"top": "26px"}, 400).addClass('op2 botCo');
                $("#k-b-bar-3").css({"top": "-16px"}, 400).addClass('op2 botCo');
                $("#k-b-bar-4").css({"top": "26px"}, 400).addClass('op2 botCo');
            //e
                $("#k-t-bar-5").css({"top": "311px"}, 400).addClass('op2 topCo');
                $("#l-t-bar-1").css({"top": "285px"}, 400).addClass('op2 topCo');
                $("#l-t-bar-2").css({"top": "283px"}, 400).addClass('op2 topCo');
                $("#div-e-t-3-2").show().css({"top": "350px"}).addClass('op2 topCo');
                $("#l-t-bar-3").css({"top": "283px"}, 400).addClass('op2 topCo');
                $("#div-e-t-4-2").show().css({"top": "350px"}).addClass('op2 topCo');
                $("#m-t-bar-1").css({"top": "283px"}, 400).addClass('op2 topCo');
                $("#k-b-bar-5").css({"top": "0px"}, 400).addClass('op2 botCo');
                $("#l-b-bar-1").css({"top": "22px"}, 400).addClass('op2 botCo');
                $("#l-b-bar-2").css({"top": "23px"}, 400).addClass('op2 botCo');
                $("#div-e-b-3-2").show().css({"top": "368px"}, 400).addClass('op2 botCo');
                $("#l-b-bar-3").css({"top": "23px"}, 400).addClass('op2 botCo');
                $("#div-e-b-4-2").show().css({"top": "368px"}, 400).addClass('op2 botCo');
                $("#m-b-bar-1").css({"top": "22px"}, 400).addClass('op2 botCo');
                $("#div-e-b-5-2").show().css({"top": "368px"}, 400).addClass('op2 botCo');
            //l
                $("#m-t-bar-2").css({"top": "311px"}, 400).addClass('op2 topCo');
                $("#m-t-bar-3").css({"top": "262px"}, 400).addClass('op2 topCo');
                $("#m-t-bar-4").css({"top": "327px"}, 400).addClass('op2 topCo');
                $("#m-b-bar-2").css({"top": "0px"}, 400).addClass('op2 botCo');
                $("#m-b-bar-3").css({"top": "23px"}, 400).addClass('op2 botCo');
                $("#m-b-bar-4").css({"top": "24px"}, 400).addClass('op2 botCo');
            //l
                $("#m-t-bar-5").css({"top": "311px"}, 400).addClass('op2 topCo');
                $("#m-t-bar-6").css({"top": "262px"}, 400).addClass('op2 topCo');
                $("#n-t-bar-1").css({"top": "327px"}, 400).addClass('op2 topCo');
                $("#m-b-bar-5").css({"top": "0px"}, 400).addClass('op2 botCo');
                $("#m-b-bar-6").css({"top": "23px"}, 400).addClass('op2 botCo');
                $("#n-b-bar-1").css({"top": "24px"}, 400).addClass('op2 botCo');
            //o
                $("#n-t-bar-2").css({"top": "311px"}, 400).addClass('op2 topCo');
                $("#n-t-bar-3").css({"top": "290px"}, 400).addClass('op2 topCo');
                $("#n-t-bar-4").css({"top": "285px"}, 400).addClass('op2 topCo');
                $("#o-t-bar-1").css({"top": "283px"}, 400).addClass('op2 topCo');
                $("#div-o-t-4-2").show().css({"top": "350px"}, 400).addClass('op2 topCo');
                $("#o-t-bar-2").css({"top": "290px"}, 400).addClass('op2 topCo');
                $("#o-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo');
                $("#n-b-bar-2").css({"top": "0px"}, 400).addClass('op2 botCo');
                $("#n-b-bar-3").css({"top": "16px"}, 400).addClass('op2 botCo');
                $("#n-b-bar-4").css({"top": "21px"}, 400).addClass('op2 botCo');
                $("#div-o-b-3-2").show().css({"top": "353px"}, 400).addClass('op2 botCo');
                $("#o-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo');
                $("#o-b-bar-2").css({"top": "16px"}, 400).addClass('op2 botCo');
                $("#o-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo');
            
            }, {once: true, } );
    
            $(function(){
                
                    setTimeout(function (){
                        var intToggle2 = setInterval(function(){counters.toggleClass("blink2");},500);
                        counters.on("click", function(){
                            clearInterval(intToggle2);
                            counters.removeClass("blink2");
                            //honey
                            $(function (){
                                //prev
                                var prev = $("#div-e-t-3-2, #div-e-t-4-2, #div-e-b-3-2, #div-e-b-4-2, #div-e-b-5-2, #div-o-t-4-2, #div-o-b-3-2");
                                prev.hide();
                                //h
                                $("#j-t-bar-2").css("top", "311px", 400).addClass('op2 topCo2');
                                $("#j-t-bar-3").css("top", "260px", 400).addClass('op2 topCo2');
                                $("#k-t-bar-1").css({"top": "282px"}, 400).addClass('op2 topCo2');
                                $("#k-t-bar-2").css({"top": "282px"}, 400).addClass('op2 topCo2');
                                $("#j-b-bar-2").css("top", "0px", 400).addClass('op2 botCo2');
                                $("#j-b-bar-3").css("top", "26px", 400).addClass('op2 botCo2');
                                $("#k-b-bar-1").css({"top": "-16px"}, 400).addClass('op2 botCo2');
                                $("#k-b-bar-2").css({"top": "26px"}, 400).addClass('op2 botCo2');
                                //o
                                $("#k-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#k-t-bar-4").css({"top": "290px"}, 400).addClass('op2 topCo2');
                                $("#k-t-bar-5").css({"top": "285px"}, 400).addClass('op2 topCo2');
                                $("#l-t-bar-1").css({"top": "283px"}, 400).addClass('op2 topCo2');
                                $("#div2-o-t-4-2").show().css({"top": "350px"}).addClass('op2 topCo2');
                                $("#l-t-bar-2").css({"top": "290px"}, 400).addClass('op2 topCo2');
                                $("#k-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo2');
                                $("#k-b-bar-4").css({"top": "16px"}, 400).addClass('op2 botCo2');
                                $("#k-b-bar-5").css({"top": "21px"}, 400).addClass('op2 botCo2');
                                $("#div2-o-b-3-2").show().css({"top": "353px"}).addClass('op2 botCo2');
                                $("#l-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo2');
                                $("#l-b-bar-2").css({"top": "16px"}, 400).addClass('op2 botCo2');
                                //n
                                $("#l-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#m-t-bar-1").css({"top": "285px"}, 400).addClass('op2 topCo2');
                                $("#m-t-bar-2").css({"top": "283px"}, 400).addClass('op2 topCo2');
                                $("#m-t-bar-3").css({"top": "284px"}, 400).addClass('op2 topCo2');
                                $("#l-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo2');
                                $("#m-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo2');
                                $("#m-b-bar-2").css({"top": "-16px"}, 400).addClass('op2 botCo2');
                                $("#m-b-bar-3").css({"top": "24px"}, 400).addClass('op2 botCo2');
                                //e
                                $("#m-t-bar-4").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#m-t-bar-5").css({"top": "285px"}, 400).addClass('op2 topCo2');
                                $("#m-t-bar-6").css({"top": "283px"}, 400).addClass('op2 topCo2');
                                $("#div2-e-t-3-2").show().css({"top": "350px"}).addClass('op2 topCo2');
                                $("#n-t-bar-1").css({"top": "283px"}, 400).addClass('op2 topCo2');
                                $("#div2-e-t-4-2").show().css({"top": "350px"}).addClass('op2 topCo2');
                                $("#n-t-bar-2").css({"top": "285px"}, 400).addClass('op2 topCo2');
                                $("#m-b-bar-4").css({"top": "0px"}, 400).addClass('op2 botCo2');
                                $("#m-b-bar-5").css({"top": "22px"}, 400).addClass('op2 botCo2');
                                $("#m-b-bar-6").css({"top": "23px"}, 400).addClass('op2 botCo2');
                                $("#div2-e-b-3-2").show().css({"top": "368px"}).addClass('op2 botCo2');
                                $("#n-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo2');
                                $("#div2-e-b-4-2").show().css({"top": "368px"}).addClass('op2 botCo2');
                                $("#n-b-bar-2").css({"top": "22px"}, 400).addClass('op2 botCo2');
                                $("#div2-e-b-5-2").show().css({"top": "368px"}).addClass('op2 botCo2');
                                //y
                                $("#n-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#n-t-bar-4").css({"top": "284px"}, 400).addClass('op2 topCo2');
                                $("#o-t-bar-1").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#o-t-bar-2").css({"top": "293px"}, 400).addClass('op2 topCo2');
                                $("#o-t-bar-3").css({"top": "284px"}, 400).addClass('op2 topCo2');
                                $("#o-t-bar-4").css({"top": "311px"}, 400).addClass('op2 topCo2');
                                $("#n-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo2');
                                $("#n-b-bar-4").css({"top": "45px"}, 400).addClass('op2 botCo2');
                                $("#div2-y-b-2-2").show().css({"top": "372px"}).addClass('op2 botCo2');
                                $("#o-b-bar-1").css({"top": "39px"}, 400).addClass('op2 botCo2');
                                $("#o-b-bar-2").css({"top": "21px"}, 400).addClass('op2 botCo2');
                                $("#o-b-bar-3").css({"top": "-3px"}, 400).addClass('op2 botCo2');
                                $("#o-b-bar-4").css({"top": "0px"}, 400).addClass('op2 botCo2');
                                
                            }, {once: true,});
    
                            $(function (){
    
                                    setTimeout(function (){
                                        var intToggle3 = setInterval(function(){counters.toggleClass("blink3");},500);
                                        counters.on("click", function(){
                                            clearInterval(intToggle3);
                                            counters.removeClass("blink3");
                                            //bye
                                            $(function (){
                                            var prev2 = $("#div2-o-t-4-2, #div2-o-b-3-2, #div2-e-t-3-2, #div2-e-t-4-2, #div2-e-b-3-2, #div2-e-b-4-2, #div2-e-b-5-2, #div2-y-b-2-2");
                                            prev2.hide();
    
                                            $(function (){
                                                $("#j-t-bar-2, #j-t-bar-3, #k-t-bar-1, #k-t-bar-2, #j-b-bar-2, #j-b-bar-3, #k-b-bar-1, #k-b-bar-2, #o-t-bar-1, #o-t-bar-2, #o-t-bar-2, #o-t-bar-3, #o-t-bar-4, #o-b-bar-1, #o-b-bar-2, #o-b-bar-3, #o-b-bar-4")
                                                    .removeClass('op2 topCo botCo topCo2 botCo2')
                                            });
                                
                                            //b
                                            $("#k-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo3');
                                            $("#k-t-bar-4").css({"top": "262px"}, 400).addClass('op2 topCo3');
                                            $("#k-t-bar-5").css({"top": "282px"}, 400).addClass('op2 topCo3');
                                            $("#l-t-bar-1").css({"top": "282px"}, 400).addClass('op2 topCo3');
                                            $("#l-t-bar-2").css({"top": "286px"}, 400).addClass('op2 topCo3');
                                            $("#k-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo3');
                                            $("#div3-b-b-3-2").show().css({"top": "350px"}).addClass('op2 botCo3');
                                            $("#k-b-bar-4").css({"top": "23px"}, 400).addClass('op2 botCo3');
                                            $("#div3-b-b-4-2").show().css({"top": "355px"}).addClass('op2 botCo3');
                                            $("#k-b-bar-5").css({"top": "25px"}, 400).addClass('op2 botCo3');
                                            $("#l-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo3');
                                            $("#l-b-bar-2").css({"top": "20px"}, 400).addClass('op2 botCo3');
                                            //y
                                            $("#l-t-bar-3").css({"top": "311px"}, 400).addClass('op2 topCo3');
                                            $("#m-t-bar-1").css({"top": "284px"}, 400).addClass('op2 topCo3');
                                            $("#m-t-bar-2").css({"top": "311px"}, 400).addClass('op2 topCo3');
                                            $("#m-t-bar-3").css({"top": "293px"}, 400).addClass('op2 topCo3');
                                            $("#m-t-bar-4").css({"top": "284px"}, 400).addClass('op2 topCo3');
                                            $("#l-b-bar-3").css({"top": "0px"}, 400).addClass('op2 botCo3');
                                            $("#m-b-bar-1").css({"top": "45px"}, 400).addClass('op2 botCo3');
                                            $("#m-b-bar-2").css({"top": "39px"}, 400).addClass('op2 botCo3');
                                            $("#div3-y-b-2-2").show().css({"top": "372px"}).addClass('op2 botCo3');
                                            $("#m-b-bar-3").css({"top": "21px"}, 400).addClass('op2 botCo3');
                                            $("#m-b-bar-4").css({"top": "-3px"}, 400).addClass('op2 botCo3');   
                                            //e
                                            $("#m-t-bar-5").css({"top": "311px"}, 400).addClass('op2 topCo3');
                                            $("#m-t-bar-6").css({"top": "285px"}, 400).addClass('op2 topCo3');
                                            $("#n-t-bar-1").css({"top": "283px"}, 400).addClass('op2 topCo3');
                                            $("#div3-e-t-3-2").show().css({"top": "350px"}).addClass('op2 topCo3');
                                            $("#n-t-bar-2").css({"top": "283px"}, 400).addClass('op2 topCo3');
                                            $("#div3-e-t-4-2").show().css({"top": "350px"}).addClass('op2 topCo3');
                                            $("#n-t-bar-3").css({"top": "285px"}, 400).addClass('op2 topCo3');
                                            $("#n-t-bar-4").css({"top": "311px"}, 400).addClass('op2 topCo3');
                                            $("#m-b-bar-5").css({"top": "0px"}, 400).addClass('op2 botCo3');
                                            $("#m-b-bar-6").css({"top": "22px"}, 400).addClass('op2 botCo3');
                                            $("#n-b-bar-1").css({"top": "23px"}, 400).addClass('op2 botCo3');
                                            $("#div3-e-b-3-2").show().css({"top": "368px"}).addClass('op2 botCo3');
                                            $("#n-b-bar-2").css({"top": "23px"}, 400).addClass('op2 botCo3');
                                            $("#div3-e-b-4-2").show().css({"top": "368px"}).addClass('op2 botCo3');
                                            $("#n-b-bar-3").css({"top": "22px"}, 400).addClass('op2 botCo3');
                                            $("#div3-e-b-5-2").show().css({"top": "368px"}).addClass('op2 botCo3');
                                            $("#n-b-bar-4").css({"top": "0px"}, 400).addClass('op2 botCo3');
                                            
                                            }, {once: true,});
    
                                            $(function (){
                                                setTimeout(function (){
                                                    var intToggle4 = setInterval(function(){counters.toggleClass("blink4");},500);
                                                    counters.on("click", function(e){
                                                        clearInterval(intToggle3);
                                                        counters.removeClass("blink3");
                                                        var bars = $(".bar")
                                                        if (bars.hasClass("topCo3", "botCo3")){
                                                            bars.removeClass('topCo3 botCo3')
                                                        } else {}
                                                        e.preventDefault();
                                                        $("body").fadeOut(170, newpage);
                                                        function newpage(){                            
                                                            window.location = $("a#colophon").attr("href")
                                                        };
                                                    });
                                            }, 1200);
                                        }).end();
                                        });
                                    }, 1200);
                            }).end();
                        });
                    }, 1200);
                }).end();
                });
            }, 8300);
        }).end();
    
    });