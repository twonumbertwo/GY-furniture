window.onload=function(){
	
	
	
	
	
	
			    n = 0;


				function q() {
					n++;
					if(n > 4) {
						n = 0;
						$("#likuang").css({
							"margin-left": "0px"
						});
					}
					$("#likuang").animate({
						marginLeft: -1583 * n
					}, 2000);


				}
				time = setInterval(q, 3000);
		

	
}
