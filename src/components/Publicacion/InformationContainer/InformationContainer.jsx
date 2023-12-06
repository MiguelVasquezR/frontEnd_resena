import styles from './InformationContainer.module.css';

function InformationContainer(props){
    const {contenido} = props;
    return (
        <div className={styles.informationContainer}>
            <p className={styles.p}>{contenido}</p>
        </div>
    )
}

export default InformationContainer;