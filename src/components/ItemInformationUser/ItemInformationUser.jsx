import styles from './ItemInformationUser.module.css';
// import imgP from '../../../public/img/autores/borges.jpg';

function ItemInformationUser(props){
    const {urlImg, nombre, nombreUser, calificacion} = props;
    return(        
        <div className={styles.informationContainer}>
            <div className={styles.imgContainer}>
                <img src={'imgP'} alt={"fotoPerfil-" + nombreUser} className={styles.img}/>
            </div>
            <div className={styles.informationUserContainer}>
                <h3 className={styles.h3_nombre}>{"Miguel Vásquez"}</h3>
                <h3 className={styles.h3_usuario}>{"@Miguel_VR12"}</h3>
            </div>
        </div>        
    )
}

export default ItemInformationUser;