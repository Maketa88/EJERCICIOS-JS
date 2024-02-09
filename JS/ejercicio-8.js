/*Ejercicio 8: Encontrar el máximo y el mínimo de un array
• Crea un array con números.
• Encuentra el valor máximo y mínimo del array.
• Imprime el valor máximo y mínimo.*/

let array =[2,5,7,15,-5,-100,55]
function getMenorMayor (arr){
    let menor= arr[0]
    let mayor= arr [0]
    for (numero of arr){
        menor = menor < numero ? menor:numero
        mayor = mayor > numero ? mayor:numero

    }
    return["el numero mayor de este array es:", mayor,"el numero menor del array es :",menor]
   

}
let numeros=getMenorMayor(array)
console.log (numeros)