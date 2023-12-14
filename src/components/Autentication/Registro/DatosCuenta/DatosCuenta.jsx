import axios from 'axios';
import styles from './DatosCuenta.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function DatosCuenta({ clickHijo }) {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [error, setError] = useState(false)

    const handleClic = async (data) => {    
        setError(false);
        if(data.rPassword === data.password){
            await axios.post('http://localhost:4567/usuario-cuenta', data);
            clickHijo(2);            
        }else{
            setError(true);
        }                 
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Datos Cuenta</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.input} type="text" placeholder='Usuario' {...register('usuario', { required: true })} />
                <input className={styles.input} type="email" placeholder='Correo' {...register('correo', { required: true })} />
                <input className={styles.input} type="password" placeholder='Contraseña' {...register('password', { required: true })} />
                <input className={`${styles.input} ${error ? styles.error : ''}`} type="password" placeholder='Repite tu contraseña' {...register('rPassword', {required: true})}/>
                <button type='submit' className={styles.btn}>Continuar</button>
            </form>            
        </div>
    )
}

export default DatosCuenta;