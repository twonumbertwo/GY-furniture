window.onload=function(){
	
		setInterval(function(){
			$("#likuang").animate({
				marginLeft:"-400px"
				
			},1000,function(){
				
			$("img:last").after($("img:first"))
			   $("#likuang").css({
				"margin-left":"0px"
				
			   })
			})
			
			
			
			
			
		},2000)
		
		
		
		
	
	
	
	
	
	
	
}
