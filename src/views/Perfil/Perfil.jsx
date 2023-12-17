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

import {FaSquareXTwitter,FaGithub} from 'react-icons/fa6'
import {IoLogoLinkedin} from 'react-icons/io'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import {TiSocialAtCircular} from 'react-icons/ti';

function Perfil() {    
    const generos = ["Novela", "Cuento"];
    const [option, setOption] = useState(true);
    const persona = getPersona();    
    const [redes, setRedes] = useState([]);       
    const [select, setSelect] = useState(true);

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

    const GetRedSocial = () =>{        
        const fetchGetRed = async () =>{
            const user = getUser();
            const res = await axios.get('http://localhost:4567/red-social', {params: user});
            setRedes(res.data);                 
        }
        fetchGetRed();
    }

    const selectLogo = (url) => {
        const lowercaseUrl = url.toLowerCase();
        const tam = 50;
        if (lowercaseUrl.includes('github')) {
            return <FaGithub size={tam} color="#4183C4"/>;
        } else if (lowercaseUrl.includes('twitter')) {
            return <FaSquareXTwitter size={tam} color="#1DA1F2"/>;
        } else if (lowercaseUrl.includes('linkedin')) {
            return <IoLogoLinkedin size={tam} color="#0077B5"/>;
        } else if (lowercaseUrl.includes('instagram')) {
            return <FaInstagram size={tam} color="#C13584"/>;
        } else if (lowercaseUrl.includes('facebook')) {
            return <FaFacebook size={tam} color="#1879F2"/>;
        } else {            
            return <TiSocialAtCircular size={tam} />
        }
    };    

    useEffect(() => {
        GetRedSocial();
    }, [GetRedSocial])

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
                    <p className={styles.p}>1,200</p>
                </div>

                <div>
                    <h2 className={styles.h2}>Seguidos</h2>
                    <p className={styles.p}>456</p>
                </div>
            </div>

            <div className={styles.bibliography}>
                <h2 className={styles.tituloBli}>Bibliografia</h2>
                <p>{persona.biografia ? persona.biografia : "Aún no hay información sobre el usuario"}</p>
            </div>

            <div className={styles.generos}>
                <h2 className={styles.h2Generos}>Géneros Favoritos</h2>
                <ul className={styles.ul}>
                    {generos.map((titulo) => {
                       return(<li className={styles.li}>{titulo}</li>);
                    })}                
                </ul>
            </div>

            <div className={styles.socialRedes}>

                <h2 className={styles.h2Red}>Redes Sociales</h2>

                <div className={styles.optionRedesContainer}>
                    {redes ? <div>{ redes.map((red) => {return <a target="_blank" key={red.URL} href={red.URL} className={styles.urls}> {selectLogo(red.URL)} </a>})}</div> : ''}                    
                </div>

            </div>

            <div className={styles.contenidoContainer}>

                    <ul className={styles.ulContenido}>
                        <li onClick={handleClicOption} id='resena' className={`${select ? styles.select : ''}` } >Reseña</li>
                        <li onClick={handleClicOption} id='lista' className={`${select ? '' : styles.select}` } >Lista</li>
                    </ul>

                    <div className={styles.listasContiner}>
                        {option === true && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}><Publicacion /><Publicacion /><Publicacion /></div>}
                        {option === false && <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}><Lista /></div>}
                    </div>
            </div>




        </>
    )
}

export default Perfil;