import styles from './Publicacion.module.css';
import ItemInformationUser from '../ItemInformationUser/ItemInformationUser';
import ItemInformationBook from '../ItemInformationBook/ItemInformationBook';
import Interacciones from './Interacciones/Interacciones';
import InformationContainer from './InformationContainer/InformationContainer';

function Publicacion(){
    return(
        <div className={styles.post}>
            <div className={styles.information}>
                <ItemInformationUser />
                <ItemInformationBook />
            </div>
            <InformationContainer contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure impedit aperiam vel alias eius dignissimos. Mollitia reiciendis accusantium sapiente architecto accusamus excepturi voluptate perspiciatis saepe similique magnam. Corrupti, aspernatur." />
            <Interacciones />            
        </div>
    )
}

export default Publicacion;