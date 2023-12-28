import { useState, useRef, useEffect } from "react";
import styles from './PhotoPerfil.module.css';
import { MdOutlinePhotoCamera, MdSouth } from 'react-icons/md';
import { addPersonne, getPersona, getUser } from "../../hooks/Aut";
import { useNavigate } from "react-router-dom";

function PhotoPerfil({band}) {    
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);       
    const navigate = useNavigate();
    
    const handleUploadImage = (e) =>{
        e.stopPropagation();
        e.preventDefault();    
        const file = e.target.files[0];
        const URLfile = URL.createObjectURL(file);
        setImageUrl(URLfile);                
        const formData = new FormData();
        formData.set('image', file);            
        const fetchUploadImage = async () =>{            
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IPP}/image/post`, {method: 'POST', body: formData});                        
            const respuesta = await res.json();            
            window.localStorage.setItem('IDImagen', respuesta.IDImagen);            
        }
        fetchUploadImage();
    }

    const handleSavedImage = () => {
        const user = getUser();                
        const han = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/foto-usuario?IDUsuario=${user.IDUsuario}&Foto=${localStorage.getItem('IDImagen')}`, {method: 'PUT'});
            if  (res.ok){
                const data = await res.json();
                localStorage.removeItem('localUserStorage')
                localStorage.setItem('localUserStorage', JSON.stringify(data));
                navigate("/perfil");
            }
        }
        han();
    }

    return (
        <div className={styles.selectContainer}>
            {imageUrl ? <img className={styles.imgPerfil} src={imageUrl} alt="Vista previa" /> : <div className={`${styles.imgPerfil} ${styles.containerFalseImg}`}><MdOutlinePhotoCamera size={60} /></div>}
            <input name="image" type="file" onChange={handleUploadImage} style={{ display: 'none' }} ref={fileInputRef} />
            <button className={styles.btnPerfil} onClick={(e) => { e.preventDefault(); fileInputRef.current.click() }}>Seleccionar Imagen</button>
            {band ? <button onClick={handleSavedImage} className={styles.btnPerfil}>Cambiar Foto</button> : ''}
        </div>
    );
}

export default PhotoPerfil;
