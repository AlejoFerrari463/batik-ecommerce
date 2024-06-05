



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
    new producto(2,"Campera Ice-Cream",100000,"Mujer","Campera","Fila","https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/rskp15sq81iofa5dgilw31ergt5u/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"),
    new producto(3,"Ojotas UVST",40000,"Hombre","Zapatilla","Adidas","https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/Q/HQ8848_0.jpg"),
    new producto(4,"Zapatillas Jordan Jumpman",350000,"Hombre","Zapatilla","Nike","https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwff1708da/products/NIDZ4475-006/NIDZ4475-006-1.JPG"),
    new producto(5,"Luka 2",140000,"Hombre","Zapatilla","Jordan","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/edc44f10-6014-4b4c-a026-d3d5acc919a5/luka-2-zapatillas-de-baloncesto-Dc4Xth.png")
]



