/*Ejercicio 11:
Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto*/

// Definimos un array vacío para almacenar los productos
const inventario = [];

// Función para agregar un nuevo producto
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const descripcion = prompt("Ingrese la descripción del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad en stock del producto:"));
    const categoria = prompt("Ingrese la categoría del producto:");

    // Creamos un objeto representando el producto
    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };

    // Agregamos el producto al inventario
    inventario.push(producto);

    console.log("Producto agregado con éxito.");
}

// Función para listar todos los productos
function listarProductos() {
    console.log("=== Productos en inventario ===");
    inventario.forEach(producto => {
        console.log("Nombre:", producto.nombre);
        console.log("Descripción:", producto.descripcion);
        console.log("Precio:", producto.precio);
        console.log("Cantidad en stock:", producto.cantidad);
        console.log("Categoría:", producto.categoria);
        console.log("-----------------------");
    });
}

// Función para buscar un producto por nombre
function buscarProductoPorNombre(nombreBuscado) {
    const productoEncontrado = inventario.find(producto => producto.nombre === nombreBuscado);
    if (productoEncontrado) {
        console.log("=== Producto encontrado ===");
        console.log("Nombre:", productoEncontrado.nombre);
        console.log("Descripción:", productoEncontrado.descripcion);
        console.log("Precio:", productoEncontrado.precio);
        console.log("Cantidad en stock:", productoEncontrado.cantidad);
        console.log("Categoría:", productoEncontrado.categoria);
    } else {
        console.log("No se encontró ningún producto con ese nombre.");
    }
}

// Función para eliminar un producto por nombre
function eliminarProducto(nombreEliminar) {
    const indiceProducto = inventario.findIndex(producto => producto.nombre === nombreEliminar);
    if (indiceProducto !== -1) {
        inventario.splice(indiceProducto, 1);
        console.log("Producto eliminado del inventario.");
    } else {
        console.log("No se encontró ningún producto con ese nombre.");
    }
}

// Función para actualizar la cantidad en stock de un producto
function actualizarCantidad(nombreProducto, nuevaCantidad) {
    const producto = inventario.find(producto => producto.nombre === nombreProducto);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log("Cantidad actualizada correctamente.");
    } else {
        console.log("No se encontró ningún producto con ese nombre.");
    }
}

// Menú de opciones para el usuario
let opcion;
while (opcion !== "6") {
    opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Agregar nuevo producto\n" +
        "2. Listar todos los productos\n" +
        "3. Buscar un producto por nombre\n" +
        "4. Eliminar un producto\n" +
        "5. Actualizar cantidad en stock de un producto\n" +
        "6. Salir"
    );

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            listarProductos();
            break;
        case "3":
            const nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
            buscarProductoPorNombre(nombreBuscar);
            break;
        case "4":
            const nombreEliminar = prompt("Ingrese el nombre del producto a eliminar:");
            eliminarProducto(nombreEliminar);
            break;
        case "5":
            const nombreActualizar = prompt("Ingrese el nombre del producto a actualizar:");
            const nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad en stock:"));
            actualizarCantidad(nombreActualizar, nuevaCantidad);
            break;
        case "6":
            console.log("Saliendo del sistema...");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
}
