import styles from './CreateForoGenero.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {MdOutlinePhotoCamera} from 'react-icons/md'
import { getUser } from '../../../../hooks/Aut';

function CreateForoGenero({option}) {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
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
        await axios.post(`https://${import.meta.env.VITE_DIR_IP}/foro-crear`, JSON.stringify(form));
        localStorage.removeItem('IDImagen');
        navigate("/Foro");
    }


    const onChangeNombre = (e) => {
        setNombre(e.target.value);
    }

    const onChangeDescripcion = (e) => {
        setDescripciom(e.target.value);
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
                const res = await fetch(`https://${import.meta.env.VITE_DIR_IPP}/image/post`, { method: 'POST', body: formData }); //asdsa
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



    return (
        <div className={styles.containerMain}>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form} onSubmit={handleClic}>
                <input className={styles.input} type="hidden" value={'Genero'} />
                {uploadImage()}
                <div className={styles.camposTXS}>
                    <input onChange={onChangeNombre} className={styles.camposTX} type="text" placeholder={"Nombre de " + option} value={nombre} required />
                </div>
                <textarea onChange={onChangeDescripcion} cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description} value={descripcion} required></textarea>
                <button type="submit" className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateForoGenero;