import styles from './ItemBook.module.css';
import { FaBookBookmark } from 'react-icons/fa6';
import {getNombreAutores} from '../../hooks/Autores';
import { useEffect, useState } from 'react';

function ItemsBook({libro, nombre}) {    
    const { IDLibro, titulo, foto, numPag, fechaPublicacion, idioma, IDAutor, IDGenero, editorial } = libro;        

    const handleSeeBook = () =>{
        alert("Ver libro");
    }
    

    return (
        <div className={styles.bookContainer} onClick={handleSeeBook}>


            <div className={styles.izquierdo}>
                <img src={'http://192.168.100.6:9900/'+ foto + ".png"} alt={foto} className={styles.img} />
                
                <div>
                    <h3 style={{color:'white'}} >Calificación</h3>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>                
                </div>

            </div>

            <div className={styles.derecho}>
                <h3 className={`${styles.optionInformation} ${styles.destacar}`}>{titulo}</h3>
                <h3 className={styles.optionInformation}>{nombre} </h3>
                <h3 className={styles.optionInformation}>{editorial} </h3>
                <h3 className={styles.optionInformation}>{idioma}</h3>
                <h3 className={styles.optionInformation}>{fechaPublicacion}</h3>
            </div>

        </div>
    );
}

export default ItemsBook;
