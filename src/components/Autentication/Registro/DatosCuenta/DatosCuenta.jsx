import axios from 'axios';
import styles from './DatosCuenta.module.css';
import { useForm } from 'react-hook-form';

function DatosCuenta({ clickHijo }) {
    const { register, handleSubmit, formState: { erros } } = useForm();

    const handleClic = async (data) => {        
        console.log("Entro al envio")        
        await axios.post('http://localhost:4567/usuario-cuenta', data);        
        clickHijo(2);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Datos Cuenta</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.input} type="text" placeholder='Usuario' {...register('usuario', { required: true })} />
                <input className={styles.input} type="text" placeholder='Correo' {...register('correo', { required: true })} />
                <input className={styles.input} type="text" placeholder='Contraseña' {...register('password', { required: true })} />
                <input className={styles.input} type="text" placeholder='Repite tu contraseña' />
                <button type='submit' className={styles.btn}>Continuar</button>
            </form>
        </div>
    )
}

export default DatosCuenta;