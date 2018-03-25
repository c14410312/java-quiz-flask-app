//store the chosen categories
let categories = []


$("document").ready(function(){

	$cntr = 1;

	//function to deal with button clicks
	$(".cat-button").click(function() {
		
		$(this).toggleClass('btn-default btn-success');
	
		//gets the value of the current button
		value = $(this).text().trim();

		//if the class of button --> success then push to array
		if ($(this).hasClass( "btn-success" )){
			categories.push(value);
		}else{ //delete it from the array
			categories = categories.filter(item => item !== value);
		}
		
		//console.log(categories);
	});

	//when the generate quiz button is clicked
	$("#gen-quiz").click(function() {
		query = serialize({cat_list: categories});
		console.log(query);
		window.location.replace($SCRIPT_ROOT + '/quiz' + '?' + query);
	});

	//updates the progress bar on the carousel
	$('.carousel').on('slid.bs.carousel', function () {
		let totalItems = $('.carousel-item').length;
		let carouselData = $(this).data('bs.carousel');
		let currIndex = $('.carousel .active').attr('id');
		newWidth = (currIndex/totalItems) * 100;
		$('#progBar').width(newWidth+'%');
	});

	$(document).on("click", "#solution-but", function () {
		let title = $(this).data('title');
    	let ans = $(this).data('answer');
    	$(".modal-title").html( title );
     	$(".modal-body").html( ans );

	});

	$('.carousel').carousel({
    	interval:false,
    	wrap: false
	});

	//when the solution button is clicked
	//need to parse string to html to render the tags
	$(function(){
		//get the current string in body
		let str = $('.modal-body').text();
		
		//parse the HTML
		let html = $.parseHTML( str );
		//target the solution body
		let $solutionBody = $('.modal-body');
		$solutionBody.html( html );

		/*PROGRESS BAR INITIALIZATION*/
		newWidth = ($cntr) / 10;
		$('#progBar').width((newWidth * 100) + "%");
		$cntr++;
	});

});

const serialize = (obj) => {
	let str = [];
	for (let p in obj){
		if (obj.hasOwnProperty(p)) {
			 str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
		return str
	}
}

/*
const navigationVisibility = () => {
	console.log("initialized");
	if($cntr == 1){
		$("#prev-question").hide();
	}
	if($cntr > 1){
		$("#prev-question").show();
	}
}*/