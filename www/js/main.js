window.addEventListener("load", function(){
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var page4=document.getElementById("page4");
	var page5=document.getElementById("page5");
	var page6=document.getElementById("page6");
	var pages = [page2,page3,page4,page5,page6];


	/*page1 elemenets*/
	var cat_head = document.querySelector(".cat_head");
	var ragdoll_title = document.querySelector(".ragdoll_title");
	var frame = document.querySelector(".frame");
	/*page2 elements*/
	var ragdoll_history = document.querySelector(".ragdoll_history");
	var span = document.querySelectorAll(".ragdoll_history span");
	var illustration_intro = document.querySelectorAll(".illustration_intro img");
/*==========================resize event ==========================*/
	window.addEventListener("resize", function(){
		console.log("resizing");
	})
/*==========================end resize ==========================*/


/*==========================arrowL ==========================*/
	$(".arrowL").click(function(){
		var leftDoor = $(this).parent();
		console.log(leftDoor);
		console.log(leftDoor.find(".arrowL"));
		if(leftDoor.css("width") == "20px"){
			leftDoor.css({
				"width": "60%"
			});
			leftDoor.find(".arrowL").css({
				"transform":"rotate(315deg)"
			});
			leftDoor.find("article").fadeIn();
		}else{
			leftDoor.css({
				"width": "20px"
			});
			leftDoor.find(".arrowL").css({
				"transform":"rotate(135deg)"
			});
			leftDoor.find("article").fadeOut();

		}
	})
/*==========================arrowL==========================*/



/*==========================rotate btn ==========================*/
	console.log($('.rotateBtn'));
	$('.rotateBtn').css({
		"cursor": "pointer"
	})
	$('.rotateBtn').click(function(){
		var article = $(this).parent().parent().find("article");
		// console.log($(this).parent().parent().find("article"));
		// console.log(article.css("display"));
		if(article.css("display")=="none"){
			article.css({
				"display": "block"
			})
		}else{
			article.fadeOut("slow")
		}

	})
/*==========================rotate btn ==========================*/

/*======================click navbar menu======================*/
	$(".a").click(function(){
		var temp = $(this);
		// console.log(temp.attr("href"));
		var temp1 = $(temp.attr("href"));
		// console.log(temp1);
		if(temp.attr("href") == "#page2"){
			$("body,html").animate({
				scrollTop: temp1.offset().top-200
			},2000)
		}else{
			$("body,html").animate({
				scrollTop: temp1.offset().top
			},2000)
		}
	});

/*======================click navbar menu======================*/
/*==========================scroll event ==========================*/
	window.addEventListener("scroll", function(ev){
		// console.log(document.body.scrollTop);
		// console.log(document.body.scrollTop-page2.offsetTop);
		if(document.body.scrollTop>(page2.offsetTop/8)){
			ragdoll_title.style.transform = "rotate(-50deg) scale(4)";
			ragdoll_title.style.opacity = "0";
		}else{
			ragdoll_title.style.transform = "inherit";
			ragdoll_title.style.opacity = "1";

		}

		if(document.body.scrollTop>(page2.offsetTop/4)){
			/*page1 elements*/
			cat_head.style.transform = "scale(3) translateY(-130px)";
			cat_head.style.opacity = "0";


			frame.style.transform = "scale(3)";
			frame.style.opacity = "0";

			/*page2 elements*/
			
			for (var i = 0; i < span.length; i++) {
				// console.log(span[i]);
				span[i].style.opacity = 1;
			};
			// ragdoll_history.style.opacity = 1;
		}else{
			/*page1 elements*/
			
			ragdoll_title.style.opacity = "inherit";
			cat_head.style.transform = "inherit";
			cat_head.style.opacity = "inherit";
			frame.style.transform = "inherit";
			frame.style.opacity = "inherit";
			/*page2 elements */
			ragdoll_history.style.opacity="1";

		}

		// console.log("document.body.scrollTop",document.body.scrollTop);
		// console.log("page2.offsetHeight",page3.offsetTop);





/*scroll evet */
		// var requestAnimFrame = (function(){
		//   return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
		// })();
		// var animateScroll = function() {
		//    // increment the time
		//    a += b;
		//    console.log('a', a);
		//    document.documentElement.scrollTop = a;
		//    document.body.parentNode.scrollTop = a;
		//    document.body.scrollTop = a;

		//    // find the value with the quadratic in-out easing function
		//    // var val = Math.easeInOutQuad(currentTime, start, change, duration);
		//    // move the document.body
		//    // move(val);
		//    // do the animation unless its over
		//    if (a < page2.offsetHeight) {
		//      requestAnimFrame(animateScroll);
		//    }else{
		   		
		//    }
		//  };
		//  animateScroll();
/* does not work*/




		// function repeatOften() {
		//   // Do whatever
		//   var s=0;
		//   s+=10;
		//   page1.style.maginTop=s+"px";
		//   console.log("animation");
		//   // requestAnimationFrame(repeatOften);
		// }
		// requestAnimationFrame(repeatOften);
	})
/*==========================scroll event ==========================*/


})