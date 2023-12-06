import styles from './ItemBook.module.css';
import { FaBookBookmark } from 'react-icons/fa6';

function ItemsBook(props) {
    const { urlImg, datosLibro, calification } = props;
    const url = "../../../public/img/portada_libros/quijote.jpg";


    const handleSeeBook = () =>{
        alert("Ver libro");
    }

    return (
        <div className={styles.bookContainer} onClick={handleSeeBook}>


            <div className={styles.izquierdo}>
                <img src={url} alt={datosLibro} className={styles.img} />
                <div>
                    <h3 style={{color:'white'}} >Calificación</h3>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>
                    <FaBookBookmark color='white' style={{margin: "5px 2px"}}/>                
                </div>
            </div>

            <div className={styles.derecho}>
                <h3 className={styles.optionInformation}>Nombre: El Quijote</h3>
                <h3 className={styles.optionInformation}>Autor: Miguel de Cervantes </h3>
                <h3 className={styles.optionInformation}>Editorial: Alfaguara </h3>
                <h3 className={styles.optionInformation}>Idioma: Español</h3>
                <h3 className={styles.optionInformation}>Año: 1600</h3>
            </div>

        </div>
    );
}

export default ItemsBook;
