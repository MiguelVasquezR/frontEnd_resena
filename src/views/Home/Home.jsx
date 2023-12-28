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
import { getUser } from "../../hooks/Aut";
import Loading from '../../components/Loading/Loading'


function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [estadoPadre, setEstadoPadre] = useState('Inicial');
    const [usuarios, setUsuarios] = useState(null);
    const [resenas, setResenas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = new URLSearchParams(location.search);    

    useEffect(() => {
        handleGetResenas();
        fetch(`http://${import.meta.env.VITE_DIR_IPP}/getImages`).then(res => { console.log(res); }).catch(err => console.log("Error", err));
    }, [])

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

    const renderOptionUser = (item, i) => {
        const handleClic = () => {
            navigate(`/perfil?id=${item.IDUsuario}`);
        }
        return (
            <div key={item.IDUsuario + "-" + i} className={styles.userContainer} onClick={handleClic}>
                <div className={styles.containerImg}>
                    <img src={`http://${import.meta.env.VITE_DIR_IPP}/` + item.IDFoto + ".png"} alt="" className={styles.imgUser} />
                </div>

                <div className={styles.containerInfor}>
                    <h2 className={styles.texto}>{item.nombre + " " + item.paterno + " " + item.materno}</h2>
                    <h2 className={styles.usuario}>{"@" + item.usuario}</h2>
                </div>
            </div>
        );
    }


    const handleGetResenas = () => {
        const user = getUser();
        const fetchGetResenas = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/resenas-follow?id=${user.IDUsuario}`);
            if (res.ok) {
                const data = await res.json();
                setResenas(data);
                setIsLoading(false);
            }
        }
        fetchGetResenas();
    }


    return (
        <>
            <Header actualizar={actualizarEstado} />
            <BarraBusqueda b="usuario" search={handleUsuario} />

            <div>
                {usuarios ?

                    <div>
                        {usuarios.map((usuario, i) => {
                            return (
                                renderOptionUser(usuario, i)
                            )
                        })}
                    </div>

                    :
                    <div>
                        <MenuGeneros />
                        <MenuAutores />
                    </div>
                }
            </div>

            {
                isLogin ? "" : <IS />
            }

            <div>

                {
                    isLoading ?
                        <Loading />
                        :
                        resenas.map((resena, i) => {
                            return (
                                <Publicacion
                                    idUser={resena.IDUsuario}
                                    contenido={resena.contenido}
                                    titulo={resena.nombreLibro}
                                    autor={resena.nombreAutor}
                                    editorial={resena.editorial}
                                    foto={resena.fotoID}
                                    i={i}

                                />
                            )
                        }).reverse()
                }
            </div>



            <div className={styles.container}>
                <div onClick={handleClicResena} className={styles.btnResena}><img className={styles.img} src={imgLogo} alt="" /></div>
            </div>
        </>
    );
}

export default Home;