import styles from './CreateForoAutor.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

function CreateForoAutor(){
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false);

    const placeHolder = ["Género", "Idioma"];

    const handleClic = async (data) => {
        await axios.post('http://192.168.100.6:4567/foro-crear', data);
        window.location.reload(false);
    }

    return(
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.camposTX} type="hidden" value={ 'Autor' } {...register('Opcion', { required: true })}/>
                <div className={styles.perfil}>
                    <div className={styles.fotoPerfil}></div>
                    <input className={styles.btnPerfil} />
                </div>
                <div className={styles.camposTXS}>
                <input className={styles.camposTX} type="text" placeholder='Nombre Autor' {...register('Nombre', { required: true })}/>
                {
                    placeHolder.map((titulo, i) => {
                        return(
                            <input className={styles.camposTX} type="text" placeholder={titulo}/>
                        )
                    })
                }
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description} {...register('Descripcion', { required: true })}></textarea>
                <button type='submit' className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateForoAutor;