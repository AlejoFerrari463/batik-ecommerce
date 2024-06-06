import * as productos from "../javascript/productos.js";
const productosTraidos = [...productos.productos];

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

const main = document.querySelector("#main");

const contenedorDeCards = document.createElement("div");
contenedorDeCards.classList.add("contenedor-cards");

export function cargaDeProductos(genero) {
  const filtarPorCategoria = productosTraidos.filter((element) => {
    if (element.genero == genero) {
      return element;
    }
  });
  contenedorDeCards.innerHTML = ``;

  filtarPorCategoria.forEach((element) => {
    const { nombre, precio, imagen } = element;

    const col = document.createElement("div");
    col.classList.add("col");

    const cards = document.createElement("div");
    cards.classList.add("card");
    cards.innerHTML = `
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body" >
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
            </div>

        
        `;

    col.appendChild(cards);

    contenedorDeCards.appendChild(col);

    main.appendChild(contenedorDeCards);
  });

  const cards = document.querySelectorAll(".card")

    cards.forEach((element)=>{

        element.addEventListener("mouseenter",()=>{

            element.classList.add("card-hover")

        })

        element.addEventListener("mouseleave",()=>{

            element.classList.remove("card-hover")

        })

    })

}

export function cargaDeProductosPorCategoria(genero, categoria) {
  const filtarPorCategoria = productosTraidos.filter((element) => {
    if (element.genero == genero && element.categoria == categoria) {
      return element;
    }
  });

  contenedorDeCards.innerHTML = ``;

  filtarPorCategoria.forEach((element) => {
    const { nombre, precio, imagen } = element;

    const col = document.createElement("div");
    col.classList.add("col");

    const cards = document.createElement("div");
    cards.classList.add("card");
    cards.innerHTML = `
        <img src="${imagen}" class="card-img-top" alt="${nombre}">
        <div class="card-body" >
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">$${precio}</p>
        </div>

    
    `;

    col.appendChild(cards);

    contenedorDeCards.appendChild(col);

    main.appendChild(contenedorDeCards);
  });

    const cards = document.querySelectorAll(".card")

    cards.forEach((element)=>{

        element.addEventListener("mouseenter",()=>{

            element.classList.add("card-hover")

        })

        element.addEventListener("mouseleave",()=>{

            element.classList.remove("card-hover")

        })

    })

}

export function desabilitarCheckBox(exep, filtro) {
  filtro.forEach((element) => {
    if (element.value != exep) {
      element.disabled = true;
    }
  });
}

export function habilitarCheckBox(filtro){

    filtro.forEach((element)=>{

       
        element.disabled = false
      
    })

}