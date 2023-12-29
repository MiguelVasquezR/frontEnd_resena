import styles from './SelectGenero.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function SelectGenero() {

    const [bloqueo, setBloqueo] = useState(false);

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

    const titulos = ["Novela", "Cuento", "Poesía", "Memorias", "Romance", "Teatro", "Ciencia Ficción", "No ficción"];
    const [seleccionados, setSeleccionados] = useState([]);    
    
    const handleSelectionClic = (nombre) => {
        setSeleccionados(prevSeleccionados => {
            if (!prevSeleccionados.includes(nombre)) {
                return [...prevSeleccionados, nombre];
            } else {
                return prevSeleccionados.filter(item => item !== nombre);
            }
        });        
    }    

    const navigate = useNavigate();

    const handleRegister = async () => {
        setBloqueo(true)
        const headers ={
            'Content-type': 'application/json; charset=UTF-8'
        }
        if(seleccionados.length === 0){
            await axios.post(`https://${import.meta.env.VITE_DIR_IP}/usuario-genero`, "Sin genero", {headers});    
        }else{
            await axios.post(`https://${import.meta.env.VITE_DIR_IP}/usuario-genero`, JSON.stringify(seleccionados), {headers});
        }                        
        setTimeout(()=>{
            navigate("/");
        }, 1500);
    }   
    
    

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {imagenes.map((url, index) => (
                    <li className={`${styles.estilos} ${seleccionados.includes(titulos[index]) ? styles.seleccionado : ''}`} key={titulos[index]} onClick={() => handleSelectionClic(titulos[index])}>
                        <img src={url} alt={titulos[index]} className={styles.input} />
                        <h2 className={styles.tituloImage}>{titulos[index]}</h2>
                    </li>
                ))}
            </ul>
            <p className={styles.p}>No es necesario elegir un género</p>
            <button disabled={bloqueo} onClick={handleRegister} className={styles.btn}>Registrar</button>
        </div>
    )
}

export default SelectGenero;