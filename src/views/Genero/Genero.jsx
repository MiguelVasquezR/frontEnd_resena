import Header from "../../components/Header/Header";
import InformationGenero from "../../components/Generos/InformationGenero/InformationGenero";
import ItemsBook from "../../components/Libro/ItemsBook";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";


function Genero() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genero = searchParams.get('genero');
    const url = searchParams.get('img');
    const [libros, setLibros] = useState([]);
    const [nombres, setNombre] = useState([]);
    const [isLoging, setIsLoging] = useState(true);

    useEffect(() => {
        fetch(`https://${import.meta.env.VITE_DIR_IPP}/getImages`).then(res => {console.log(res);}).catch(err=>console.log("Error", err));
        if (isLoging) {
            handleGetLibros();
        }
    }, [isLoging])

    const handleGetLibros = () => {
        try {
            const fetchBook = async (genero) => {
                const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/libros/genero?genero=${genero}`);
                const data = await res.json();
                setLibros(data);
                setIsLoging(false)
            }
            fetchBook(genero);

        } catch (err) {
            console.log("Error en petición", ett);
        }
    }

    return (
        <>
            <Header />
            <InformationGenero imgUrl={url} nombre={genero} />            

            {
                isLoging ?
                    <Loading />
                    :

                    libros ? libros.map((libro, i) => {
                        return (
                            <ItemsBook key={i} libro={libro} />
                        )
                    }) : ""

            }

        </>
    )
}

export default Genero;