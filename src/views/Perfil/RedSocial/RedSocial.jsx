import styles from './RedSocial.module.css';
import { FaSquareXTwitter, FaGithub } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { TiSocialAtCircular } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { getUser } from '../../../hooks/Aut';
import axios from 'axios';

function RedSocial({idUser}) {
    const [redes, setRedes] = useState([]);

    const GetRedSocial = () => {
        const fetchGetRed = async () => {            
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/getRedes?id=${idUser}`)
            if (res.ok){
                const data = await res.json();
                setRedes(data);
            }                        
        }
        fetchGetRed();
    }

    const selectLogo = (url) => {
        const lowercaseUrl = url.toLowerCase();
        const tam = 50;
        if (lowercaseUrl.includes('github')) {
            return <FaGithub size={tam} color="#3049a4" />;
        } else if (lowercaseUrl.includes('twitter')) {
            return <FaSquareXTwitter size={tam} color="#1DA1F2" />;
        } else if (lowercaseUrl.includes('linkedin')) {
            return <IoLogoLinkedin size={tam} color="#0077B5" />;
        } else if (lowercaseUrl.includes('instagram')) {
            return <FaInstagram size={tam} color="#C13584" />;
        } else if (lowercaseUrl.includes('facebook')) {
            return <FaFacebook size={tam} color="#1879F2" />;
        } else {
            return <TiSocialAtCircular size={tam} />
        }
    };

    useEffect(() => {
        GetRedSocial();        
    }, [])


    return (
        <div className={styles.socialRedes}>
            <h2 className={styles.h2Red}>Redes Sociales</h2>
            <div className={styles.optionRedesContainer}>
                {redes ? <div >{redes.map((red) => { return <a target="_blank" key={red.URL} href={red.URL} className={styles.urls}> {selectLogo(red.URL)} </a> })}</div> : <h3>Agrega tus redes</h3>}
            </div>
        </div>
    )
}

export default RedSocial;