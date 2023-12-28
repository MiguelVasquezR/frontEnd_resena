import styles from './Lista.module.css';
import ItemList from "./ItemList/ItemList";
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../hooks/Aut';
import { useEffect, useState } from 'react';

function Lista({ idUser }) {
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const user = getUser();

    const handleCreateList = () => {
        navigate(`/crear-lista?id=${idUser}`);
    }

    const getLists = () => {
        const cons = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/get-listas?IDUsuario=${idUser}`, { method: 'POST' });
            const datos = await res.json();
            setLista(datos);
        }
        cons();
    }

    useEffect(() => {
        getLists();
    }, []);

    const handleDeleteList = (listID, IDImangen) => {
        const fetchDeleteList = async () => {
            await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/eliminar-lista?id=${listID}`, { method: 'DELETE' });
        }
        fetchDeleteList();
        const fetchDeleteImage = async () => {
            await fetch(`http://${import.meta.env.VITE_DIR_IP}:9000/image/delete/${IDImangen}`, { method: 'DELETE' });
        }
        fetchDeleteImage();
        setLista(prevLista => prevLista.filter(lista => lista.ID !== listID));
        setImagenes(prevImagen => prevImagen.filter(lista => lista.ID !== IDImangen));
    }

    function renderLists() {
        const user = getUser();
        return (
            lista.map((listaItem, index) => {
                if (user.IDUsuario !== idUser && listaItem.privacidad === 'publico') { //Usuarios visitantes
                    return (
                        <ItemList
                            IDUSUARIO={idUser}
                            ID={listaItem.ID}
                            IDImage={listaItem.IDImagen}
                            key={listaItem.ID}
                            id={listaItem.ID}
                            onDelete={() => handleDeleteList(listaItem.ID, imagenes[index])}
                            nombre={listaItem.nombre}
                            cantidad={listaItem.cantidad}
                            visibilidad={listaItem.privacidad}
                        />
                    );
                }else if(user.IDUsuario === idUser){
                    return (
                        <ItemList
                            IDUSUARIO={idUser}
                            ID={listaItem.ID}
                            IDImage={listaItem.IDImagen}
                            key={listaItem.ID}
                            id={listaItem.ID}
                            onDelete={() => handleDeleteList(listaItem.ID, imagenes[index])}
                            nombre={listaItem.nombre}
                            cantidad={listaItem.cantidad}
                            visibilidad={listaItem.privacidad}
                        />
                    );
                }
            })
        )
    }

    return (
        <div className={styles.container}>
            <div>
                {lista.length ? renderLists() : <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Crea una Lista</h2>}
            </div>

            {
                user.IDUsuario === idUser ?
                    <div className={styles.containerBtn}>
                        <button onClick={handleCreateList} className={styles.btn}><MdOutlinePlaylistAdd size={40} /></button>
                    </div>
                    :
                    ""
            }

        </div>
    )

}

export default Lista;