const pPrecioTotal = document.querySelector ("#precio-total");
const selectCantidad = document.querySelector ("select");
const olCarrito = document.querySelector ("#carrito");

const NOMBRE_PROD_1 = "Playstation 5 ";
const PRECIO_PROD_1 = 500;


let precioTotal = 0;


function agregarProducto() {
    precioTotal =  (PRECIO_PROD_1 * selectCantidad.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);

    olCarrito.innerHTML += `<li> ${NOMBRE_PROD_1} $ ${precioTotal} (${selectCantidad.value}) </li>`;


   }