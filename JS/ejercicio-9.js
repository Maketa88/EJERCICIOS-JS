/*Ejercicio 9: Agrupar elementos de un array por una propiedad
• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común.*/

// Array de objetos con una propiedad en común (por ejemplo, color)
const objetos = [
    { id: 1, nombre: 'Objeto 1', color: 'verde' },
    { id: 2, nombre: 'Objeto 2', color: 'blanco' },
    { id: 3, nombre: 'Objeto 3', color: 'rojo' },
    { id: 4, nombre: 'Objeto 4', color: 'negro' },
    { id: 5, nombre: 'Objeto 5', color: 'verde' }
];

// Función para agrupar los elementos por la propiedad especificada
function agruparPorPropiedad(array, propiedad) {
    return array.reduce((resultado, objeto) => {
        // Extraer el valor de la propiedad
        const valorPropiedad = objeto[propiedad];
        
        // Inicializar un nuevo array para este valor de propiedad si no existe
        if (!resultado[valorPropiedad]) {
            resultado[valorPropiedad] = [];
        }
        
        // Agregar el objeto al array correspondiente
        resultado[valorPropiedad].push(objeto);
        
        return resultado;
    }, {});
}

// Agrupar los objetos por el valor de la propiedad 'color'
const objetosAgrupadosPorColor = agruparPorPropiedad(objetos, 'color');

console.log(objetosAgrupadosPorColor);
