//store the chosen categories
let categories = []


$("document").ready(function(){

	$(".cat-button").click(function() {
		
		$(this).toggleClass('btn-default btn-success');
		
		value = $(this).text();

		if ($(this).hasClass( "btn-success" )){
			categories.push(value);
		}else{
			categories = categories.filter(item => item !== value);
		}
		
		console.log(categories);
	});
});

