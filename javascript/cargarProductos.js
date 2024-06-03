import * as productos from "../javascript/productos.js"
const productosTraidos  = [...productos.hombresProductos]



/*

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>





*/


export function cargaDeProductos(categoria){

    const filtarPorCategoria = productosTraidos.filter((element)=>{
    
        if (element.categoria==categoria){
            return element
        }
    
   
})

const main = document.querySelector("#main")

const contenedorDeCards = document.createElement("div")
contenedorDeCards.classList.add("row", "row-cols-1", "row-cols-sm-2","row-cols-xl-3")


filtarPorCategoria.forEach((element)=>{

    const col = document.createElement("div")
    col.classList.add("col")

    const cards = document.createElement("div")
    cards.classList.add("card")
    cards.innerText=`${element.nombre}`


    col.appendChild(cards)

    contenedorDeCards.appendChild(col)

    main.appendChild(contenedorDeCards)

})


}

cargaDeProductos("hombre")