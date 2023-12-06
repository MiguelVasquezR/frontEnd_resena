import styles from './SelectGenero.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SelectGenero() {

    const imagenes = [
        "../../img/generos/novela.png",
        "../../img/generos/cuento.png",
        "../../img/generos/poesia.png",
        "../../img/generos/memorias.png",
        "../../img/generos/romance.png",
        "../../img/generos/teatro.svg",
        "../../img/generos/ciencia_ficcion.png",
        "../../img/generos/no_ficcion.svg",
    ];

    const titulos = ["Novela", "Cuento", "Poesia", "Memorias", "Romance", "Teatro", "Ciencia Ficción", "No ficción"];

    const estilos = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const optSelect = [];

    const handleSelectionClic = (e) => {
        const opt = e.target.id;                
        if (!optSelect.includes(opt)){
            optSelect.push(opt);
        }else{
            delete optSelect[optSelect.indexOf(opt)];
        }        
    }

    const handleRegister = async (data) =>{
        console.log("Entro al envio")        
        await axios.post('http://localhost:4567/usuario-genero', optSelect);
        navigate('/');
    }

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {imagenes.map((url, index) => (
                    <li style={estilos} key={index} onClick={handleSelectionClic}>
                        <input type="checkbox" className={styles.input} />
                        <label id={titulos[index]} style={{ backgroundImage: `url(${url})` }} className={styles.label} htmlFor={"option_" + index}></label>
                        <h2 className={styles.tituloImage}>{titulos[index]}</h2>
                    </li>
                ))}
            </ul>
            <p className={styles.p}>No es necesario elegir un género</p>
            <button onClick={handleRegister} className={styles.btn}>Registrar</button>
        </div>
    )
}

export default SelectGenero;