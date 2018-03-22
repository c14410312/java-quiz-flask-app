//store the chosen categories
const categories = []


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

	$("#gen-quiz").click(function() {
		query = serialize({cat_list: categories});
		console.log(query);
		window.location.replace($SCRIPT_ROOT + '/quiz' + '?' + query);
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

