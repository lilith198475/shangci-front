
    	 $(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
		});
		
		
		$('.lightimg').click(function(){
	var src = $(this).attr("src");
	console.log(src);
	$('.modal-body img').attr("src",src);
  	$('#myModal').modal({show:true});
});
