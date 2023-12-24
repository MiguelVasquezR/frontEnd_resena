import Header from "../../components/Header/Header";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import MenuGeneros from "../../components/Generos/MenuGeneros/MenuGeneros";
import MenuAutores from "../../components/Autores/MenuAutores/MenuAutores";
import Publicacion from "../../components/Publicacion/Publicacion";
import styles from './Home.module.css';
import imgLogo from '../../../public/img/pluma.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";

function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [estadoPadre, setEstadoPadre] = useState('Inicial');
    const [usuarios, setUsuarios] = useState(null);


    const handleUsuario = (usuarios) => {
        setUsuarios(usuarios);
    }

    const actualizarEstado = (nuevoEstado) => {
        setEstadoPadre(nuevoEstado)
    }

    const handleClicResena = () => {
        if (isLogin) {
            navigate('/Create-resena');
        } else {
            navigate('/Autentication');
        }
    }

    useEffect(() => {
        if (IsLoging()) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [estadoPadre])

    return (
        <>
            <Header actualizar={actualizarEstado} />
            <BarraBusqueda b="usuario" search={handleUsuario} />

            <div>
                {usuarios ?
                    <div>
                        {usuarios.map((usuario) => {                                                        
                            return (
                                <div>
                                    <p>{usuario.IDUsuario}</p>
                                    <p>{p.nombre}</p>
                                    <p>{p.Paterno}</p>
                                </div>


                            )
                        })}
                    </div>
                    :
                    <div>
                        <MenuGeneros />
                        <MenuAutores />
                        {
                            isLogin ? <div> </div> : <IS />
                        }
                    </div>
                }
            </div>

            <div className={styles.container}>
                <div onClick={handleClicResena} className={styles.btnResena}><img className={styles.img} src={imgLogo} alt="" /></div>
            </div>
        </>
    );
}

export default Home;