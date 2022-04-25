var isWeb;
var isTabl;
var isMobile;

$(document).ready(function(){
	$(".subIntro .h2Cont div").each(function(i) {
		var $li = $(this);
		setTimeout(function() {
		  $li.addClass("active");
		}, i*400); // delay 100 ms
	});
	$(window).resize(function(){
		if(jQuery(window).width() > 1024 ){ //웹
			isWeb = true;
			isMobile = false;
			$(window).resize(resizep);
			resizep();
		}else{ //모바일
			isWeb = false;
			isMobile = true;
			$(window).resize(resizem);
			resizem();
		}
	});
	$(window).resize();

	$(".contTxt").children("div").children("div").each(function(i) {
		var $li = $(this);
		setTimeout(function() {
		  $li.addClass("bhFade");
		}, i*500); // delay 100 ms
	});

	setInterval(function() {
		$(".coun1").fadeIn(1000).fadeOut(1000);
		$(".coun2").fadeIn(1500).fadeOut(1500);
		$(".coun3").fadeIn(1200).fadeOut(1200);
	}, 500);
	setInterval(function() {
		$(".coun4").fadeIn(800).fadeOut(800);
		$(".coun5").fadeIn(2000).fadeOut(2000);
	}, 1000);
	/* 레이어팝업 */
	$(".abBtnPop").each(function(){
		var str=$(this).attr("href");
		$(this).off("click").on("click", function() {
			$(str).fadeIn(300);
		});	
	});
	$(".abclose").off("click").on("click",function() {
		$(this).closest("div.layerPopup").fadeOut(100);
	});
	$(".filter_img a").each(function(){
		var str=$(this).attr("href");
		$(this).off("click").on("click", function(evt) {
			evt.preventDefault();
			$(this).parent().siblings().children("a").removeClass("active");
			$(this).addClass("active");
			$(".f_intro_cont").hide();
			$(str).show();
		});	
	});
	/* 상품상세 이미지 팝업 */
	$(".btn_view").each(function(){
		var str=$(this).attr("href");
		$(this).off("click").on("click", function() {
			$(str).fadeIn(300);
		});	
	});
	/* as_center*/
	$(".mpin").each(function(){
		var str=$(this).children("a").attr("href");
		$(this).off("click").on("click", function() {
			$(this).siblings(".mpin").removeClass("active");
			$(this).addClass("active");
			$(".center_wrap .center_area").hide();
			$(str).show();
			return false;
		});	
	});
	/* faq */
	var interval = setInterval(function() {
		$(".faq_list dt").off("click").on("click",function() {
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				$(this).next("dd").slideUp(300);
			}else{
				$(this).siblings("dt").removeClass("on");
				$(this).siblings("dd").slideUp();
				$(this).addClass("on");
				$(this).next("dd").slideDown(300);
			};
		});
	}, 10)
});

function resizep() {
    $(".contImg").height($(window).height());
    $(".msimg").height($(window).height());
    $(".mscont .outer").height($(window).height());
	$(".slideCont").height($(window).height()).css("padding-top",0);
}
function resizem() {
    $(".mainVisual").height($(window).height());
    $("#videoContents").height($(window).height());
    $("#videoContents").width($(window).height()*1.777);
    $(".slideCont").height($(window).height()/2).css("padding-top",$(window).height()/2);
}

