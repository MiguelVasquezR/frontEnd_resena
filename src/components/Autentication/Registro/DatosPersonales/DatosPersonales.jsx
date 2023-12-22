import styles from './DatosPersonales.module.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function DatosPersonales({clickHijo}){
    const { register, handleSubmit, formState: { erros } } = useForm();

    const handleClic = async (data) =>{                
        await axios.post('http://192.168.1.67:4567/usuario-personales', data);
        clickHijo(1);
    }

    console.log(erros)

    return(
        <div className={styles.container}>
            <h2 className={styles.titulo}>Datos Personales</h2>

            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input className={styles.input} type="text" placeholder='Nombre' {...register('nombre',{required: true})}/>
                <input className={styles.input} type="text" placeholder='Apellido Paterno' {...register('paterno',{required: true})}/>
                <input className={styles.input} type="text" placeholder='Apellido Materno' {...register('materno',{required: true})}/>
                <input className={styles.input} type="date" {...register('nacimiento',{required: true})} />
                <button type='submit' className={styles.btn}>Continuar</button>
            </form>

        </div>
    )
}

export default DatosPersonales;