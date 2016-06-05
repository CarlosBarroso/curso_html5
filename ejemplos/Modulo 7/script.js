//visibildiad de variables
debugger;

var variableGlobal = 10;

function nombrefuncion (){
	alert (variableGlobal);
	var variableLocal = 5;
	alert (variableLocal);
}

nombrefuncion();

//alert(variableLocal);

//namespaces
var MyNamespace = {
	funcion1: function (){
		//implementación
	},
	funcion2: function (){
		//implementación
	},
	mensaje: "mensaje de texto",
	count: 42
}
MyNamespace.mensaje="texto modificado";
alert(MyNamespace.mensaje);

//objetos

var objeto1 = new Object();
var objeto2 = [];

objeto1.Propiedad1 = "valor de la pr0piedad";
objeto2.Propiedad2 = "valor de la propiedad";

objeto1.funcion = function (parametro){
	return parametro + 2;
}

alert(objeto1.funcion(30));

//notación literal
var Objeto3 = {
  parametro1 : 3,
  parametro2 : "texto",
  funcionSuma : function (parametro){
	  return parametro + 3;
  }
}

//constructores
var Registro = function (id, nombre){
	this.id = id;
	this.nombre = nombre;
	this.balance = 0;
	this.bGrabar = false;
}

// tomar una instancia
var registro1 = new Registro (1, "ana");

//prototipado

Registro.prototype = {
	grabar : function (parametro){
		this.bGrabar = true;
		this.balance++;
	}
}

// creación de objetos
//Object.create(prototypeObject, propertiesObject);

var Propiedades = {
	bCheck : true,
	Texto :"string"
}
//crea un objeto a partir de otro
var instancia = Object.create( Propiedades);

alert (instancia.Texto);


//Extendiendo objetos
//encapsulación

var Persona = function (nombre, edad) {
	
	var _nombre = nombre;
	var _edad = edad;
	
	this.getNombre = function (){
		return this._nombre;		
	}
	
	this.getEdad = function () {
		return this._edad;
	}
}


//herencia
//1. definir el constructor base
//2. definir el constructor derivado
//3. poner la propiedad prototype de la clase derivada la clase de la que se hereda
//4. asignar el constructor de la clase derivada


//1. base
var Person = function (nombre, edad){
	this.nombre = nombre;
	this.edad = edad;
}

//proptipado del base, los métodos que se quieren heredar
Person.prototype = {
	crecer: function (){
		this.edad++;
	}
}

//2. derivada
var Estudiante = function (nombre, edad, asignatura){
	this.nombre = nombre;
	this.edad = edad;
	this.asignatura = asignatura;
}

//3. implementación de la herencia
Estudiante.prototype = new Person();

//4. asignar el propio construnctor
Estudiante.prototype.constructor = Estudiante;

var estudiante1 = new Estudiante ("ana", 19, "Historia");
estudiante1.crecer();
alert (estudiante1.edad);

//creación del patrón singleton
var persona = (function () {
	//propiedades privadas
	var edad = 25;
	
	function getEdad (){
		return edad;
	}
	
	function crecer(){
		edad++;
	}
	
	return {
		//propiedades publicas que se exponen
		nombre : "Pedro",
		getEdad : getEdad,
		crecer: crecer
	};
})();

alert(persona.nombre);
alert(persona.getEdad());
alert(persona.crecer());
alert(persona.getEdad());