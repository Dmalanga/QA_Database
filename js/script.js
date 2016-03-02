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
	$("#adg_sprint_27").click(function(){
		$("#main").load("past_sprints/adg_sprint_27.html");
	});
	$("#adg_sprint_26").click(function(){
		$("#main").load("past_sprints/adg_sprint_26.html");
	});
	$("#adg_sprint_25").click(function(){
		$("#main").load("past_sprints/adg_sprint_25.html");
	});
	$("#adg_sprint_24").click(function(){
		$("#main").load("past_sprints/adg_sprint_24.html");
	});
	$("#adg_sprint_23").click(function(){
		$("#main").load("past_sprints/adg_sprint_23.html");
	});
	$("#adg_sprint_22").click(function(){
		$("#main").load("past_sprints/adg_sprint_22.html");
	});
	$("#adg_sprint_21").click(function(){
		$("#main").load("past_sprints/adg_sprint_21.html");
	});
	$("#adg_sprint_20").click(function(){
		$("#main").load("past_sprints/adg_sprint_20.html");
	});
	$("#adg_sprint_19").click(function(){
		$("#main").load("past_sprints/adg_sprint_19.html");
	});
	$("#adg_sprint_18").click(function(){
		$("#main").load("past_sprints/adg_sprint_18.html");
	});
	$("#adg_sprint_17").click(function(){
		$("#main").load("past_sprints/adg_sprint_17.html");
	});
	$("#adg_sprint_16").click(function(){
		$("#main").load("past_sprints/adg_sprint_16.html");
	});
	$("#adg_sprint_15").click(function(){
		$("#main").load("past_sprints/adg_sprint_15.html");
	});
	$("#adg_sprint_14").click(function(){
		$("#main").load("past_sprints/adg_sprint_14.html");
	});
	$("#adg_sprint_13").click(function(){
		$("#main").load("past_sprints/adg_sprint_13.html");
	});
	$("#adg_sprint_12").click(function(){
		$("#main").load("past_sprints/adg_sprint_12.html");
	});
	$("#adg_sprint_11").click(function(){
		$("#main").load("past_sprints/adg_sprint_11.html");
	});
	$("#adg_sprint_10").click(function(){
		$("#main").load("past_sprints/adg_sprint_10.html");
	});
	$("#adg_sprint_9").click(function(){
		$("#main").load("past_sprints/adg_sprint_9.html");
	});
	$("#adg_sprint_8").click(function(){
		$("#main").load("past_sprints/adg_sprint_8.html");
	});
	$("#adg_sprint_7").click(function(){
		$("#main").load("past_sprints/adg_sprint_7.html");
	});
	$("#adg_sprint_5").click(function(){
		$("#main").load("past_sprints/adg_sprint_5.html");
	});
	$("#adg_sprint_4").click(function(){
		$("#main").load("past_sprints/adg_sprint_4.html");
	});
	$("#adg_sprint_3").click(function(){
		$("#main").load("past_sprints/adg_sprint_3.html");
	});
	$("#adg_sprint_2").click(function(){
		$("#main").load("past_sprints/adg_sprint_2.html");
	});
	$("#sprint_56").click(function(){
		$("#main").load("past_sprints/sprint_56.html");
	});
	$("#sprint_55").click(function(){
		$("#main").load("past_sprints/sprint_55.html");
	});
	$("#sprint_54").click(function(){
		$("#main").load("past_sprints/sprint_54.html");
	});
	$("#sprint_53").click(function(){
		$("#main").load("past_sprints/sprint_53.html");
	});
	$("#sprint_52").click(function(){
		$("#main").load("past_sprints/sprint_52.html");
	});
	$("#sprint_51").click(function(){
		$("#main").load("past_sprints/sprint_51.html");
	});
	$("#sprint_50").click(function(){
		$("#main").load("past_sprints/sprint_50.html");
	});

	//Pubs
	$("#301").click(function(){
		$("#main").load("pubs/301_media.html");
	});
	$("#ami").click(function(){
		$("#main").load("pubs/ami.html");
	});
	$("#answers").click(function(){
		$("#main").load("pubs/answers.html");
	});
	$("#axs").click(function(){
		$("#main").load("pubs/axs.html");
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
	$("#digital_trends").click(function(){
		$("#main").load("pubs/digital_trends.html");
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
	$("#fexy").click(function(){
		$("#main").load("pubs/fexy.html");
	});
	$("#force12").click(function(){
		$("#main").load("pubs/force12.html");
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