import styles from './ItemInformationUser.module.css';
import { getPersona, getUser } from '../../hooks/Aut';
import {FaRegUserCircle} from 'react-icons/fa'
import { useEffect, useState } from 'react';

function ItemInformationUser(){
    const [bandImg, setBandImg] = useState(false);
    const persona = getPersona();
    const user = getUser();

    useEffect(() => {
        if(persona){
            fetch(`http://192.168.1.67:9000/getImages`).catch(err => {console.log("ERROR AL OBTENER LA FOTO");})
            setBandImg(true);
        }else{
            setBandImg(false);
        }
    },[])

    return(        
        <div className={styles.informationContainer}>
            <div className={styles.imgContainer}>
                {bandImg ? <img src={'http://192.168.1.67:9000/' + user.Foto + ".png"} alt={'Pergil de ' + persona.nombre} className={styles.img}/> : <FaRegUserCircle size={40} color='white'/>}
            </div>
            <div className={styles.informationUserContainer}>
                <h3 className={styles.h3_nombre}>{persona.nombre + " " + persona.paterno + " " + persona.materno}</h3>
                <h3 className={styles.h3_usuario}>{"@ "+ user.usuario}</h3>
            </div>
        </div>        
    )
}

export default ItemInformationUser;