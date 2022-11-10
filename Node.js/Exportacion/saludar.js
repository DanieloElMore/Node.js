function saludar(nombre){
    return (`Hola ${nombre}`);
}

function adios(nombre){
    return (`adios ${nombre}`)
}

const num = 4;
//se utiliza module.exports todo lo que este aca dentro sera exportado a otro modulo que lo resiva

//      var module: {
//          exports: typeof module.exports;
//      }
//          module.exports.nombre_propiedad = saludar;
//          module.exports.nombre_al_exportar = adios;

//o tambien se puede exportar con un objecto 

module.exports = {
    //aca dentro podemos crear el obejecto para exportar mas simple el codigo
    saludar_daniel : saludar,
    despedir_daniel : adios,
    variable : num
};