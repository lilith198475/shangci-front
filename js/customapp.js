
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
			
			$('#ms').change(function() {
				console.log($(this).val());
			}).multipleSelect({
				width: '100%'
			});
			
			$('#ms2').change(function() {
				console.log($(this).val());
			}).multipleSelect({
				width: '100%'
			});
			
			$('#ms3').change(function() {
				console.log($(this).val());
			}).multipleSelect({
				width: '100%'
			});
			
			$('#ms4').change(function() {
				console.log($(this).val());
			}).multipleSelect({
				width: '100%'
			});
		});
		
		$('.lightimg').click(function(){
			var src = $(this).attr("src");
			console.log(src);
			$('.modal-body img').attr("src",src);
			$('#myModal').modal({show:true});
		});
		
		$('.magimg').click(function(){
			
			$(this).magnify();
		});
		
		$('.open-more-filter').click(function()
		{ 
			$(this).text(function(i,old){
				return old=='+' ?  '-' : '+';
			});
		});
			
		$('.more-filter').click(function(event){
					event.preventDefault();
		});
		
		$('.glyph-switch').click(function(event){
					event.preventDefault();
					var $glphy = $(this).children("i");
					$glphy.toggleClass(function(){
						if ($(this).hasClass("glyphicon-triangle-top")){
							$(this).removeClass("glyphicon-triangle-top");
							return "glyphicon-triangle-bottom";
						}else{
							console.log("no");
							$(this).removeClass("glyphicon-triangle-bottom");
							return "glyphicon-triangle-top";
							
						}
						
					});
					
		
					
		});
 


		
		
		