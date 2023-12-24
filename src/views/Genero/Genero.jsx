import Header from "../../components/Header/Header";
import InformationGenero from "../../components/Generos/InformationGenero/InformationGenero";
import ItemsBook from "../../components/Libro/ItemsBook";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Genero() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genero = searchParams.get('genero');
    const url = searchParams.get('img');
    const [libros, setLibros] = useState([]);
    const [nombres, setNombre] = useState([]);

    useEffect(() => {
        handleGetLibros();
    }, [])

    const handleGetLibros = () => {
        const fetchBook = async () => {
            const res = await fetch(`http://192.168.100.6:4567/libros/genero?genero=${genero}`);
            const data = await res.json();
            setLibros(data);
        }
        fetchBook(genero);
    }

    const getNombre = async (id) =>{        
        const res = await fetch(`http://192.168.100.6:4567/nombre-autores?id=${id}`);
        const data = await res.json();        
        return data;
    }

    return (
        <>
            <Header />
            <InformationGenero imgUrl={url} nombre={genero} />
            <BarraBusqueda b="libro"/>
            {libros ? libros.map((libro) => {                                           
                return (
                    <ItemsBook libro={libro} nombre= "Miguel de Cervantes Avedra"/>
                )
            }) : ""}
        </>
    )
}

export default Genero;