$(document).ready(function(){
	$("#previous_sprints").click(function(){
		if ($("#prev_drop").siblings().hasClass("active")){
			($("#prev_drop").siblings().removeClass("active").css("display","none"));
		};

		if ($("#prev_drop").hasClass("active")) {
			$("#prev_drop").slideToggle(500).removeClass("active");
		} else {
			$("#prev_drop").slideToggle(500).addClass("active");
		};
		
	});

	$("#publisher").click(function(){
		if ($("#pubs_drop").siblings().hasClass("active")){
			($("#pubs_drop").siblings().removeClass("active").css("display","none"))
		};

		if ($("#pubs_drop").hasClass("active")) {
			$("#pubs_drop").slideToggle(500).removeClass("active")
		} else {
			$("#pubs_drop").slideToggle(500).addClass("active");
		};

		$("#pubs_drop").mCustomScrollbar();
	});

	$("#consoles").click(function(){
		if ($("#consoles_drop").siblings().hasClass("active")){
			($("#consoles_drop").siblings().removeClass("active").css("display","none"))
		};
		if ($("#consoles_drop").hasClass("active")) {
			$("#consoles_drop").slideToggle(500).removeClass("active")
		} else {
			$("#consoles_drop").slideToggle(500).addClass("active");
		}
	});


	//Current Sprint
	$("#current_sprint").click(function(){
		$("#main").load("index.html #current_main");
	});

	//Previous Sprints
	$("#sprint_53").click(function(){
		$("#main").load("sprint_53.html");
	});
	$("#sprint_52").click(function(){
		$("#main").load("sprint_52.html");
	});
	$("#sprint_51").click(function(){
		$("#main").load("sprint_51.html");
	});
	$("#sprint_50").click(function(){
		$("#main").load("sprint_50.html");
	});

	//Pubs
	$("#ami").click(function(){
		$("#main").load("pubs/ami.html");
	});
	$("#answers").click(function(){
		$("#main").load("pubs/answers.html");
	});
	$("#bauer").click(function(){
		$("#main").load("pubs/bauer.html");
	});
	$("#bonnier").click(function(){
		$("#main").load("pubs/bonnier.html");
	});
	$("#boone").click(function(){
		$("#main").load("pubs/boone.html");
	});
	$("#bravo").click(function(){
		$("#main").load("pubs/bravo.html");
	});
	$("#cpx").click(function(){
		$("#main").load("pubs/cpx.html");
	});
	$("#enotes").click(function(){
		$("#main").load("pubs/enotes.html");
	});
	$("#examiner").click(function(){
		$("#main").load("pubs/examiner.html");
	});
	$("#fanpop").click(function(){
		$("#main").load("pubs/fanpop.html");
	});
	$("#gaycities").click(function(){
		$("#main").load("pubs/gaycities.html");
	});
	$("#here").click(function(){
		$("#main").load("pubs/heremedia.html");
	});
	$("#hutch").click(function(){
		$("#main").load("pubs/hutch.html");
	});
	$("#moguldom").click(function(){
		$("#main").load("pubs/moguldom.html");
	});
	$("#naughty").click(function(){
		$("#main").load("pubs/naughty.html");
	});
	$("#prometheus").click(function(){
		$("#main").load("pubs/prometheus.html");
	});
	$("#pch").click(function(){
		$("#main").load("pubs/pch.html");
	});
	$("#ranker").click(function(){
		$("#main").load("pubs/ranker.html");
	});
	$("#spanfeller").click(function(){
		$("#main").load("pubs/spanfeller.html");
	});
	$("#tcg").click(function(){
		$("#main").load("pubs/tcg.html");
	});
	$("#wired").click(function(){
		$("#main").load("pubs/wired.html");
	});
});