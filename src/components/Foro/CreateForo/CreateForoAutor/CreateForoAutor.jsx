import styles from './CreateForoAutor.module.css';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import axios from 'axios';
import { getUser } from '../../../../hooks/Aut';
import { useNavigate } from 'react-router-dom';
import {MdOutlinePhotoCamera} from 'react-icons/md'

function CreateForoAutor(){
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false);
    const navigate = useNavigate();    

    
    const [option, setOption] = useState('Autor');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripciom] = useState('');


    const handleClic = async (e) => {
        e.preventDefault();
        const user = getUser();

        const form = {
            Opcion: option,
            Descripcion: descripcion,
            Nombre: nombre,
            Foto: localStorage.getItem('IDImagen'),
            IDUsuario: user.IDUsuario
        }        
        await axios.post(`http://${import.meta.env.VITE_DIR_IP}:4567/foro-crear`, JSON.stringify(form));
        localStorage.removeItem('IDImagen');
        navigate("/Foro");
    }

    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const uploadImage = () => {
        const handleUploadImage = (e) => {
            e.stopPropagation();
            e.preventDefault();
            const file = e.target.files[0];
            const URLfile = URL.createObjectURL(file);
            setImageUrl(URLfile);        
            const formData = new FormData();
            formData.set('image', file);
            const fetchUploadImage = async () => {
                const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:9000/image/post`, { method: 'POST', body: formData });
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
        )
    }






    const handleClic1 = async (data) => {
        await axios.post(`http://${import.meta.env.VITE_DIR_IP}:4567/foro-crear`, data);
        navigate("/Foro")
    }

    return(
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.camposTX} type="hidden" value={ 'Autor' } {...register('Opcion', { required: true })}/>
                {uploadImage()}
                <div className={styles.camposTXS}>
                <input className={styles.camposTX} type="text" placeholder='Nombre Autor' value={nombre} required/>
                
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description} {...register('Descripcion', { required: true })}></textarea>
                <button type='submit' className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateForoAutor;