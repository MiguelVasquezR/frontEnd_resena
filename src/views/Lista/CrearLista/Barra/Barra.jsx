import { useState } from 'react';
import styles from './Barra.module.css';
import { CiSearch } from 'react-icons/ci'

function Barra(){
    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = (e) =>{
        e.preventDefault();

        alert(busqueda);
    }

    const handleOnChange = (e) =>{
        setBusqueda(e.target.value);
    }


    return (
        <div>
            <form className={styles.form}>
                <input type="text" placeholder='Busqueda' className={styles.busqueda} onChange={handleOnChange}/>
                <div className={styles.search} onClick={handleBusqueda}>
                    <CiSearch size={30} color='white' />
                </div>
            </form>
        </div>

    );

}

export default Barra;