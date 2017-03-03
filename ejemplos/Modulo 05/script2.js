$.get(url, body, callback);

var response;
$.get('http://xxx...', function(data){
	response = data;
});

//$.post

$.get('http://xxx...', function(data){
	response = data;
}).error (function (){
	alert....
});


$.getJSON(url, body, callback);

$('#id').load(url, body, callback);


//ajax

$.ajax({
	url: 'http://....',
	type: 'POST',
	timeout: 1200,
	dataType: 'JSON',
	data: {
		 	xx: document.formulario.campo1.value, 
			yy: document.formulario.campo2.value
			},
	cache: false,
	async: true
}).done (function (response){
	
}).fail (function (){
	
}).complete(function (){
	
});