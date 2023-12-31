import styles from './DatosPersonales.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

function DatosPersonales({ clickHijo }) {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [failed, setFailed] = useState(false);
    const [bloqueo, setBloqueo] = useState(false);

    const handleClic = async (data) => {        
        setBloqueo(true);        
        try {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/usuario-personales`, {method: 'POST', body: JSON.stringify(data)} );                  
            if(res.ok){                
                clickHijo(1);
            }
            
        } catch (err) {
            alert(err)
            setFailed(true);
            setBloqueo(false);
            
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Datos Personales</h2>

            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.input} type="text" placeholder='Nombre' {...register('nombre', { required: true })} />
                <input className={styles.input} type="text" placeholder='Apellido Paterno' {...register('paterno', { required: true })} />
                <input className={styles.input} type="text" placeholder='Apellido Materno' {...register('materno', { required: true })} />
                <input className={styles.input} type="date" {...register('nacimiento', { required: true })} />
                <button disabled={bloqueo} type='submit' className={styles.btn}>Continuar</button>
            </form>

            {                
                failed ? <p
                style={{
                    color: 'white',
                    fontSize: '18px', 
                    margin: '10px 0'

                }}
                >Tenemos un error con el servidor, intentelo más tarde</p> : <p></p>
            }

        </div>
    )
}

export default DatosPersonales;