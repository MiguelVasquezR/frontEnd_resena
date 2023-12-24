import styles from './Publicacion.module.css';
import ItemInformationUser from '../ItemInformationUser/ItemInformationUser';
import ItemInformationBook from '../ItemInformationBook/ItemInformationBook';
import Interacciones from './Interacciones/Interacciones';
import InformationContainer from './InformationContainer/InformationContainer';
import { MdOutlinePlaylistAdd } from 'react-icons/md';

function Publicacion(props) {
    const { contenido, titulo, autor, editorial, foto } = props;    

    return (
        <div className={styles.post}>
            <div className={styles.information}>
                <ItemInformationUser />
                <ItemInformationBook titulo={titulo} autor={autor} editorial={editorial} urlImg={foto}/>
            </div>
            <InformationContainer contenido= {contenido} />
            <Interacciones />           
        </div>

    )
}

export default Publicacion;