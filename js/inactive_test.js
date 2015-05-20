$(document).ready(function(){
	$("#previous_sprints").click(function(){
		$("#prev_drop").siblings().removeClass("active").addClass("inactive");		

		if ($("#prev_drop").hasClass("active")) {
			$("#prev_drop").slideToggle(500).removeClass("active")
		} else {
			$("#prev_drop").slideToggle(500).addClass("active");
		}
		
	});

	$("#publisher").click(function(){
		$("#pubs_drop").siblings().removeClass("active").addClass("inactive");
		if ($("#pubs_drop").hasClass("active")) {
			$("#pubs_drop").slideToggle(500).removeClass("active")
		} else {
			$("#pubs_drop").slideToggle(500).addClass("active");
		}
	});

	$("#consoles").click(function(){
		$("#consoles_drop").siblings().removeClass("active").addClass("inactive");
		if ($("#consoles_drop").hasClass("active")) {
			$("#consoles_drop").slideToggle(500).removeClass("active")
		} else {
			$("#consoles_drop").slideToggle(500).addClass("active");
		}
	});


	//Previous Sprints
	$("#sprint_52").click(function(){
		$("#main").load("sprint_52.html");
	});
	$("#sprint_51").click(function(){
		$("#main").load("sprint_51.html");
	});
	$("#sprint_50").click(function(){
		$("#main").load("sprint_50.html");
	});
});