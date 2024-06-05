import * as c from "../javascript/cargarProductos.js"

let h = "Hombre"

c.cargaDeProductos(h)


const filtro = document.querySelectorAll("input")


function desabilitarCheckBox(exep){

    filtro.forEach((element)=>{

        if (element.value!=exep){
            element.disabled = true
        }
        
        
        
    })

}

function habilitarCheckBox(exep){

    filtro.forEach((element)=>{

       
        element.disabled = false
   
        
        
        
    })

}


filtro.forEach((element)=>{

    

    element.addEventListener("click",(event)=>{
        
        console.log(element.tabIndex)
    
        if (element.checked){

            desabilitarCheckBox(event.target.value);
    
            c.cargaDeProductosPorCategoria(h,event.target.value)
          
          
        }
    
        else {
            c.cargaDeProductos(h)

            habilitarCheckBox()
            
        }
    
                
       
    })


})


