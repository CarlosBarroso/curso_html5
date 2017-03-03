debugger;

//ejemplo sincrono
try{
	var request = new XMLHttpRequest();
	var url = "http://www.google.es"
	request.open("GET", url, true);
	//true es síncrono
	//false es asíncrono
	
	if (request.status != 200)
		alert ("error: " + request.status + " - " + request.statusText);
	
	var typeHeader = request.getResponseHeader();
	
	var response;
	
	switch (typeHeader){
		case "text/xml":
			response = request.responseXML;
		break;
		case "text/json":
			response = JSON.parse(request.responseText);
		break;
			response = request.responseText;
		default:
		
	}
} catch (exception){
	alert (exception);
}

//ejemplo asincrono
try{
	var request = new XMLHttpRequest();
	var url = "http://www.google.es"
	request.open("GET", url, false);
	//true es síncrono
	//false es asíncrono
	
	var typeHeader = request.getResponseHeader();
	request.onreadystatechange = function (){
		/*
		readyState
		0 -> not open
		1 -> opened
		2 -> sent a request
		3 -> started to receve a response
		4 -> finish receiving a response
		*/
		var response;
		if (request.readyState ===4){
		
			switch (typeHeader){
				case "text/xml":
					response = request.responseXML;
				break;
				case "text/json":
					response = JSON.parse(request.responseText);
				break;
					response = request.responseText;
				default:
				
			}
		}
	}
} catch (exception){
	alert (exception);
}


// para realizar llamadas post...

request.open("POST", url);
request.send(body); // el body es un objeto serializado

// poner cabeceras
request.setRequestHeader("Content-Type", "application/json");