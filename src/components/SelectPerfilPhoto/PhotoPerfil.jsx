import { useState, useRef, useEffect } from "react";
import styles from './PhotoPerfil.module.css';
import { MdOutlinePhotoCamera } from 'react-icons/md';

function PhotoPerfil({onClick}) {    
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);       
    
    const handleUploadImage = (e) =>{
        e.stopPropagation();
        e.preventDefault();    
        const file = e.target.files[0];
        const URLfile = URL.createObjectURL(file);
        setImageUrl(URLfile);                
        const formData = new FormData();
        formData.set('image', file);            
        const fetchUploadImage = async () =>{            
            const res = await fetch('http://192.168.100.6:9000/image/post', {method: 'POST', body: formData});                        
            const respuesta = await res.json();            
            window.localStorage.setItem('IDImagen', respuesta.IDImagen);
        }
        fetchUploadImage();
    }


    

    return (
        <div className={styles.selectContainer}>
            {imageUrl ? <img className={styles.imgPerfil} src={imageUrl} alt="Vista previa" /> : <div className={`${styles.imgPerfil} ${styles.containerFalseImg}`}><MdOutlinePhotoCamera size={60} /></div>}
            <input name="image" type="file" onChange={handleUploadImage} style={{ display: 'none' }} ref={fileInputRef} />
            <button className={styles.btnPerfil} onClick={(e) => { e.preventDefault(); fileInputRef.current.click() }}>Seleccionar Imagen</button>
        </div>
    );
}

export default PhotoPerfil;
