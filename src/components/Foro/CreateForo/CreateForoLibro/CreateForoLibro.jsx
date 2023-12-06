import styles from './CreateForoLibro.module.css';

function CreateFotoLibro(){

    const placeHolder = ["Titulo Libro", "Nombre Autor", "Género", "Idioma", "Editorial"];

    return(
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form}>
                <div className={styles.perfil}>
                    <div className={styles.fotoPerfil}></div>
                    <input className={styles.btnPerfil} type="submit"/>
                </div>
                <div className={styles.camposTXS}> 
                {
                    placeHolder.map((titulo, i) => {
                        return(
                            <input className={styles.camposTX} type="text" placeholder={titulo}/>
                        )
                    })
                }
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description}></textarea>
                <button className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateFotoLibro;