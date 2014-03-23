
$('.redirect').click( function() {
	$('#toAnimate').animate({
		margin:'auto auto auto -1000px'
		}, 300, function(){													//================ 1st Callback 
			$('.redirect').animate({opacity:0},500,
				function(){													//================ 2nd Callback
					$('section').slideUp(
						function(){				
							$('#favico').toggleClass("pull-right");
							$('#favico').css("width","50px");
							$('#favico').animate({margin:'-220px auto auto 400px'},
								function() {								//================ 3rd callback
									$('body').css('background-color','white');
								}
							);
						});
				});	
		});
});