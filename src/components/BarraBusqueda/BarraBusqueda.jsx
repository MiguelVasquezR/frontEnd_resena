import styles from './BarraBusqueda.module.css';
import {CiSearch} from 'react-icons/ci';

function BarraBusqueda({b}) {
    return (
        <div className={styles.busquedaContainer}>
            <input type="text" className={styles.input} placeholder={'Buscar ' + b} />
            <CiSearch style={{margin: "10px ", borderRadius: 50}} size={28} color='white'/>
        </div>
    );
}

export default BarraBusqueda;