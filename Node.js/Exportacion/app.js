//Con esta linea de codigo llamamos o importamos lo que se esta exportando en el madulo saludar
// al llamar require se necesita pasar por parametro la direcion de la carpeta hasta llegar al archivo 
// que necesitamos 
const nombre_llamado = require("./saludar.js");

//tambien para llamar una funcion especifica de el modulo exportador solo hace falta esta sintasis
const { variable } = require("./saludar.js");
//y si queremos exportar varios elementos solo hace falta separar con una como la importacion
//          const { variable, saludar_daniel, despedir_daniel } = require("./saludar.js");

//se llama la propiedad con el nombre definido en el objecto en el modulo principal
console.log(nombre_llamado.saludar_daniel("daniel"));
console.log(nombre_llamado.despedir_daniel("daniel"));
console.log(variable);