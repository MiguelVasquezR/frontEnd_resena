import styles from './ItemBook.module.css';
import { FaBookBookmark } from 'react-icons/fa6';
import {getNombreAutores} from '../../hooks/Autores';
import { useEffect, useState } from 'react';

function ItemsBook({libro}) {    
    const { IDLibro, titulo, foto, numPag, fechaPublicacion, idioma, IDAutor, IDGenero, editorial } = libro;        
    const [persona, setPersona] = useState(null);

    const handleSeeBook = () =>{
        alert("Ver libro");
    }

    useEffect(() => {
        const nameA = async () => {            
            const res = await fetch(`http://192.168.1.67:4567/nombre-autores?id=${IDAutor}`, {method: 'GET'});            
            const data = await res.json();            
            setPersona(data);
        }
        nameA();
    }, [])
    

    return (
        <div key={titulo + IDAutor} className={styles.bookContainer} onClick={handleSeeBook}>


            <div className={styles.izquierdo}>
                <img src={'http://192.168.1.67:9000/'+ foto + ".png"} alt={foto} className={styles.img} />                        
            </div>

            <div className={styles.derecho}>
                <h3 className={`${styles.optionInformation} ${styles.destacar}`}>{titulo}</h3>
                <h3 className={styles.optionInformation}>{persona ? persona.nombre + " " + persona.paterno + " " +persona.materno : ''} </h3>
                <h3 className={styles.optionInformation}>{editorial} </h3>
                <h3 className={styles.optionInformation}>{idioma}</h3>
                <h3 className={styles.optionInformation}>{fechaPublicacion}</h3>
            </div>

        </div>
    );
}

export default ItemsBook;
