import styles from './ItemInformationBook.module.css';
import { useEffect, useState } from 'react';

function ItemInformationBook(props) {
    const { urlImg, titulo, autor, editorial } = props;
    const [isUpload, setIsUpload] = useState(false);    

    useEffect(() => {
        fetch(`https://${import.meta.env.VITE_DIR_IPP}/image/${urlImg}`, { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la red");
                } else {
                    setIsUpload(true);
                }
            }).catch(error => {
                if (error.message === 'Failed to fetch') {
                    console.error('Error de red: No se pudo completar la solicitud');
                } else {
                    console.error('Error de fetch:', error);
                }
                setIsUpload(false);
            })
            
    }, []);


    return (
        <div className={styles.informationContainer}>
            <div className={styles.informationBookContainer}>
                <h3 className={styles.h3_titulo}>{titulo}</h3>
                <h3 className={styles.h3_autor}>{autor}</h3>
                <h3 className={styles.h3_autor}>{editorial}</h3>
            </div>
            <div className={styles.imgContainer}>
                <img
                    src={isUpload ? `https://${import.meta.env.VITE_DIR_IPP}/${urlImg}` + '.png' : ''}
                    alt={`fotoPerfil-${titulo}`}
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default ItemInformationBook;