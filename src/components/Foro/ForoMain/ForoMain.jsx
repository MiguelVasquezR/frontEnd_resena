import { useNavigate } from 'react-router-dom';
import ItemForo from '../ItemForo/ItemForo';
import styles from './ForoMain.module.css';
import {MdForum} from 'react-icons/md'

function ForoMain(){
    const navigate = useNavigate();

    const handleClic = () => {
        navigate('/create-foro');
    }


    return (
        <div>
            <h2 style={{textAlign: 'center', fontSize: '30px', margin: '10px'}}>Foros</h2>
            <ItemForo nombre = "100 años de soledad" cantUsuarios='1500' descripcion='foro con el objetivo de hacer muchas aclaraciones sobre este libro'/>
            <ItemForo nombre = "100 años de soledad" cantUsuarios='1500' descripcion='foro con el objetivo de hacer muchas aclaraciones sobre este libro'/>
            <ItemForo nombre = "100 años de soledad" cantUsuarios='1500' descripcion='foro con el objetivo de hacer muchas aclaraciones sobre este libro'/>
            <ItemForo nombre = "100 años de soledad" cantUsuarios='1500' descripcion='foro con el objetivo de hacer muchas aclaraciones sobre este libro'/>
            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={handleClic}><MdForum color='white' size={30}/></div>
            </div>
        </div>        
    )
}

export default ForoMain;