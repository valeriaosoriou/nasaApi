console.log('nasa');

$(document).ready(function(){

//ACCESING KEY FROM JSON FILE
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	

//DROPDOWN MENUS FOR DIFFERENT CHOICES STORED IN HTML LINKS
document.getElementById('submit').addEventListener('click', function(){
    choice = document.getElementById('choice').value;
    console.log(choice);
    displayData(choice);//actual parameter
});

//FUNCTION TO DISPLAY CHOICES
function displayData(choice){
//AJAX
	$.ajax({
	  url : `https://api.nasa.gov/${choice}api_key=${myKey}`,
		type :'GET',
		dataType :'json',
		success:function(data){
			console.log(data);
			

			
			




		},
		error:function(){
			console.log('error');
		}

	});//ajax
}; //document ready

});

