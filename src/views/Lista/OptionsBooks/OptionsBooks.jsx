import { useEffect, useState } from "react";
import { MdBookmarkAdded, MdBookmarkAdd } from 'react-icons/md';
import styles from './OptionsBooks.module.css';


function OptionsBooks({ IDLibro, titulo, foto, idioma, editorial, IDAutor }) {
    const [add, setAdd] = useState(true);
    const [autor, setAutor] = useState({});

    useEffect(() => {
        getAutor();
    }, [])

    const handleAddBook = () => {
        setAdd(!add)        
        const id = JSON.parse(localStorage.getItem('IDLista'));
        if (add) {
            fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/agregar-libros?idlista=${id.ID}&idLibro=${IDLibro}`, { method: 'POST' }).then(respuesta => { if (respuesta.ok) { console.log("Se ha agregado"); } }).catch(err => { console.log("Error al momento de hacer la petición"); })
        } else {
            fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/eliminar-libros?idlista=${id.ID}&idLibro=${IDLibro}`, { method: 'DELETE' }).then(respuesta => { }).catch(err => { })
        }

    }

    const getAutor = () => {
        const fetchAutor = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/nombre-autores?id=${IDAutor}`);
            const data = await res.json();
            setAutor(data);
        }
        fetchAutor();
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + foto + '.png'} alt="Portada Libro" className={styles.img} />
            </div>

            <div className={styles.infoContainer}>
                <h2 className={styles.h2}>{titulo}</h2>
                <h3 className={styles.h3}>{autor.nombre + " " + autor.paterno + " " + autor.materno}</h3>
                <h3 className={styles.h3}>{idioma}</h3>
            </div>

            {add ? <MdBookmarkAdd size={50} onClick={handleAddBook} className={styles.mark} /> : <MdBookmarkAdded size={50} onClick={handleAddBook} className={styles.mark} />}
        </div>
    );
}

export default OptionsBooks;

