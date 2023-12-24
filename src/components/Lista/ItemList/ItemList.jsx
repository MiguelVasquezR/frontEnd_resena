import { useEffect, useState } from 'react';
import styles from './ItemList.module.css'
import {FaHeart} from 'react-icons/fa';
import {MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function ItemList(props){
    const {ID, nombre, cantidad, visibilidad, IDImage, onDelete} = props;               
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://192.168.1.67:9000/getImages`).catch(err => {console.log("ERROR AL OBTENER LA FOTO");})
    }, [])


    const handleClicList = (e) =>{
        e.stopPropagation();
        navigate(`/vista-lista?id=${ID}`);        
    }

    const handleDelete  = (e) =>{
        e.stopPropagation();
        onDelete();        
    }        


    return(
        <div className={styles.container} onClick={handleClicList}>
            <img src={"http://192.168.1.67:9000/" + IDImage + ".png"} alt={"lista_"+nombre} className={styles.img}/>
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