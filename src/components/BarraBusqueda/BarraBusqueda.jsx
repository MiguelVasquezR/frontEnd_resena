import { useState } from 'react';
import styles from './BarraBusqueda.module.css';
import { CiSearch } from 'react-icons/ci';

function BarraBusqueda({ b, search }) {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
        setValue(e.target.value);        
    }

    const searchUser = (e, opt) => {
        if (opt === 'enter' && e.key === 'Enter') {
            getUsuariosOpciones();
        } else if (opt === 'clic') {
            getUsuariosOpciones();
        }
    }

    const getUsuariosOpciones = async () => {               
        const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/getUsuarios?usuario=${value}`, { method: 'GET' })
        if (res.ok) {
            const data = await res.json();            
            search(data);
        }
    }

    return (
        <div className={styles.busquedaContainer}>
            <input type="text" className={styles.input} placeholder={'Buscar ' + b} onChange={onChangeValue} value={value} onKeyDown={(e) => { searchUser(e, 'enter') }} />
            <CiSearch style={{ margin: "10px ", borderRadius: 50 }} size={28} color='white' onClick={(e) => { searchUser(e, 'clic') }} />
        </div>
    );
}

export default BarraBusqueda;