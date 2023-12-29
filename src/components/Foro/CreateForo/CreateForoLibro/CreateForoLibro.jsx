import styles from './CreateForoLibro.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateFotoLibro(){
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const placeHolder = ["Nombre Autor", "Género", "Idioma", "Editorial"];

    const handleClic = async (data) => {
        await axios.post(`https://${import.meta.env.VITE_DIR_IP}/foro-crear`, data);
        navigate("/Foro");
    }

    return(
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.camposTX} type="hidden" value={ 'Libro' } {...register('Opcion', { required: true })}/>
                <div className={styles.perfil}>
                    <div className={styles.fotoPerfil}></div>
                    <input className={styles.btnPerfil} />
                </div>
                <div className={styles.camposTXS}>
                <input className={styles.camposTX} type="text" placeholder='Titulo Libro' {...register('Nombre', { required: true })}/>
                {
                    placeHolder.map((titulo, i) => {
                        return(
                            <input className={styles.camposTX} type="text" placeholder={titulo}/>
                        )
                    })
                }
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description} {...register('Descripcion', { required: true })}></textarea>
                <button type="submit" className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateFotoLibro;