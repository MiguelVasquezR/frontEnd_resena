import styles from './PublicacionForo.module.css';
import Interacciones from '../../Publicacion/Interacciones/Interacciones';
import { useEffect, useState } from "react";
import axios from 'axios';

function PublicacionForo({ IDForo}) {
    const [publicaciones, setPublicaciones] = useState([]);    

    useEffect(() => {
        handleGetPublicaciones();
    }, [setPublicaciones])

    const handleGetPublicaciones = () => {
        const functPublicaciones = async () => {
            const data = await axios.get(`https://${import.meta.env.VITE_DIR_IP}/publicaciones?IDForo=${IDForo}`);
            const p = await data.data;
            setPublicaciones(p);
        }
        functPublicaciones();
    }

    return (
        <div>
            {publicaciones ? publicaciones.map((publicacion, i) => {
                return (
                    <div className={styles.pub} key={i}>                        
                        <div className={styles.publicacionForo}>
                            <div className={styles.informationContainer}>
                                <div className={styles.imgContainer}>
                                    <img src={`https://${import.meta.env.VITE_DIR_IPP}/` + publicacion.foto + ".png"} alt="Img" className={styles.img} />
                                </div>
                                <div className={styles.infoContainer}>
                                    <h2 className={styles.h2}>{publicacion.nombre + " " + publicacion.paterno}</h2>
                                    <h3 className={styles.h3}>{publicacion.usuario}</h3>
                                </div>
                            </div>
                            <div className={styles.descriptionContainer}>
                                {publicacion.comentario}
                            </div>
                            <Interacciones />
                        </div>
                    </div>

                )
            }).reverse() : ""}
        </div>
    )
}

export default PublicacionForo;