import styles from './Perfil.module.css';
import Header from '../../components/Header/Header';

import Publicacion from '../../components/Publicacion/Publicacion';
import Lista from '../../components/Lista/Lista';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, getPersona } from '../../hooks/Aut';
import InformacionPerfil from '../../components/Perfil/InformacionPerfil'

import RedSocial from './RedSocial/RedSocial';
import Generos from './GeneroComponent/Generos';
import Biografia from './Biografia/Biografia';
import IS from '../../Alerts/IniciaSesión/IS';
import Loading from '../../components/Loading/Loading';

function Perfil() {
    const [option, setOption] = useState(true);
    const [select, setSelect] = useState(true);
    const [isFollow, setIsFollow] = useState(false);
    const [resenas, setResenas] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (getPersona() && getUser()) {
            getPublications();
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [])

    const handleClicOption = (e) => {
        if (e.target.id === "resena") {
            setOption(true);
            setSelect(true);
        } else if (e.target.id === 'lista') {
            setOption(false);
            setSelect(false);
        }
    }

    const handleClicFollow = () => {
        navigate('/follows')
    }

    const getPublications = () => {
        const user = getUser();
        const fetchPublication = async () => {
            fetch(`http://192.168.1.67:9000/image/getImages`).catch(err => { console.log("ERROR AL OBTENER LA FOTO"); })
            const res = await fetch(`http://192.168.1.67:4567/get-resenas?IDUsuario=${user.IDUsuario}`, { method: 'GET' });
            const data = await res.json();
            setResenas(data);
            setIsLoading(false);
        }
        fetchPublication();
    }



    return (
        <>
            <Header />
            {
                isLogin ?
                    <div>
                        <div className={styles.userConteiner}>
                            <InformacionPerfil />
                            <button className={styles.btnFollow}>Seguir</button>
                        </div>

                        <div className={styles.follow} onClick={handleClicFollow}>
                            <div>
                                <h2 className={styles.h2}>Seguidores</h2>
                                <p className={styles.p}>30,130,200</p>
                            </div>
                            <div>
                                <h2 className={styles.h2}>Seguidos</h2>
                                <p className={styles.p}>456</p>
                            </div>
                        </div>



                        <Biografia />
                        <Generos />
                        <RedSocial />



                        <div className={styles.contenidoContainer}>

                            <ul className={styles.ulContenido}>
                                <li onClick={handleClicOption} id='resena' className={`${select ? styles.select : ''}`} >Reseña</li>
                                <li onClick={handleClicOption} id='lista' className={`${select ? '' : styles.select}`} >Lista</li>
                            </ul>

                            <div className={styles.listasContiner}>
                                {option === true && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                                    {
                                        isLoading ?
                                            <Loading />
                                            :
                                            resenas.map((resena, i) => {
                                                return <Publicacion key={i} contenido={resena.contenido} titulo={resena.nombreLibro} autor={resena.nombreAutor} editorial={resena.editorial} foto={resena.FotoID} />
                                            })
                                    }

                                </div>}
                                {option === false && <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}><Lista /></div>}
                            </div>
                        </div>



                    </div>
                    :
                    <IS />
            }
        </>
    )
}

export default Perfil;