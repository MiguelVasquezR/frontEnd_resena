import styles from './Perfil.module.css';
import Header from '../../components/Header/Header';
import ItemInformationUser from '../../components/ItemInformationUser/ItemInformationUser';
import { useState } from 'react';
import Publicacion from '../../components/Publicacion/Publicacion';
import Lista from '../../components/Lista/Lista';
import { useNavigate } from 'react-router-dom';
import { getUser, getPersona } from '../../hooks/Aut';
import InformacionPerfil from '../../components/Perfil/InformacionPerfil'
import { useEffect } from 'react';
import axios from 'axios';



import { id } from 'date-fns/locale';
import RedSocial from './RedSocial/RedSocial';
import Generos from './GeneroComponent/Generos';
import Biografia from './Biografia/Biografia';

function Perfil() {        
    const [option, setOption] = useState(true);    
    const [select, setSelect] = useState(true);    
    const [isFollow, setIsFollow] = useState(false);    
    const [resenas, setResenas] = useState([]);

    useEffect(() => {
        getPublications();
    }, [])

    const handleClicOption = (e) =>{
        if (e.target.id === "resena"){
            setOption(true);
            setSelect(true);
        }else if(e.target.id === 'lista'){
            setOption(false);
            setSelect(false);
        }
    }    

    const navigate = useNavigate();
    const handleClicFollow = () =>{
        navigate('/follows')
    }


    const getPublications = () => {

        const user = getUser();

        const fetchPublication = async () => {
            const res = await fetch(`http://192.168.100.6:4567/get-resenas?IDUsuario=${user.IDUsuario}`, {method: 'GET'});
            const data = await res.json();
            setResenas(data);
        }

        fetchPublication();    

    }


    return (
        <>
            <Header />

            <div className={styles.userConteiner}>
                < InformacionPerfil />
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
                        <li onClick={handleClicOption} id='resena' className={`${select ? styles.select : ''}` } >Reseña</li>
                        <li onClick={handleClicOption} id='lista' className={`${select ? '' : styles.select}` } >Lista</li>
                    </ul>

                    <div className={styles.listasContiner}>
                        {option === true && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            
                            {resenas.map((resena) => {
                                return <Publicacion contenido={resena.contenido} titulo={resena.nombreLibro} autor={resena.nombreAutor} editorial={resena.editorial} foto={resena.FotoID}/>
                            })}

                        </div>}
                        {option === false && <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}><Lista /></div>}
                    </div>
            </div>




        </>
    )
}

export default Perfil;