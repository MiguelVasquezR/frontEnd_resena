import styles from './ItemInformationBook.module.css';
import imgP from '../../../public/img/portada_libros/quijote.jpg';

function ItemInformationBook(props){
    const {urlImg, titulo, autor, editorial} = props;
    return(        
        <div className={styles.informationContainer}>            
            <div className={styles.informationBookContainer}>
                <h3 className={styles.h3_titulo}>El Quijote</h3>
                <h3 className={styles.h3_autor}>{"Cervantes"}</h3>                
            </div>
            <div className={styles.imgContainer}>
                <img src={imgP} alt={"fotoPerfil-"+titulo} className={styles.img}/>
            </div>
        </div>        
    )
}

export default ItemInformationBook;