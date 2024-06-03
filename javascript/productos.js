



class producto {
    constructor(id, nombre, precio, imagen, categoria, marca) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.marca = marca;
        
    }

    cambiarPrecio(precio){
        this.precio = precio
    }

    cambiarImagen(imagen){
        this.imagen = imagen
    }


}


export const hombresProductos = [

    new producto(1,"Zapas retro",100,"httppsdsa","hombre","Adidas"),
    new producto(2,"Campera retro",3000,"httppsdsa","mujer","Nike"),
    
]

