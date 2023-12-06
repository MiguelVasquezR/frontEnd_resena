import styles from './Lista.module.css';
import ItemList from "./ItemList/ItemList";
import {MdOutlinePlaylistAdd} from 'react-icons/md';

function Lista(){

    const handleCreateList = () =>{
        alert('creaste una lista');
    }


    return(
        <div className={styles.container}>            
            <div>
                <ItemList nombre='Madame Bovary' cantidad='20' visibilidad='Público'/>
                <ItemList nombre='Madame Bovary' cantidad='20' visibilidad='Público'/>
                <ItemList nombre='Madame Bovary' cantidad='20' visibilidad='Público'/>
                <ItemList nombre='Madame Bovary' cantidad='20' visibilidad='Público'/>
            </div>


            <div className={styles.containerBtn}>
                <button onClick={handleCreateList} className={styles.btn}><MdOutlinePlaylistAdd size={40}/></button>
            </div>



        </div>
    )
}

export default Lista;