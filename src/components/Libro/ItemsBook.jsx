import styles from './ItemBook.module.css';
import { FaBookBookmark } from 'react-icons/fa6';

function ItemsBook({libro}) {    
    const { IDLibro, titulo, foto, numPag, fechaPublicacion, idioma, IDAutor, IDGenero, editorial } = libro;        

    const handleSeeBook = () =>{
        alert("Ver libro");
    }

    console.log(foto);

    return (
        <div className={styles.bookContainer} onClick={handleSeeBook}>


            <div className={styles.izquierdo}>
                <img src={'http://localhost:9000/'+ foto + ".png"} alt={foto} className={styles.img} />
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
                <h3 className={styles.optionInformation}>Nombre: {titulo}</h3>
                <h3 className={styles.optionInformation}>Autor: {IDAutor} </h3>
                <h3 className={styles.optionInformation}>Editorial: {editorial} </h3>
                <h3 className={styles.optionInformation}>Idioma: {idioma}</h3>
                <h3 className={styles.optionInformation}>Año: {fechaPublicacion}</h3>
            </div>

        </div>
    );
}

export default ItemsBook;
