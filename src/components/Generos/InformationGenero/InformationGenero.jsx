import { useEffect, useState } from 'react';
import styles from './InformationGenero.module.css';

function InformationGenero(props) {    
    const { imgUrl, nombre } = props;
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch(`http://localhost:4567/genero?Nombre=${nombre}`);
            const data = await res.json();
            setDatos(data);
        }
        fetchEvents();                
    }, [nombre])

    return (
        <div className={styles.informationContainer}>
            <div className={styles.derecho}>
                <div className={styles.imgContainer}>
                    <img src={imgUrl} alt={"informacionContainer-genero-"} className={styles.img} />
                </div>
                <div className={styles.titulo}>
                    <h2>{datos.Nombre}</h2>
                </div>
            </div>
            <div className={styles.information}>
                <p className={styles.p}>{datos.Descripcion}</p>
            </div>
        </div>
    )
}

export default InformationGenero;