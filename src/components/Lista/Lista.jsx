import styles from './Lista.module.css';
import ItemList from "./ItemList/ItemList";
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../hooks/Aut';
import { useEffect, useState } from 'react';

function Lista() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    const handleCreateList = () => {
        navigate("/crear-lista");
    }

    useEffect(()=>{
        getLists();
    }, []);

    const getLists = () => {
        const user = getUser();
        const cons = async () => {
            const res = await fetch('http://localhost:4567/get-listas', { method: 'POST', body: JSON.stringify(user) });
            const datos = await res.json();
            setLista(datos);            
        }

        cons();
    }


    return (
        <div className={styles.container}>            
            <div>
                {lista.map((lista) => {                    
                    return (
                        <ItemList key={lista.ID} nombre={lista.nombre} cantidad={lista.cantidad} visibilidad={lista.privacidad} />
                    );
                })};                
            </div>

            <div className={styles.containerBtn}>
                {/* <button onClick={handleCreateList} className={styles.btn}><MdOutlinePlaylistAdd size={40} /></button> */}
                <button onClick={handleCreateList} className={styles.btn}><MdOutlinePlaylistAdd size={40} /></button>
            </div>

        </div>
    )
}

export default Lista;