//store the chosen categories
let categories = []


$("document").ready(function(){

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

	//when the solution button is clicked
	//need to parse string to html to render the tags
	$(function(){
		console.log("clicked solution");
		//get the current string in body
		let str = $('.modal-body').text();
		
		//parse the HTML
		let html = $.parseHTML( str );
		//target the solution body
		let $solutionBody = $('.modal-body');
		$solutionBody.html( html );
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

