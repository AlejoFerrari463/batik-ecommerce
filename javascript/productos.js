



class producto {
    constructor(id, nombre, precio, genero, categoria, marca, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.genero = genero;
        this.categoria = categoria;
        this.marca = marca;
        this.imagen = imagen;
        
    }

    cambiarPrecio(precio){
        this.precio = precio
    }

    cambiarImagen(imagen){
        this.imagen = imagen
    }


}


export const productos = [

    new producto(1,"Campera retro Blue",250000,"Hombre","Campera","Nike","https://d22fxaf9t8d39k.cloudfront.net/d131c6fd14a5133ada8a8a4c172f03288b303b5cce4b4bfe5e68013c47267ef3127760.png"),
    new producto(2,"Campera retro",100000,"httppsdsa","mujer","Nike"),
    new producto(3,"Ojotas UVST",40000,"Hombre","Zapatilla","Adidas","https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/Q/HQ8848_0.jpg"),
    new producto(4,"Zapatillas Jordan Jumpman",350000,"Hombre","Zapatilla","Nike","https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwff1708da/products/NIDZ4475-006/NIDZ4475-006-1.JPG"),
]

export function buscarPorGenero(genero){


    const filtrar = hombresProductos.filter((element)=>{

        if (element.genero==genero){
           return element
        }

    })

    return filtrar

}

