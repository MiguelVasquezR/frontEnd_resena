import { useEffect, useState } from 'react';
import styles from './ItemForo.module.css';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ItemForo({ foro }) {
    const navigate = useNavigate();

    const { IDForo, Descripcion, Nombre, Foto, Cant} = foro;

    const handleClicForo = () => {
        navigate(`/foro-main?IDForo=${IDForo}&nombre=${Nombre}&cant=${Cant}&des=${Descripcion}&IDFoto=${Foto}`);        
    }

    useEffect(() => {
        fetch(`https://${import.meta.env.VITE_DIR_IPP}/getImages`).catch(err => { console.log("Error, ", err); })
    }, [Foto])


    return (
        <div key={Nombre} className={styles.container} onClick={handleClicForo}>
            <div className={styles.imgContainer}>
                <div className={styles.superior}>
                    <img src={`https://${import.meta.env.VITE_DIR_IPP}/` + Foto + '.png'} alt="Imagen Portada Foro" className={styles.img} />

                    <div className={styles.izquierda}>
                        <h2 className={styles.titulo}>{Nombre}</h2>                    
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.descripcion}>{Descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemForo;