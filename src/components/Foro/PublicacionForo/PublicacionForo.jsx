import styles from './PublicacionForo.module.css';
import Interacciones from '../../Publicacion/Interacciones/Interacciones';

function PublicacionForo(){
    return(
        <div className={styles.publicacionForo}>
            <div className={styles.informationContainer}>
                <div className={styles.imgContainer}>
                    <img src="" alt="" className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <h2 className={styles.h2}>Miguel Vasquez</h2>
                    <h3 className={styles.h3}>Miguel_VR12</h3>                
                </div>
            </div>

            <div className={styles.descriptionContainer}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi optio dolorum quos ipsum, adipisci, voluptate non blanditiis explicabo, dolor sequi soluta vel sunt necessitatibus rerum? Natus quidem porro sequi quisquam.
            </div>
            
            <Interacciones />
        </div>
    )
}

export default PublicacionForo;