const listasProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());
export const productosServicios = {
    listasProductos
}