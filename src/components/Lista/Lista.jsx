import styles from './Lista.module.css';
import ItemList from "./ItemList/ItemList";
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../hooks/Aut';
import { useEffect, useState } from 'react';

function Lista() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);
    const [imagenes, setImagenes] = useState([]);

    const handleCreateList = () => {
        navigate("/crear-lista");
    }    

    const getLists = () => {
        const user = getUser();        
        const cons = async () => {
            const res = await fetch(`http://localhost:4567/get-listas?IDUsuario=${user.IDUsuario}`, { method: 'POST'});
            const datos = await res.json();      
            setLista(datos);     
            getImages(user.IDUsuario);
        }
        cons();                                        
    }    

    useEffect(() => {
        getLists();
    }, []);

    const getImages = async (ID) =>{        
        const res = await fetch(`http://localhost:9000/image/get/${ID}`);
        const data = await res.json();                
        setImagenes(data);                      
    }

    const handleDeleteList = (listID, IDImangen) => {        
        const fetchDeleteList = async () => {
            await fetch(`http://localhost:4567/eliminar-lista?id=${listID}`, { method: 'DELETE' });            
        }
        fetchDeleteList();
        const fetchDeleteImage = async () => {
            await fetch(`http://localhost:9000/image/delete/${IDImangen}`, { method: 'DELETE' });            
        }
        fetchDeleteImage();
        setLista(prevLista => prevLista.filter(lista => lista.ID !== listID));
        setImagenes(prevImagen => prevImagen.filter(lista => lista.ID !== IDImangen));
    }    

    function renderLists() {
        return (
            lista.map((listaItem, index) => {
                return (
                    <ItemList
                        IDImage={imagenes[index]}
                        key={listaItem.ID} 
                        id={listaItem.ID}
                        onDelete={() => handleDeleteList(listaItem.ID, imagenes[index])}
                        nombre={listaItem.nombre}
                        cantidad={listaItem.cantidad}
                        visibilidad={listaItem.privacidad}
                    />
                );
            })
        )
    }

    return (
        <div className={styles.container}>            
            <div>
                {lista.length ? renderLists() : <h2 style={{textAlign: 'center', margin: '40px 0'}}>Crea una Lista</h2>}
            </div>
            <div className={styles.containerBtn}>
                <button onClick={handleCreateList} className={styles.btn}><MdOutlinePlaylistAdd size={40} /></button>
            </div>
        </div>
    )

}

export default Lista;