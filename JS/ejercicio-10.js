/*Ejercicio 10: Convertir un array en un objeto
• Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto*/

// Array con elementos de diferentes tipos
const array = ["nombre", 123, true, { a: 1 }, ["x", "y", "z"]];

// Convertir el array en un objeto
const objeto = array.reduce((acc, elemento, indice) => {
    acc[indice] = elemento;
    return acc;
}, {});

console.log(objeto);
