import styles from './ItemInformationBook.module.css';
import imgP from '../../../public/img/portada_libros/quijote.jpg';
import { useEffect } from 'react';

function ItemInformationBook(props){
    const {urlImg, titulo, autor, editorial} = props;

    useEffect(() => {

        imagenes();
    }, []);    


    const imagenes = () => {
        const fetchUploadImage = async () =>{   
            console.log("hola");         
            await fetch(`http://192.168.100.6:9000/image/${urlImg}`, {method: 'GET'});                        
        }    

        fetchUploadImage();
    }

    return(        
        <div className={styles.informationContainer}>            
            <div className={styles.informationBookContainer}>
                <h3 className={styles.h3_titulo}>{titulo}</h3>
                <h3 className={styles.h3_autor}>{autor}</h3>                
                <h3 className={styles.h3_autor}>{editorial}</h3>
            </div>
            <div className={styles.imgContainer}>
                <img src={"http://192.168.100.6:9000/" + urlImg + ".png"} alt={"fotoPerfil-"+titulo} className={styles.img}/>
            </div>
        </div>        
    )
}

export default ItemInformationBook;