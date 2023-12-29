import styles from './Perfil.module.css';
import Header from '../../components/Header/Header';

import Publicacion from '../../components/Publicacion/Publicacion';
import Lista from '../../components/Lista/Lista';
import { useState, useEffect } from 'react';
import { useBeforeUnload, useNavigate } from 'react-router-dom';
import { getUser, getPersona } from '../../hooks/Aut';
import InformacionPerfil from '../../components/Perfil/InformacionPerfil'

import RedSocial from './RedSocial/RedSocial';
import Generos from './GeneroComponent/Generos';
import Biografia from './Biografia/Biografia';
import IS from '../../Alerts/IniciaSesión/IS';
import Loading from '../../components/Loading/Loading';

function Perfil({ idusuario }) {
    const [option, setOption] = useState(true);
    const [select, setSelect] = useState(true);
    const [resenas, setResenas] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);    
    const user = getUser();
    const [follow, setFollow] = useState('');
    const [IFollow, setIFollow] = useState('Seguir')

    const [seguidos, setSeguidos] = useState([]);
    
    useEffect(() => {
        fetch(`https://${import.meta.env.VITE_DIR_IPP}/getImages`).then(res => {console.log(res);}).catch(err=>console.log("Error", err));
        if (getPersona() && getUser()) {
            getPublications();            
            actCantidad();
            validarSeg();
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [])

    useEffect(()=>{
        actCantidad();
    }, [IFollow])

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
        navigate(`/follows?id=${idusuario}`)
    }

    const getPublications = () => {
        const fetchPublication = async () => {
            fetch(`https://${import.meta.env.VITE_DIR_IPP}/image/getImages`).catch(err => { console.log("ERROR AL OBTENER LA FOTO"); })
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/get-resenas?IDUsuario=${idusuario}`, { method: 'GET' });
            const data = await res.json();
            setResenas(data);
            setIsLoading(false);
        }
        fetchPublication();
    }
    
    const handleFollow = () => {
        const datos = {
            IDUserFollow: idusuario,
            IDUserOrigin: user.IDUsuario 
        }
        const fetchFollow = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/follow`, {method: 'POST', body: JSON.stringify(datos)});
            if(res.ok){
                const data = await res.json();
                console.log(data);   
                setIFollow('Siguiendo') ;
            }
        }
        fetchFollow();
    }


    const actCantidad = () => {        
        const fetchAct = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/count1?id=${idusuario}`);
            if(res.ok){
                const data = await res.json();                
                setFollow(data);
            }            
        }
        fetchAct();
    }

    const getSeguidores = () => {        
        const fetchSeg = async () => {
            const user = getUser();
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/getFollow?id=${user.IDUsuario}`);
            if(res.ok){
                const data = await res.json(); 
                setSeguidos(data);                
            }            
        }
        fetchSeg();
    }

    function validarSeg(){
        getSeguidores();        
        const band = seguidos.find(elemento => elemento.IDUserFollow === idusuario);
        if(band){
            setIFollow('Seguiendo');
            console.log(seguidos);
        }

        console.log(seguidos);
    }


    return (
        <>
            <Header />
            {
                isLogin ?
                    <div>
                        <div className={styles.userConteiner}>
                            <InformacionPerfil idUser={idusuario} />
                            {
                                user.IDUsuario !== idusuario ?
                                <button onClick={handleFollow} className={styles.btnFollow}>{IFollow}</button>
                                :
                                ""
                            }
                            
                        </div>

                        <div className={styles.follow} onClick={handleClicFollow}>
                            <div>
                                <h2 className={styles.h2}>Seguidores</h2>
                                <p className={styles.p}>{follow.Seguidores}</p>
                            </div>
                            <div>
                                <h2 className={styles.h2}>Seguidos</h2>
                                <p className={styles.p}>{follow.Seguidos}</p>
                            </div>
                        </div>

                        <Biografia idUser={idusuario} />
                        <Generos idUser={idusuario} />
                        <RedSocial idUser={idusuario} />

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
                                                return <Publicacion idUser={idusuario} key={i} contenido={resena.contenido} titulo={resena.nombreLibro} autor={resena.nombreAutor} editorial={resena.editorial} foto={resena.FotoID} />
                                            })
                                    }

                                </div>}
                                {
                                    option === false
                                    &&
                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}><Lista idUser={idusuario} /></div>
                                }
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