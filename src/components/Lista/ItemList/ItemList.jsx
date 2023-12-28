import { useEffect, useState } from 'react';
import styles from './ItemList.module.css'
import {FaHeart} from 'react-icons/fa';
import {MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../hooks/Aut';

function ItemList(props){
    const {IDUSUARIO, ID, nombre, cantidad, visibilidad, IDImage, onDelete} = props;               
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        fetch(`http://${import.meta.env.VITE_DIR_IP}:9000/getImages`).catch(err => {console.log("ERROR AL OBTENER LA FOTO");})
    }, [])


    const handleClicList = (e) =>{
        e.stopPropagation();
        navigate(`/vista-lista?id=${ID}&IDUSER=${IDUSUARIO}`);
    }

    const handleDelete  = (e) =>{
        e.stopPropagation();
        onDelete();        
    }        


    return(
        <div className={styles.container} onClick={handleClicList}>
            <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + IDImage + ".png"} alt={"lista_"+nombre} className={styles.img}/>
            <section className={styles.information}>
                <h2 className={styles.h2}>{nombre}</h2>
                <h2 className={styles.h2}>{cantidad + " Libros"}</h2>
                <h2 className={styles.h2}>{visibilidad}</h2>
            </section>

            {
                user.IDUsuario === IDUSUARIO ? 
                <MdDelete  size={30} onClick={handleDelete} color='white'/>
                :
                ""
            }
            
        </div>
    )
}

export default ItemList;