import { useEffect, useState } from 'react';
import styles from './ItemList.module.css'
import {FaHeart} from 'react-icons/fa';
import {MdDelete } from 'react-icons/md';

function ItemList(props){
    const {nombre, cantidad, visibilidad, IDImage, onDelete} = props;               

    const handleClicList = (e) =>{
        e.stopPropagation();
        alert("Abrir lista")
    }

    const handleDelete  = (e) =>{
        e.stopPropagation();
        onDelete();        
    }    

    return(
        <div className={styles.container} onClick={handleClicList}>
            <img src={"http://localhost:9000/" + IDImage} alt={"lista_"+nombre} className={styles.img}/>
            <section className={styles.information}>
                <h2 className={styles.h2}>{nombre}</h2>
                <h2 className={styles.h2}>{cantidad + " Libros"}</h2>
                <h2 className={styles.h2}>{visibilidad}</h2>
            </section>
            <MdDelete  size={30} onClick={handleDelete} color='white'/>
        </div>
    )
}

export default ItemList;