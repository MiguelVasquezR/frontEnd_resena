import Header from "../../components/Header/Header";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import MenuGeneros from "../../components/Generos/MenuGeneros/MenuGeneros";
import MenuAutores from "../../components/Autores/MenuAutores/MenuAutores";
import Publicacion from "../../components/Publicacion/Publicacion";
import styles from './Home.module.css';
import imgLogo from '../../../public/img/pluma.png';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleClicResena = () => {
        navigate('/Create-resena');
    }

    return (
        <>
            <Header />
            <BarraBusqueda />
            <MenuGeneros />
            <MenuAutores />

            <Publicacion />
            <Publicacion />
            <Publicacion />

            <div className={styles.container}>
                <div onClick={handleClicResena} className={styles.btnResena}><img className={styles.img} src={imgLogo} alt="" /></div>
            </div>
        </>
    );
}

export default Home;