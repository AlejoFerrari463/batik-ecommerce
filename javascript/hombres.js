import * as c from "../javascript/cargarProductos.js"

c.cargaDeProductos("Hombre")


const filtro = document.querySelectorAll("input")



filtro.forEach((element)=>{

    element.addEventListener("click",(event)=>{
        
    
        if (element.checked){
    
        c.cargaDeProductosPorCategoria("Hombre",event.target.value)
    
    
        }
    
        else {
            c.cargaDeProductos("Hombre")
        }
    
       
    })

    

})

