//Modulo built-in(incorporados)
//son modulos que puedes usar directamente al trabajar con Node.js (sin instalarlso)
//Muy utilez para realizar tareas comunes al trabajar con Node.js

/*algunos de MODULOS BUILT-IN SON:
-http
-https
-fs(file system)
-os(operating system)
-path
Y muchos mas...

METODO UTILEZ DE CONSOLA:
-console.log()
-console.warn("ocurrio un error") da una pequeña abiertencia de un error
-console.error(new Erro( !Ocurrio un gran error informacion aca¡)) informa de un error con mas informacion
-console.assert()
-console.table()

-console.log(process):
    Provee informacion sobre el proceso de Node que se esta ejecutando
    Tambien puedes tener cierto control sobre el proceso que se ejecuta

-console.log(process.env) 
    env viene de environment que significa en ambiente

process.memoryUsage()
    nos da la informacion de cuanta memoria se esta utilizando

Modulo OS
Contine funcionalidad para obtener informacion del sistema operativo, en el cual se
ejecuta la aplicacion
Este modulo debe ser importado con:
const os = require("os")

    os.type()
    te da informacion del sistema operativo el cual se esta ejucando por ejempo aca seria 
    windows NT
    puede ser linux, mac etc

    os.homedir()
    nos muestra la carpeta principal del disposito o el directorio principal

    os.userInfo()
    nos da informacion del usurio

Modulo timers
Con tiene dunciones que ejecutan codigo luego de un cierto periodo de tiempo
    funciones utiles:
    -setTimeout()
    -setImmediate()
    -setInterval()

setTimeout: sirve para ejecutar codigo luego de un numero especifico de milisegundos
1 segundo = 1000 milisegundos
setTimeout(funcion, retraso, argumento, se pueden agregar mas argumetos separados por coma);
pero siempre los dos primeros argumetos son funcion y el retraso de los argumentos para ejecutarse
*/

function mostrasTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrasTema, 5000, "Node.js");

function suma(a, b){
    console.log(a+b);
}

setTimeout(suma, 2000, 7, 7);

/* setImmediate(funcion, argumento1, argumento2)

    Para ejecutas codigo asincrono en la proxima iteracion del ciclo de
    eventos (lo mas pronto posible)
    se ejecuta a cuando terminen todas la lineas de codigo sincrona para que 
    setTimedieate se ejecute inmediatamente antes que otras lineas asicronas
*/

let f = "a"

/*  setInterval(funcion, intervalo, arg1, arg2)
    para ejecutar codigo un numero de infinito de veces con un retraso especifico de milisegundos



function sumar(a, b){
    console.log(a + b);
}

setInterval(sumar, 1000, 1, 1);
*/

let x = "a"

/* Modulo fs = sistema de archivoz

    modulo que contiene funciones muy util para trabajar con el sistema de archivoz

        Operaciones utiles:
            -Leer               |
            -Modificar          |
            -Copiar             |       Archivo
            -Eliminar           |
            -Cambiar nombre     |
            -Crear carpetas     |

    es un modulo asicrono pero se puede cambiar a sincronoi agregando Sync a una funcion:
    
    fs.rename()      = asincrono 
    fs.renameSync()  = sincrono con Sync no necesitas las funcion flecha
 */

const fs = require("fs");

fs.readFile("index.html", "utf-8", (err, contenido) =>{
        //       1           2       3        4
        // 1. nombre del archivo con la ruta
        // 2. formato en el cual se va leer el archivo utf-8 signica en modo texto imprimiendo todo
        // 3. al generarse un error le damos una accion de codigo, o detemos el programa
        // 4. la informacion de el archivo como se lo hayamos pedido
    if(err){
        console.log(err);
        // podemos poner 
        //throw err; para detener la funcion
        // ya que si da error el programa se va seguir ejecutando
    }
    console.log(contenido);
})

// fs.rename para cambiar el nombre de un archivo

fs.rename("index.html", "nuevoName.html", (err) =>{
    if(err){
        throw err;
    }
    console.log("Nombre cambiado exitosamente")
})

//  fs.appendFile() 

        //agrega contenido al final de un archivo

fs.appendFile("index.js", <p>Hola</p>, (err) =>{
    if(err){
        throw err;
    }
    console.log("Archivo actualizado")
})

//  fs.writeFile cambia por completo el contenido del archivo

fs.writeFile("index.html", "Nuevo_contenido", (err) =>{
    if(err){
        throw err;
    }
    console.log("Archivo modificado")
})

//  Eliminar un archivo

fs.unlink("index.html", (err) => {
    if(err){
        throw err;
    }
    console.log("Archivo eliminado")
})