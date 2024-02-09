/*Ejercicio 5: Filtrar elementos de un array
• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un 
mensaje)*/

// Crear un array con nombres de personas y sus edades
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 15 },
    { nombre: 'Laura', edad: 14 }
  ];
  
  // Filtrar el array para obtener solo los nombres de las personas mayores de edad
  let mayoresDeEdad = personas.filter(function(persona) {
    return persona.edad >= 18;
  }).map(function(persona) {
    return persona.nombre;
  });
  
  // Imprimir los nombres de las personas que cumplen con el criterio

  console.log(mayoresDeEdad);
  
  // Usar un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento

  mayoresDeEdad.forEach(function(nombre) {
    console.log(nombre + " es mayor de edad.");
  });
  