import styles from './Generos.module.css'
import { getUser } from '../../../hooks/Aut';
import { useEffect, useState } from 'react';

function Generos({idUser}) {
    const [generos, setGeneros] = useState(null);

    const imagenes = [
        "../../img/generos/novela.png",
        "../../img/generos/cuento.png",
        "../../img/generos/poesia.png",
        "../../img/generos/memorias.png",
        "../../img/generos/romance.png",
        "../../img/generos/teatro.png",
        "../../img/generos/ciencia_ficcion.png",
        "../../img/generos/no_ficcion.svg",
    ];    


    useEffect(() => {
        handleGetGeneros();
    }, [])

    const handleGetGeneros = () =>{        
        const fetchGeneros = async () =>{
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/generos-usuario?IDUsuario=${idUser}`);
            const data = await res.json();                    
            setGeneros(data);
        }
        fetchGeneros();
    }

    function nm(IDGenero) {
        if (IDGenero === 'ciencia_ficcion') {
            return "Ciencia Ficción";
        } else if (IDGenero === 'cuento') {
            return "Cuento";
        } else if (IDGenero === 'ensayo') {
            return "Ensayo";
        } else if (IDGenero === 'memorias') {
            return "Memorias";
        } else if (IDGenero === 'no_ficcion') {
            return "No ficción";
        } else if (IDGenero === 'novela') {
            return "Novela";
        } else if (IDGenero === 'poesia') {
            return "Poesía";
        } else if (IDGenero === 'romance') {
            return "Romance";
        } else if (IDGenero === 'teatro') {
            return "Teatro";
        }
    }

    return (
        <div className={styles.generos}>
            <h2 className={styles.h2Generos}>Géneros Favoritos</h2>
            <ul className={styles.ul}>
                {generos ? generos.map((genero, i) => {
                    return (<div key={i} className={styles.containerGenerosFav}>
                            <img src={"../../img/generos/"+ genero.IDGenero + ".png"} alt='Imagen del genero' className={styles.img}/> 
                            <p style={{fontSize: 12}}>{nm(genero.IDGenero)}</p> 
                        </div>);
                }) : <p style={{marginLeft: 10}}>Agrega tus géneros favoritos</p>}
            </ul>
        </div>
    )
}

export default Generos;