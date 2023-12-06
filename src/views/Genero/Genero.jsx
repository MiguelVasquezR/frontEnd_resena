import Header from "../../components/Header/Header";
import InformationGenero from "../../components/Generos/InformationGenero/InformationGenero";
import ItemsBook from "../../components/Libro/ItemsBook";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useLocation } from "react-router-dom";

function Genero(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);        
    const genero = searchParams.get('genero');
    const url = searchParams.get('img');    

    return(
        <>
            <Header />
            <InformationGenero imgUrl={url} nombre={genero}/>
            <BarraBusqueda />
            <ItemsBook />
            
        </>
    )
}

export default Genero;