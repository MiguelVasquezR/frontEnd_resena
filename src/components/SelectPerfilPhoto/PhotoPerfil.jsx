import { useState, useRef } from "react";
import styles from './PhotoPerfil.module.css';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import axios from "axios";


function PhotoPerfil() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const objectUrl = URL.createObjectURL(file);
        setImageUrl(objectUrl);        

        const procesarImagen = async (selectedFile) => {
            if (selectedFile) {
                try {
                    const blob = await fetch(imageUrl).then((response) => response.blob());
                    const formData = new FormData();
                    formData.append('imagen', blob, selectedFile.name);
                    const response = await axios.post('http://localhost:4567/create-lista-img', formData);
                    console.log('Respuesta del backend:', response.data);
                } catch (error) {
                    console.error('Error al cargar la imagen al backend:', error);
                }
            }
        }

        // procesarImagen(selectedFile);
    }

    return (
        <div className={styles.selectContainer}>
            {imageUrl ? <img className={styles.imgPerfil} src={imageUrl} alt="Vista previa" /> : <div className={`${styles.imgPerfil} ${styles.containerFalseImg}`}><MdOutlinePhotoCamera size={60} /></div>}
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef} />
            <button className={styles.btnPerfil} onClick={(e) => { e.preventDefault(); fileInputRef.current.click() }}>Seleccionar Imagen</button>
        </div>

    );
}

export default PhotoPerfil;