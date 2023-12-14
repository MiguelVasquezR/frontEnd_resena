import styles from './ItemInformationUser.module.css';
import { getPersona, getUser } from '../../hooks/Aut';

function ItemInformationUser(){

    const persona = getPersona();
    const user = getUser();

    return(        
        <div className={styles.informationContainer}>
            <div className={styles.imgContainer}>
                <img src={'imgP'} alt={"fotoPerfil-" + user.usuario} className={styles.img}/>
            </div>
            <div className={styles.informationUserContainer}>
                <h3 className={styles.h3_nombre}>{persona.nombre + " " + persona.paterno + " " + persona.materno}</h3>
                <h3 className={styles.h3_usuario}>{"@ "+ user.usuario}</h3>
            </div>
        </div>        
    )
}

export default ItemInformationUser;