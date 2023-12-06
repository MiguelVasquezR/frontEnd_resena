import styles from './ItemConfiguration.module.css';

function ItemConfiguration(props){
    const {placeholder} = props;
    const handleClic = () =>{
        alert("Clic");
    }

    return(
        <div className={styles.itemContainer}>
            <input type="text" className={styles.itemTX} placeholder={placeholder}/>
            <input type="submit" value={"Editar"} className={styles.itemSubmit} onClick={handleClic}/>
        </div>
    )
}

export default ItemConfiguration;

