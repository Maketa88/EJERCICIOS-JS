/*Ejercicio 4: Ordenar un array
• Crea un array con números aleatorios.
• Ordena el array de forma ascendente.
• Ordena el array de forma descendente.
• Imprime el array antes y después de ordenarlo.*/

let numeros=[5,85,41,86,21,6,9,105,108,106]
console.log(numeros)
let numeros1 = [5, 85, 41, 86, 21, 6, 9, 105, 108, 106];
numeros.sort((a, b) => a - b);
console.log(numeros); // Imprimirá el array ordenado de forma ascendente
let numeros2 = [5, 85, 41, 86, 21, 6, 9, 105, 108, 106];
numeros.sort((a, b) => b - a);
console.log(numeros); // Imprimirá el array ordenado de forma descendente

