import Header from "../../components/Header/Header";
import styles from './Configuration.module.css';
import {RiMoonClearLine, RiMoonClearFill} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5';
import { useForm } from "react-hook-form";

function Configuration() {    
    const { register, handleSubmit, formState: { erros } } = useForm();        

    const handleNewDatos = (data) =>{        
        console.log(data);
    }

    // const handleNewRedSocial = (data) =>{
    //     alert("data")
    //     console.log(data);
    // }

    // const handleAddRedSocial = (data) =>{
    //     console.log(data);
    // }



    return (
        <>
            <Header />            

            <div className={styles.informationContainer}>
                <h2 style={{fontSize: 40}}>Información</h2>
                <form action="" className={styles.form} onSubmit={handleSubmit(handleNewDatos)}>
                    <input type="text" placeholder="Nombre" className={styles.input} {...register('nombre', {required:true})}/>
                    <input type="text" placeholder="Apellido Paterno" className={styles.input} {...register('paterno', {required:true})}/>
                    <input type="text" placeholder="Apellido Materno" className={styles.input} {...register('materno', {required:true})}/>
                    <input type="date" placeholder="Fecha Nacimiento" className={styles.input} {...register('nacimiento', {required:true})}/>
                    <input type="text" placeholder="Nombre Usuario" className={styles.input} {...register('usuario', {required:true})}/>
                    <input type="password" placeholder="Password" className={styles.input} {...register('password', {required:true})}/>
                    <button type="submit" className={styles.btnPlus}>Actualizar</button>
                </form>
            </div>

            {/* <div className={styles.redesContainer}>
                <h2>Redes Sociales</h2>
                <IoAddCircleOutline size={60}/>
                <div>
                    <form action="" onSubmit={handleSubmit(handleNewRedSocial)} className={styles.form}>
                        <input type="text" placeholder="Ingresa URL de tu red" {...register('link', {required: true})} className={styles.input}/>
                        <button type="submit" className={styles.btnPlus}>Agregar</button>
                    </form>
                </div>
            </div> */}

            {/* <div className={styles.temaContainer}>
                <h2>Tema</h2>
                <div className={styles.optionTema}>                    
                    <RiMoonClearLine size={40}/>
                    <RiMoonClearFill size={40}/>
                </div>
            </div> */}

            <div className={styles.btnsPlus}>                
                <button className={styles.btnPlus}>Ayuda</button>
                <button className={styles.btnPlus}>Cerrar Sesión</button>
            </div>

        </>
    )
}

export default Configuration;