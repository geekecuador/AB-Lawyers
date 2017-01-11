jQuery(document).ready(function() {

	jQuery("#slider1").revolution({
		  
		sliderType : "standard",
		jsFileLocation: "assets/",
		sliderLayout : "auto",
		delay : 3000,
		navigation : {
		
			arrows : {
				enable : true,
				hide_onleave:false
			}
		},
		responsiveLevels : [1240, 1024, 778, 480],
		gridwidth : [1240, 1024, 778, 480],
		gridheight : [720, 650, 750],
	});


	
});

