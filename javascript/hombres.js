import * as c from "../javascript/cargarProductos.js"

let h = "Hombre"

c.cargaDeProductos(h)


const filtro = document.querySelectorAll("input")



filtro.forEach((element)=>{

    
    element.addEventListener("click",(event)=>{
        
        console.log(element.tabIndex)
    
        if (element.checked){

            c.desabilitarCheckBox(event.target.value,filtro);
    
            c.cargaDeProductosPorCategoria(h,event.target.value)
          
          
        }
    
        else {
            c.cargaDeProductos(h)

            c.habilitarCheckBox(filtro)
            
        }
    
                
       
    })


})


