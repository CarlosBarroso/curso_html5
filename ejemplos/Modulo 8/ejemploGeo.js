function myPositionCallbackFunction(posicion){
	
	var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    var accuracy = posicion.coords.accuracy;
    var heading = posicion.coords.heading;
    var speed = posicion.coords.speed;
    var altitude = posicion.coords.altitude;
    var altitudeAccuracy = posicion.coords.altitudeAccuracy;

	alert ("longitud " + longitude + " latitud " + latitude);
	console.log("lognitud " + longitude);
	console.log("latitud " + latitude);
	
	var url = 'http://maps.google.com/maps?q='+latitude+','+longitude;
	window.open(url);
}
function myPositionErrorCallbackFunction(e){}


navigator.geolocation.getCurrentPosition(myPositionCallbackFunction,
myPositionErrorCallbackFunction,
{enableHighAccuracy: true, timeout: 5000} );