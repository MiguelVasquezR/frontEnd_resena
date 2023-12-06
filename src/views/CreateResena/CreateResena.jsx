import styles from './CreateResena.module.css';
import Header from "../../components/Header/Header";
import { CiStar } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function CreateResena() {    
    const navigate = useNavigate();    
    const start = ["s1", "s2", "s3", "s4", "s5"];    
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [resena, setResena] = useState([]);

    const handleClic = (datos) =>{
        try{
            setResena(datos);
        }catch(error){
            console.log(error);
        }                
        
        // navigate('/');
    }

    const handleRellenarEstrella = (e) => {
        e.stopPropagation();
        const id = e.target.id                
    }    
    

    return (
        <div className={styles.containerMain}>
            <Header />
            <h2 style={{ margin: '12px', fontSize: "40px" }}>Escribe tu reseña</h2>

            <div className={styles.fotoContainer}>
                <img src="" alt="" className={styles.img} />
                <button className={styles.btnFoto}>Subir Foto</button>
            </div>

            <form action="" className={styles.form} onSubmit={handleSubmit(handleClic)}>
                <input type="text" placeholder='Nombre del Libro' {...register('libro', {required: true})} className={styles.input}/>
                <input type="text" placeholder='Nombre del autor' {...register('libro', {required: true})} className={styles.input}/>
                <input type="text" placeholder='Idioma' {...register('libro', {required: true})} className={styles.input}/>
                <input type="text" placeholder='Editorial' {...register('libro', {required: true})} className={styles.input}/>
            </form>

            <div className={styles.calificationContainer}>
                <h2 style={{ margin: '12px' }}>Calificación</h2>
                <div className={styles.calification}>                                    
                    <ul className={styles.ul}>
                        {
                         start.map((id, i) => { return <li className={styles.li} key={i}><CiStar key={i} id={id} size={100} style={{ margin: "2px" }} onClick={handleRellenarEstrella}/></li>})   
                        }
                    </ul>                                        
                </div>
            </div>

            <div className={styles.resenaContainer}>
                <h2 style={{ margin: '12px', fontSize: "30px" }}>Contenido de Reseña</h2>
                <textarea className={styles.textResena} placeholder='Escribe tu reseña' {...register('contenidoResena', {required: true})}></textarea>
            </div>

            <div className={styles.btnContainer}>
                <button type='submit' className={styles.btnPublicar}>Publicar</button>
            </div>

        </div>
    )
}

export default CreateResena;