import styles from './InformacionPerfil.module.css';
import { getPersona, getUser } from '../../hooks/Aut';
import { FaRegUserCircle } from 'react-icons/fa'
import { useState } from 'react';

function ItemInformationUser() {
    const [bandImg, setBandImg] = useState(false);
    const persona = getPersona();
    const user = getUser();    

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {bandImg ? <img src='' alt={'Pergil de ' + persona.nombre} className={`${styles.img}`} /> : <FaRegUserCircle size={90} color='white' />}
            </div>
            <div className={styles.informationUserContainer}>
                <h3 className={`${styles.h3}`}>{persona.nombre + " " + persona.paterno + " " + persona.materno}</h3>
                <h3 className={`${styles.userH3} `}>{"@" + user.usuario}</h3>
            </div>
        </div>
    )
}

export default ItemInformationUser;