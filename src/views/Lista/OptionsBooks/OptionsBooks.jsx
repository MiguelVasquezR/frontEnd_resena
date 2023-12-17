import { useState } from "react";
import {MdBookmarkAdded, MdBookmarkAdd} from 'react-icons/md';
import styles from './OptionsBooks.module.css';


function OptionsBooks(){
    const [add, setAdd] = useState(false);

    const handleAddBook = () =>{
        setAdd(!add);
    }

    return(
        <div className={styles.container}>

            <div className={styles.containerImg}>
                <img src="" alt="" className={styles.img}/>
            </div>

            <div className={styles.infoContainer}>
                <h2 className={styles.h2}>Nombre del Libro dasdas asdasd asdasd</h2>
                <h3 className={styles.h3}>Autor</h3>
                <h3 className={styles.h3}>Idioma</h3>
            </div>

            {add ? <MdBookmarkAdded size={50} onClick={handleAddBook} className={styles.mark}/> : <MdBookmarkAdd size={50} onClick={handleAddBook} className={styles.mark}/>}

        </div>
    );
}

export default OptionsBooks;

