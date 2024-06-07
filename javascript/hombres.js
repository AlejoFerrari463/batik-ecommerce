import * as c from "../javascript/cargarProductos.js"

let h = "Hombre"

c.cargaDeProductos(h)


const filtro = document.querySelectorAll("input")


filtro.forEach((element)=>{

    
    element.addEventListener("click",(event)=>{
        
        

        if (element.name=="Categoria"){

            if (element.checked){

                c.desabilitarCheckBox(event.target.value,filtro);
        
                c.cargaDeProductosPorCategoria(h,event.target.value)
                
              
            }
        
            else {
    
                c.cargaDeProductos(h)
    
                c.habilitarCheckBox(filtro)        
                
            }

        }

        if(element.name=="Marca"){

            

            if (element.checked){

                console.log(event.target.value)

                c.desabilitarCheckBox(event.target.value,filtro);
        
                c.cargaDeProductosPorMarca(h,event.target.value)
                
              
            }
        
            else {
    
                c.cargaDeProductos(h)
    
                c.habilitarCheckBox(filtro)         
                
            }


        }
    
        
               
       
    })


})


