const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector("#cantidad-productos");
const olCarrito = document.querySelector("#carrito");
const fieldsetProducto = document.querySelector("#producto-contenedor");

const NOMBRE_PROD_1 = "Playstation 5";
const PRECIO_PROD_1 = 500;
const PROD_1_DESCUENTO_1 = 10;
const PROD_1_DESCUENTO_2 = 25;

const NOMBRE_PROD_2 = "Nintendo Switch";
const PRECIO_PROD_2 = 700;
const PROD_2_DESCUENTO_1 = 15;
const PROD_2_DESCUENTO_2 = 30;
const PROD_2_CANT_REGALO = 1;

let precioProductoActual = PRECIO_PROD_1;
let nombreProductoActual = NOMBRE_PROD_1;

let precioTotal = 0;

function calcularDescuento(cantidad, descuentoPorcentaje) {
    const precioUnitario = precioProductoActual;
    const precioDescuento = precioUnitario * (1 - descuentoPorcentaje / 100);
    precioTotal += cantidad * precioDescuento;
  }

function aplicarDescuento(descuentoPorcentaje, cantidad) {
  if (descuentoPorcentaje === 100) {
    precioTotal += calcularDescuento(cantidad - 1, descuentoPorcentaje);
    olCarrito.innerHTML += `<li>${nombreProductoActual} ($${precioProductoActual}) x ${cantidad - 1} + 1 GRATIS</li>`;
  } else {
    precioTotal += calcularDescuento(cantidad, descuentoPorcentaje);
    olCarrito.innerHTML += `<li>${nombreProductoActual} ($${precioProductoActual}) x ${cantidad} </li>`;
  }
  pPrecioTotal.innerHTML = "Total: $" + precioTotal;
}

function agregarProducto() {
  const cantidad = parseInt(selectCantidad.value);

  switch (nombreProductoActual) {
    case NOMBRE_PROD_1:
      switch (cantidad) {
        case 3:
          aplicarDescuento(PROD_1_DESCUENTO_1, cantidad);
          break;
        case 7:
          aplicarDescuento(PROD_1_DESCUENTO_2, cantidad);
          break;
        default:
          precioTotal += precioProductoActual * cantidad;
          olCarrito.innerHTML += `<li>${nombreProductoActual} ($${precioProductoActual}) x ${cantidad}</li>`;
          pPrecioTotal.innerHTML = "Total: $" + precioTotal;
          break;
      }
      break;

    case NOMBRE_PROD_2:
      switch (cantidad) {
        case 1:
          aplicarDescuento(PROD_2_DESCUENTO_1, cantidad);
          break;
        case 7:
          aplicarDescuento(100, cantidad); 
          break;
        default:
          precioTotal += precioProductoActual * cantidad;
          olCarrito.innerHTML += `<li>${nombreProductoActual} ($${precioProductoActual}) x ${cantidad}</li>`;
          pPrecioTotal.innerHTML = "Total: $" + precioTotal;
          break;
      }
      break;
  }
}

function sigProducto() {
  fieldsetProducto.innerHTML = `
    <img src="https://media.ldlc.com/r1600/ld/products/00/05/95/95/LD0005959596.jpg" alt="">
    <p>Nintendo Switch</p>
    <p id="precio-prod">Precio: $700</p>
  `;
  precioProductoActual = PRECIO_PROD_2;
  nombreProductoActual = NOMBRE_PROD_2;
}
