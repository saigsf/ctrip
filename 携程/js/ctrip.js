$(function() {
	var $banner=$(".banner");
	var $bSlider=$(".banner_slider ul");
	console.log($banner.width());
	var bWidth=$banner.width();
	var index=0;
	var timer=null;
	function autoPlay() {
		clearInterval(timer);
		timer = setInterval(function() {
			index++;

			$bSlider.animate({
				"left": -bWidth * index
			}, 1000, function() {
				if (index > 5) {
					index = 0;
					$bSlider.css("left", 0);
				}
				
			});
			
			$(".circle li.cur").removeClass("cur");
			$(".circle li").eq(index).addClass("cur");
		}, 2000);
	}
	autoPlay();
	
	
	
	

})