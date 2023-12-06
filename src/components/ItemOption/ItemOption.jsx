import styles from './ItemOption.module.css';

function ItemOption(props){
    const {imgUrl, nombre, handleGenero} = props;
    return(
        <li className={styles.li} onClick={handleGenero} >
            <img src={imgUrl} alt={nombre} className={styles.img}/>
            <h2 className={styles.h2}>{nombre}</h2>
        </li>
    )
}

export default ItemOption;