//apartado de la tienda





async function cargarProductos(){

    const respuestaProductos = await fetch("http://localhost:3000/products");

    const datosProductos = await respuestaProductos.json();
    
    datosProductos.forEach(element => {
        console.log(element);
    });





}


function mostrarProductos(){

}