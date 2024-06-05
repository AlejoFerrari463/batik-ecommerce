import * as c from "../javascript/cargarProductos.js"

c.cargaDeProductos("Hombre")

console.log(c.buscarPorPrecio(300,"Mujer"))
console.log(c.buscarPorCategoria("Campera","Hombre"))