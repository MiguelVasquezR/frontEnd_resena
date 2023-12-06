import styles from './CreateForoGenero.module.css';

function CreateForoGenero() {
    return (
        <div>
            <h2 className={styles.titulo}>Datos</h2>
            <form action="" className={styles.form}>
                <div className={styles.perfil}>
                    <div className={styles.fotoPerfil}></div>
                    <input className={styles.btnPerfil} type="submit" />
                </div>
                <div className={styles.camposTXS}>
                    <input className={styles.camposTX} type="text" placeholder={"Nombre Género"} />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripción del Foro' className={styles.description}></textarea>
                <button className={styles.btnCrear}>Crear</button>
            </form>
        </div>
    )
}

export default CreateForoGenero;