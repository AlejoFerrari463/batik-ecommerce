import * as productos from "../javascript/productos.js"
const productosTraidos  = [...productos.productos]



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

const main = document.querySelector("#main")

const contenedorDeCards = document.createElement("div")
contenedorDeCards.classList.add("row", "row-cols-1", "row-cols-sm-2","row-cols-xl-3")


export function cargaDeProductos(genero){

    const filtarPorCategoria = productosTraidos.filter((element)=>{
    
        if (element.genero==genero){
            return element
        }
    
   
    })
    contenedorDeCards.innerHTML=``


    filtarPorCategoria.forEach((element)=>{

        const {nombre, precio,imagen}= element

        const col = document.createElement("div")
        col.classList.add("col")

        const cards = document.createElement("div")
        cards.classList.add("card")
        cards.innerHTML = `
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body" >
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
            </div>

        
        `



        col.appendChild(cards)

        contenedorDeCards.appendChild(col)

        main.appendChild(contenedorDeCards)

    })


}


export function cargaDeProductosPorCategoria(genero,categoria){

    const filtarPorCategoria = productosTraidos.filter((element)=>{
  
        if (element.genero==genero && element.categoria==categoria){
            return element
        }
  
 
    })


    contenedorDeCards.innerHTML=``

    filtarPorCategoria.forEach((element)=>{

    const {nombre, precio,imagen}= element

    const col = document.createElement("div")
    col.classList.add("col")

    const cards = document.createElement("div")
    cards.classList.add("card")
    cards.innerHTML = `
        <img src="${imagen}" class="card-img-top" alt="${nombre}">
        <div class="card-body" >
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">$${precio}</p>
        </div>

    
    `



    col.appendChild(cards)

    contenedorDeCards.appendChild(col)

    main.appendChild(contenedorDeCards)

    })


}


export function buscarPorCategoria(categoria){


  const filtrar = productosTraidos.filter((element)=>{

      if (element.categoria==categoria){
         return element
      }

  })

  return filtrar

}

export function buscarPorMarca(marca,genero){


  const filtrar = productosTraidos.filter((element)=>{

      if (element.marca==marca && element.genero==genero){
         return element
      }

  })

  return filtrar

}

export function buscarPorPrecio(precio,genero){


  const filtrar = productosTraidos.filter((element)=>{

      if (element.precio>=precio && element.genero==genero){
         return element
      }

  })

  return filtrar

}