$(function(){
	var _height = window.innerHeight;
	var _width = window.innerWidth;
	var _subtop = $(".subVisual").size() ? $(".subVisual").offset().top : 0;
	$(".btnAreaMc a").each(function(){
		$(".btnAreaMc a").off("click").on("click", function() {
			var _aid=$(this).attr("href");
			$("html, body").animate({ scrollTop: $(_aid).offset().top}, 500);
		});	
	});
	$(window).on("scroll", function(){
		var _ms1 = $("#ms1").size() ? $("#ms1").offset().top : 0;
		var _ms2 = $("#ms2").size() ? $("#ms2").offset().top : 0;
		var _ms3 = $("#ms3").size() ? $("#ms3").offset().top : 0;
		var _ms4 = $("#ms4").size() ? $("#ms4").offset().top : 0;
		var _ms5 = $("#ms5").size() ? $("#ms5").offset().top : 0;
		if($(window).width()>2300){
			if($(window).scrollTop() > 90){
				$(".wrap").addClass("scrolled");
				if($(window).scrollTop() > _ms1/2){
					$("#ms2 .fade1").each(function(i) {
						(function(self) {
							setTimeout(function() {
								$(self).addClass("shown1");
							},(i*300)+300);
						})(this);
					});
					$("#ms2 .fade2").each(function(i) {
						(function(self) {
							setTimeout(function() {
								$(self).addClass("shown2");
							},(i*300)+900);
						})(this);
					});
					if($(window).scrollTop() >  _ms3 - _height/1.5){
						$("#ms3 .fade1").each(function(i) {
							(function(self) {
								setTimeout(function() {
									$(self).addClass("shown1");
								},(i*300));
							})(this);
						});
						$("#ms3 .fade2").each(function(i) {
							(function(self) {
								setTimeout(function() {
									$(self).addClass("shown2");
								},(i*300)+300);
							})(this);
						});
						if($(window).scrollTop() > _ms3 - _height/2){
							$("#ms4 .fade1").each(function(i) {
								(function(self) {
									setTimeout(function() {
										$(self).addClass("shown1");
									},(i*300)+300);
								})(this);
							});
							$("#ms4 .fade2").each(function(i) {
								(function(self) {
									setTimeout(function() {
										$(self).addClass("shown2");
									},(i*300)+900);
								})(this);
							});
							if($(window).scrollTop() > _ms4 - _height/2){
								$("#ms5 .fade1").each(function(i) {
									(function(self) {
										setTimeout(function() {
											$(self).addClass("shown1");
										},(i*300)+300);
									})(this);
								});
								$("#ms5 .fade2").each(function(i) {
									(function(self) {
										setTimeout(function() {
											$(self).addClass("shown2");
										},(i*300)+900);
									})(this);
								});
							}else{
							};
							
						}else{
						}
					}else{
						//$("#ms3 .fade1").removeClass("shown1");
						//$("#ms3 .fade2").removeClass("shown2");
					};
				}else{
					//$("#container .mSection .outer").removeClass("active");
					//$("#ms2 .fade1").removeClass("shown1");
					//$("#ms2 .fade2").removeClass("shown2");
				};
			}else{
				$(".wrap").removeClass("scrolled");;
			};
		
		}else{
			if($(window).scrollTop() > 90){
				$(".wrap").addClass("scrolled");
				if($(window).scrollTop() > _ms1/2){
					$("#ms2 .fade1").each(function(i) {
						(function(self) {
							setTimeout(function() {
								$(self).addClass("shown1");
							},(i*300)+300);
						})(this);
					});
					$("#ms2 .fade2").each(function(i) {
						(function(self) {
							setTimeout(function() {
								$(self).addClass("shown2");
							},(i*300)+900);
						})(this);
					});
					if($(window).scrollTop() >  _ms3 - _height/2){
						$("#ms3 .fade1").each(function(i) {
							(function(self) {
								setTimeout(function() {
									$(self).addClass("shown1");
								},(i*300));
							})(this);
						});
						$("#ms3 .fade2").each(function(i) {
							(function(self) {
								setTimeout(function() {
									$(self).addClass("shown2");
								},(i*300)+300);
							})(this);
						});
						if($(window).scrollTop() > _ms3 + (_height/2)){
							$("#ms4 .fade1").each(function(i) {
								(function(self) {
									setTimeout(function() {
										$(self).addClass("shown1");
									},(i*300)+300);
								})(this);
							});
							$("#ms4 .fade2").each(function(i) {
								(function(self) {
									setTimeout(function() {
										$(self).addClass("shown2");
									},(i*300)+900);
								})(this);
							});
							if($(window).scrollTop() > _ms4 + (_height/2)){
								$("#ms5 .fade1").each(function(i) {
									(function(self) {
										setTimeout(function() {
											$(self).addClass("shown1");
										},(i*300)+300);
									})(this);
								});
								$("#ms5 .fade2").each(function(i) {
									(function(self) {
										setTimeout(function() {
											$(self).addClass("shown2");
										},(i*300)+900);
									})(this);
								});
							}else{
								//$("#ms5 .fade1").removeClass("shown1");
								//$("#ms5 .fade2").removeClass("shown2");
							};
						}else{
						}
					}else{
						//$("#ms3 .fade1").removeClass("shown1");
						//$("#ms3 .fade2").removeClass("shown2");
					};
				}else{
					//$("#container .mSection .outer").removeClass("active");
					//$("#ms2 .fade1").removeClass("shown1");
					//$("#ms2 .fade2").removeClass("shown2");
				};
			}else{
				$(".wrap").removeClass("scrolled");;
			};



		};
		
		var _width = window.innerWidth;
		if(_width<1200){
			$(window).on('load scroll mousewheel', function(){
				$("#header").css('left', -$(window).scrollLeft());
			})
		};
	});
	$(".tabArea>dt").off("click").on("click", function() {
		if($(this).hasClass("on")){}else{
			$(this).siblings("dt").removeClass("on");
			$(this).addClass("on");
		};
	});
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tabCont").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});

	if(!isWeb && isMobile){
		$(window).on("scroll", function(){
			if($(window).scrollTop() > 1){
				$(".wrap").addClass("scrolled");
			}else{
				$(".wrap").removeClass("scrolled");
			};
			var _width = window.innerWidth;
			$(".mainOnly .mSection .outer").removeClass("active");
			//$(".mainOnly .mSection .inner").removeClass("active");
		});
		$(".work .hoverWrap").off("click").on("click", function() {
			$(this).toggleClass("active");
		});
		$("#btnTop").off("click").on("click", function() {
			$(this).addClass("on");
		});
		$("#gnb>li>a").off("click").on("click", function() {
			/*var _aid = $(this).attr("href");
			event.preventDefault();
			if($(this).hasClass("link")){
				$(location).attr("href",_aid);
			}else{
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$(this).next("ul").stop();
					$(this).next("ul").slideUp(200);
				}else{
					$(this).addClass("on");
					$(this).parent("li").siblings("li").children("a").removeClass("on");
					$(this).parent("li").siblings("li").children("ul").slideUp(200);
					$(this).next("ul").stop();
					$(this).next("ul").slideDown(200); 
				};
			};
			*/
		});
		$(".slideCont>li").off("click").on("click", function() {
			if($(this).hasClass("on")){
				$(this).removeClass("on");
			}else{
				$(this).addClass("on");
			};
		});
		$(".subMenu2 .btnSm").off("click").on("click", function() {
			$(this).toggleClass("open");
		});
	}else if(isWeb && !isMobile){
		
		$("#header").hover(
			function(){
				$(this).addClass("active");
				//$(this).children("ul").stop().slideDown(200);
			}, function() {
				$(this).removeClass("active");
				//$(this).children("ul").stop().slideUp(200);
			}
		);
		/*$(".nation .pin").hover(
			function(){
				$(this).parent(".nation").addClass("active");
				//$(this).children("ul").stop().slideDown(200);
			}, function() {
				$(this).parent(".nation").removeClass("active");
				//$(this).children("ul").stop().slideUp(200);
			}
		);*/
		$(window).on("scroll", function(){
			var _ms1 = $("#ms1").size() ? $("#ms1").offset().top : 0;
			var _ms2 = $("#ms2").size() ? $("#ms2").offset().top : 0;
			var _ms3 = $("#ms3").size() ? $("#ms3").offset().top : 0;
			var _ms4 = $("#ms4").size() ? $("#ms4").offset().top : 0;
			var _ms5 = $("#ms5").size() ? $("#ms5").offset().top : 0;
			if($(window).scrollTop() > _ms1/3){
				$("#ms2 .fade1").each(function(i) {
					(function(self) {
						setTimeout(function() {
							$(self).addClass("shown1");
						},(i*300)+300);
					})(this);
				});
				$("#ms2 .fade2").each(function(i) {
					(function(self) {
						setTimeout(function() {
							$(self).addClass("shown2");
						},(i*300)+900);
					})(this);
				});
			};
		});
	};
	$("#footer .btnFm").off("click").on("click", function() {
		$(this).toggleClass("on");
	});
	$(".tabArea dt").off("click").on("click", function() {
		if($(this).hasClass("on")){
		}else{
			$(this).addClass("on");
			$(this).siblings("dt").removeClass("on");
		};
	});
	/* D:20191122 컨텐츠추가시 사용재개
	$(".boardArc dt").off("click").on("click", function() {
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).next("dd").slideUp(300);
		}else{
			$(this).addClass("on");
			$(this).next("dd").slideDown(300);
		};
	});
	*/
	/* D:20191122 컨텐츠 없을때 고정*/
	$(".boardArc dt:first").addClass("on");
	$(".boardArc dt.on").next("dd").show();
	/* //D:20191122 컨텐츠 없을때 고정*/
	$("#btnMnav").off("click").on("click", function() {
		$(this).toggleClass("open");
		$("html").toggleClass("mHidden");
		$("#navigation .inner").css("height",_height);
	});

	$(window).on("scroll", function(){
		if($(window).scrollTop()> _height*3.2){
			$(".mCoun .cncont span").each(function(i) {
				(function(self) {
					setTimeout(function() {
						$(self).addClass("active");
					},(i*800)+800);
				})(this);
			});
			$(".mCoun h3").addClass("active");
		}else{
			$(".mCoun .cncont span").each(function(i) {
				$(this).removeClass("active");
			});
			$(".mCoun h3").removeClass("active");
		};
		/*if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		   $(".mCoun .coun").each(function(i) {
				(function(self) {
					setTimeout(function() {
						$(self).addClass("active");
					},(i*800)+800);
				})(this);
			});
		};*/
		
		/*
		$(".mSection .msimg h3").each(function(index, value) {
			var triggerpoint = $(window).height() * .8 + $(window).scrollTop();
			var counter = $(this).offset().top;
			if (counter <= triggerpoint) {
			  $(this).addClass("bhFade");
			}else{
				//$(this).removeClass("bhFade");
			};
		});
		$(".abFd").each(function(index, value) {
			var triggerpoint = $(window).height() * .8 + $(window).scrollTop();
			var counter = $(this).offset().top;
			if (counter <= triggerpoint) {
			  $(this).addClass("bhFade");
			}else{
				//$(this).removeClass("bhFade");
			};
		});
		$(".abPr1").each(function(index, value) {
			var triggerpoint = $(window).height() * .8 + $(window).scrollTop();
			var counter = $(this).offset().top;
			if (counter <= triggerpoint) {
			  $(this).addClass("bhFade").delay(500* (index + 1)).animate({"right": "0","opacity": "1"}, 1000);
			}else{
				//$(this).removeClass("bhFade");
			};
		});
		$(".abPr2").each(function(index, value) {
			var triggerpoint = $(window).height() * .8 + $(window).scrollTop();
			var counter = $(this).offset().top;
			if (counter <= triggerpoint) {
			  $(this).addClass("bhFade").delay(500* (index + 1)).animate({"right": "0","opacity": "1"}, 1000);
			}else{
				//$(this).removeClass("bhFade");
			};
		});
		$(".abPr3").each(function(index, value) {
			var triggerpoint = $(window).height() * .8 + $(window).scrollTop();
			var counter = $(this).offset().top;
			if (counter <= triggerpoint) {
			  $(this).addClass("bhFade").delay(500* (index + 1)).animate({"right": "0","opacity": "1"}, 1000);
			}else{
				//$(this).removeClass("bhFade");
			};
		});
		*/


		/*if($(window).scrollTop() > $("#header").height()){
			$("#btnTop").fadeIn(200);
		}else if($(window).scrollTop() <= $("#header").height()){
			$("#btnTop").fadeOut(200);
		}
		if($(window).scrollTop() + $(window).height() > $("#footer").offset().top){
			if(isWeb && !isMobile){
				$("#btnTop").css({"position":"absolute", "bottom" : $("#footer").height() + 40});
			}else if(!isWeb && isMobile){
				$("#btnTop").css({"position":"absolute", "bottom" : $("#footer").height() + 20});
			}
		}else{
			if(isWeb && !isMobile){
				$("#btnTop").css({"position":"fixed", "bottom" : 40});
			}else if(!isWeb && isMobile){
				$("#btnTop").css({"position":"fixed", "bottom" : 20});
			};
		};*/
	});
});

function openWin(){
	 $(".dim").show();
};
function goTop(){
	$("html, body").animate({ scrollTop: 0}, 500);
}