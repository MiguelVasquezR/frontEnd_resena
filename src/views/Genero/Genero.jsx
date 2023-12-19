import Header from "../../components/Header/Header";
import InformationGenero from "../../components/Generos/InformationGenero/InformationGenero";
import ItemsBook from "../../components/Libro/ItemsBook";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Genero(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);        
    const genero = searchParams.get('genero');
    const url = searchParams.get('img');    
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        handleGetLibros();
    }, [])

    const handleGetLibros = () =>{
        const fetchBook = async () =>{
            const res = await fetch(`http://localhost:4567/libros/genero?genero=${genero}`);
            const data = await res.json();
            console.log(data);
            setLibros(data);
        }
        fetchBook();
    }

    return(
        <>
            <Header />
            <InformationGenero imgUrl={url} nombre={genero}/>
            <BarraBusqueda />            

            {libros ? libros.map((libro) => {                
                return(                    
                    <ItemsBook libro={libro}/>
                )
            }) : ""}
            
        </>
    )
}

export default Genero;