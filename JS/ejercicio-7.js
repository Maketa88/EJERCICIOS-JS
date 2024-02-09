/*Ejercicio 7: Eliminar elementos duplicados de un array
• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.*/

let animales = ["canguro", "canguro", "elefante", "elefante", "ballena"];

let animalesSinDuplicados = animales.filter((animal, indice) => {
    return animales.indexOf(animal) === indice;
});

console.log(animalesSinDuplicados); // Imprimirá: ["canguro", "elefante", "ballena"]
