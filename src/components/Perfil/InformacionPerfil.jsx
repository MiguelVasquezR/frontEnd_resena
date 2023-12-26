import styles from './InformacionPerfil.module.css';
import { addPersonne, getUser, getPersona } from '../../hooks/Aut';
import { FaRegUserCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react';

function ItemInformationUser() {
    const [bandImg, setBandImg] = useState(false);
    const user = getUser();
    const persona = getPersona();    


    useEffect(() => {        
        if  (user){                        
            fetch(`http://${import.meta.env.VITE_DIR_IP}:9000/image/${user.Foto}`)
            .catch(err => {console.log("ERROR AL OBTENER LA FOTO");})
            setBandImg(true);
        }else{
            setBandImg(false);
        }
    }, [])    

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {bandImg ? <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + user.Foto + ".png"} alt={'Pergil de ' + persona.nombre} className={`${styles.img}`} /> : <FaRegUserCircle size={90} color='white' />}
            </div>
            <div className={styles.informationUserContainer}>
                <h3 className={`${styles.h3}`}>{persona.nombre + " " + persona.paterno + " " + persona.materno}</h3>
                <h3 className={`${styles.userH3} `}>{"@" + user.usuario}</h3>
            </div>
        </div>
    )
}

export default ItemInformationUser;