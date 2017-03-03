
//acceso a elemetnos

alert("--acceso a elementos--");
alert(document.forms[0].txt.value);


alert(document.getElementById("txt").value);

document.forms.formulario.txt.value="to be complete";

alert("--manipulación de elementos--");


var lista = document.getElementById("lista");
var item;
item = document.createElement("li");
item.textContent = "elelemento 1" ;
lista.appendChild(item);

item = document.createElement("li");
item.textContent = "elelemento 2" ;
lista.appendChild(item);

var boton = document.getElementById("cmb3");
boton.addEventListener("click", fnClick);

function fnClick(){
	alert('fnClick');
}
