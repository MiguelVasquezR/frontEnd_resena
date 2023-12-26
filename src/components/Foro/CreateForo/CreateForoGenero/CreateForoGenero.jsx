import styles from './CreateForoGenero.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function CreateForoGenero() {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false);

    const handleClic = async (data) => {
        await axios.post(`http://${import.meta.env.VITE_DIR_IP}:4567/foro-crear`, data);
        window.location.reload(false);
    }

    return (
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.input} type="hidden" value={ 'Genero' } {...register('Opcion', { required: true })}/>
                <div className={styles.perfil}>
                    <div className={styles.fotoPerfil}></div>
                    <input className={styles.btnPerfil} type="submit" />
                </div>
                <div className={styles.camposTXS}>
                    <input className={styles.camposTX} type="text" placeholder={"Nombre Género"} {...register('Nombre', { required: true })}/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description} {...register('Descripcion', { required: true })}></textarea>
                <button type="submit" className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateForoGenero;