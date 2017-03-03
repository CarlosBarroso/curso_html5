alert ('msg');

//arrays
alert("--arrays--");
var array1 = new Array();
array1.push("elememento");

alert(array1[0]);


var array2 = ["uno","dos","tres"];
alert(array2.length);

var elemento = array2.pop();
alert(array2.length);
alert (elemento);
alert(array2[1]);

//json
alert ("--JSON--");
var objeto = {};
objeto.uno = "1";
objeto.dos = "2";

alert (objeto);
alert (JSON.stringify( objeto));

var objetoString = "{\"uno\":1,\"dos\":2}";
alert (objetoString);
var objetoJSON = JSON.parse(objetoString);
alert ( objetoJSON.uno);