import Header from "../../../components/Header/Header";
import PublicacionForo from "../../../components/Foro/PublicacionForo/PublicacionForo";
import styles from './ForoMain.module.css'


function ForoMain(props){
    const {nombreForo, cantidad, descripcion} = props;
    return(
        <div>
            <Header />

            <div className={styles.infoContainer}>
                <h2 className={styles.titulo}>{'Quijote'}</h2>
                <h3 className={styles.cant}>{'1500 usuarios'}</h3>
                <p className={styles.descripcion}>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, in! Necessitatibus nemo dolore ad ducimus, impedit error voluptatem modi, perferendis excepturi vel at unde fuga id explicabo quam. Perspiciatis, enim.'}</p>
                <div style={{position: 'relative', width:'100%', height:'40px'}}>
                    <button className={styles.btn}>Dejar Grupo</button>
                </div>
            </div>

            <div className={styles.publicationContainer}>
                <input type="text" placeholder="Publica" className={styles.tx}/>
                <button className={styles.btnPublica}>Publicar</button>
            </div>

            <div>
                <PublicacionForo />
            </div>
            

        </div>
    )
}

export default ForoMain;