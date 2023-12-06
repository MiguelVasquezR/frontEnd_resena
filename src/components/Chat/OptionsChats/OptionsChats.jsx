import styles from './OptionsChats.module.css';

function OptionsChats(props){
    const {urlImg, nombre} = props;
    return(
        <div className={styles.optionChat}>
            <img src={urlImg} alt={"optionsChats"+nombre} className={styles.img}/>            
            <h2 className={styles.h2}>{nombre}</h2>
        </div>
    )
}

export default OptionsChats;