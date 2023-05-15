const pPrecioTotal = document.querySelector ("#precio-total");
const selectCantidad = document.querySelector ("#cantidad-productos");
const olCarrito = document.querySelector ("#carrito");
const fieldsetProducto = document.querySelector("#producto-contenedor")

const NOMBRE_PROD_1 = "Playstation 5";
const PRECIO_PROD_1 = 500;

const NOMBRE_PROD_2 = "Nintendo Switch";
const PRECIO_PROD_2 = 700;

let precioProductoActual = PRECIO_PROD_1;
let nombreProductoActual = NOMBRE_PROD_1;

let precioTotal = 0;
let descuento = 0;
let regalo = 0;


function agregarProducto() {
    precioTotal =  (precioProductoActual * selectCantidad.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);

    olCarrito.innerHTML += `<li> ${nombreProductoActual} $ ${precioTotal} (${selectCantidad.value}) </li>`;


   }

   function sigProducto() {
    fieldsetProducto.innerHTML= `
    <img src="https://media.ldlc.com/r1600/ld/products/00/05/95/95/LD0005959596.jpg"
    alt="">
    <p>Nintendo Switch</p>
    <p id="precio-prod">Precio: $700</p>
    `
    precioProductoActual = PRECIO_PROD_2;
    nombreProductoActual = NOMBRE_PROD_2;

   }

