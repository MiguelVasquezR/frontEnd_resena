import { useEffect, useState } from "react";
import { MdBookmarkAdded, MdBookmarkAdd } from 'react-icons/md';
import styles from './OptionBooks.module.css';


function OptionsBooks({ IDLibro, titulo, foto, idioma, editorial, IDAutor, IDLista}) {
    const [add, setAdd] = useState(true);
    const [autor, setAutor] = useState({});

    useEffect(() => {
        getAutor();
    }, [])

    const handleAddBook = () => {
        setAdd(!add)        
        if (add) {
            fetch(`https://${import.meta.env.VITE_DIR_IP}/agregar-libros?idlista=${IDLista}&idLibro=${IDLibro}`, { method: 'POST' }).then(respuesta => { if (respuesta.ok) { console.log("Se ha agregado"); } }).catch(err => { console.log("Error al momento de hacer la petición"); })
        } else {
            fetch(`https://${import.meta.env.VITE_DIR_IP}/eliminar-libros?idlista=${IDLista}&idLibro=${IDLibro}`, { method: 'DELETE' }).then(respuesta => { }).catch(err => { })
        }

    }

    const getAutor = () => {
        const fetchAutor = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/nombre-autores?id=${IDAutor}`);
            const data = await res.json();
            setAutor(data);
        }
        fetchAutor();
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={`https://${import.meta.env.VITE_DIR_IPP}/` + foto + '.png'} alt="Portada Libro" className={styles.img} />
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

