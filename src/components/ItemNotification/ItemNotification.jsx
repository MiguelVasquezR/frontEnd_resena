import styles from './ItemNotification.module.css';
import {MdDelete} from 'react-icons/md';

function ItemNotification(props){
    const {emisor, contenido, urlImg} = props;

    const handleDelete = () => {
        alert("Eliminar");
    }


    return (
        <div className={styles.notConteiner}>

            <img src={urlImg} alt={"img-notification-"+emisor} className={styles.img}/>
            
            <div className={styles.contenido}>
                <h2 className={styles.h2}>{emisor}</h2>    
                <p className={styles.p}>{contenido}</p>
            </div>      

            <MdDelete size={28} color='white' onClick={handleDelete}/>
        
        </div> 
    );
}

export default ItemNotification;