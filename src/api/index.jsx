// import { useEffect, useState } from "react";
// const productList = () =>{
//     const [Products, setProducts] = useState([]); //guardar los productos//
//     const [Loading, setLoading] = useState(true); //estado para manejar el estado de carga

//     useEffect(()=>{
//         const fetchProducts = async () => {
//             try{
//                 const response = await fetch('https://fakestoreapi.com/products'); //Solicitud HTTP GET
//                 const data = await response.json(); //convertir respuesta a JSON 
//                 setProducts(data); //guardar datos en el estado
//             } catch (error){
//                 console.error('Error al obtener los productos', error);
//             }finally {
//                 setLoading(false); 
//             }
//         };
//         fetchProducts()
//     })
// }

// export default productList
export const apiUrl = 'https://api.escuelajs.co/api/v1';
