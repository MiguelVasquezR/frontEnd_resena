import { useState } from 'react';
import styles from './ItemList.module.css'
import {FaHeart} from 'react-icons/fa';

function ItemList(props){
    const {urlPortada, nombre, cantidad, visibilidad} = props;
    const [band, setBand] = useState(false);
    const [color, setColor] = useState('white');


    const handleLike = (e) =>{
        e.stopPropagation();
        if(band === false){
            setColor('red');
            setBand(true);
        }else if(band ===  true){
            setColor('white');
            setBand(false);
        }
    }

    const handleClicList = () =>{
        alert("Entrar a lista");
    }


    return(
        <div className={styles.container} onClick={handleClicList}>
            <img src={urlPortada} alt={"lista_"+nombre} className={styles.img}/>
            <section className={styles.information}>
                <h2 className={styles.h2}>{nombre}</h2>
                <h2 className={styles.h2}>{cantidad + " Libros"}</h2>
                <h2 className={styles.h2}>{visibilidad}</h2>
            </section>
            <FaHeart size={30} onClick={handleLike} color={color}/>
        </div>
    )
}

export default ItemList;