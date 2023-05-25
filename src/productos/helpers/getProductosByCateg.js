import { productos } from "../data/productos";

export const getProductosByCateg = ( category ) => {
  
    //Lista de categorias validos
    const validCategories = ['Licores Dulces', 'Ron Añejos', 'Rones Secos', 'Espirituosos'];

    //Determinando si el validCategories no incluye la category enviado por parametro 
    if(!validCategories.includes(category)) {
        throw new Error(`La Categoria ${ category } no existe`);
    }

    return productos.filter((producto) => producto.categoria === category);
}
