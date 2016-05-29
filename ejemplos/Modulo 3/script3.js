$(document).ready(function(){
	alert('ready');
	
	
	/*$("button").click(function (){
		alert('button');
	});*/
	
		$("#cmb1").click(function (){
		alert('cmb1');
	});
	
	/*	$(".boton").click(function (){
		alert('boton');
	});*/
	$("#cmb2").click(function (){
		$("#lblUno").addClass("azul");
	});
	
	$("#cmb3").click(function (){
		$("input").val("222");
	});
	
});