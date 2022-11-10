//					  Prototype js:

function Persona(nombre, apellido){
	this.nombre = nombre || "juan";
	this.apellido = apellido || "niño";
}
Persona.prototype.getNombre = function(){
	return this.nombre + " " + this.apellido;
}

var toni = new Person("Toni", "garca");
var Perro = new Person("Petro", "carpe");
var emi = new Person("emi", "Chequer");

toni.getNombre();
Perro.getNombre();
emi.getNombre();

//  				ES6 y Clases (class):
//
//el es6 o class es una version mejoradara de clase mas limpio
//el codigo, y facil de entender se puede simplificar aun mas.

class Persona{
	constructor(nombre, apellido){
		this.nombre = nombre,


		this.apellido = apellido
	}

	saludar(){
		console.log("Hola!" + this.nombre);
	}
}

var toni = new Persona("Toni", "Garca");
toni.saludar(); // "Hola! Toni"

////tambien una clase puede tomar valores de otra clase

class Empleado extends Persona{
	constructor(nombre, apellido, empleo, sueldo){
		super(nombre, apellido);
		this.empleo = empleo;
		this.sueldo = sueldo;
	}
}

var toni = new Empleado("Toni", "Garca", "Profesor", 100);
toni.saludar();

//super= esta invocando el constructor el cual esta siendo
//llamado para convinarse que seria el extends Persona.
//toni.salidar();= como no esta en Empleado lo busca en el 
//constructor Persona asi compartiendo los valores tambien
//como tomi.getNombre

//			                 Object.create
//El metodo create de los objetos nos permite crear un nuevo
//objeto apartir de un prototype especifico

//creo un objecto con un objeto vacio como proto

var obj = Object.create({});

obj
//Object{}

//creo un objeto a partir e un proto de objeto

var obj = Object.create(Object.prototype);

//que es lo mismo que crear un objeto vacio literal

var obj = {}

			Object.assign
//El metodo assign de los objetos te permite agregar propiedades
//a un objeto pasado por parametro

var obj = {}

//No hace falta guardar el resultado porque los objetos se
//por "referencia"

Object.assign(obj, {nombre:"emi", apellido:"Chedar"});

obj.nombre
	//"emi"

//Herencia en Javascript:

//En js a diferencia de la herencia clasica nos manejamos con
//prototipos, que van a tomar los metodos pasados por sus "padre"
//mediante la Prototype Chain
//Cuando generamos en arreglo nuevo podemos accerder a metodos
//como map p slice gracias a que los heredamos del Objeto Array
//que esta vinculado en la propiedad __proto__ y es el siguiente
//en Prototype Chain
//Nosotros tambien podemos generar nuestros propios constructores
//que de los cuales podemos heredar, creamos un constructor de el
//cual pueda haber variantes

function Persona(nombre, apellido, ciudad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.ciudad = ciudad;
}
Persona.prototype.saludar = function(){
	console.log("Soy " + this.nombre + "de" + this.ciudad);
}

var Emi = new Persona("Emi", "Chedar", "Bueno Aires");

Emi.saludar()
	//"Soy Emi de Buenos Aires"

//Ahora todo alumno de Henry antes de Alumno es una Persona
//asique podriamos decir que un alumno hereda las propiedas de
//una Persona

function Alumno(nombre, apellido, ciudad, curso){//
	//podria copiar las mismas propiedades de Persona
	//aca adentro
	this.nombre = nombre
	this.apellido = apellido
	this.ciudad = ciudad
	this.curso = curso
}

//Constructores Anidados:

//Pero en este caso estariamos repitiendo codigo, y si en un 
//futuro queremos cambiar una propiedad tendria que hacerlo en
//ambos constructores
//Descartemos esta opcion

//lo que nosotros queres es reutilizar las propiedes repetidas

function Alumno(nombre, apellido, ciudad, curso){
	//usaremos nuestro constructor Persona dentro del 
	//de Alumno
	Persona.call(this, nombre, apellido, ciudad);

//vamos a necesitar el call porque queremos que las propiedades
// de Persona, quende en bajo el obejto que van a devover
//luego le paso los valores a Alumno
//finalmente le agrego los punto propios de Aluno

	this,curso = curso;
	this.empresa = "Soy Henry";
}
var toni = new Alumno("Toni","Garca","Tucuman","web full stack");
//ahora si tenemos nuestra instacia creada a partir de ambos 
//constructores
toni.curso
	"web full stack"
toni.apellido
	"Tralice"
toni.saludar();
//	type error... que paso?

//Como podemos ver los metodos de persona no fueron pasados alumnos
//El constructor del __proto__ esta ligado a Alumno y luego al Object 
//Object de JS. pero el metodo saludar esta en el prototype de Personas.
//Nuestro problema es que al llamar a Personas con call en vez de con el 
//metodo new no se esta haciendo ese vinculo en el que, Persona.prototype
//se mete en nuestro Prototypr Chain, y entonces las instacias de alumno no
//acceso a los metodos de Persona
//Vamos a solucionar ese Problema agregando el prototipo los metodos de

//Persona, para esto vamos a usar el metodo Object.create

//Usamso "Object.create" porque esta guardaba e argumento pasado como
//__proto__ del objeto a rotornar

Alumno.prototype = Object.create(Persona.prototype);

//si recuerdan el objeto prototypr siempre tiena una propiedad constructor
//que hacia referencia a la funcion en si, con al

Alumno.prototype.constructor = Alumno

var Franco = new Alumno("Franco","Etcheverrri","Montevideo","Bootcamp");
Franco.saludar();
	//"Soy Franco de Montevideo"

function mayuscula(nombre) {
	//La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
	//ej: Recibe "mario" ----> Devuelve "Mario"
	//Tu código:
	return nombre[0].toUpperCase() + nombre.slice(1);
}