// import './App.css'
import { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Card from "../../components/card"
import { apiUrl } from "../../api"

function Home() {
    const [Products, setProducts] = useState(null); //guardar los productos//
    const [Loading, setLoading] = useState(true); //estado para manejar el estado de carga

    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const response = await fetch(`${apiUrl}/products`); //Solicitud HTTP GET
                const data = await response.json(); //convertir respuesta a JSON 
                setProducts(data); //guardar datos en el estado
            } catch (error){
                console.error('Error al obtener los productos', error);
            }finally {
                setLoading(false); 
            }
        };
        fetchProducts()
    }, []);

    return (
      <Layout className='bg-red-100'>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {Loading ? (
                <p>Cargando...</p>
            ) : (
                Products.map((product) => (
                    <Card key={product.id} data={product} />
                ))
            )}
        </div>
      </Layout>
  )
}


export default Home