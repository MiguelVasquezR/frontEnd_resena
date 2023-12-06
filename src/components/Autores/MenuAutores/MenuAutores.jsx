import styles from './MenuAutores.module.css';
import ItemOption from '../../ItemOption/ItemOption';
import { useNavigate } from 'react-router-dom';

function MenuAutores(){    
    const autores = [
        "../../img/foto_autores/AmparoD.jpeg",
        "../../img/foto_autores/borges.jpeg",
        "../../img/foto_autores/CarlosF.jpeg",
        "../../img/foto_autores/Cervantes.jpeg",
        "../../img/foto_autores/Cortazar.jpeg",
        "../../img/foto_autores/ElenaGarro.jpeg",
        "../../img/foto_autores/ElenaPoniarowka.jpeg",
        "../../img/foto_autores/Flaubert.jpeg",
        "../../img/foto_autores/Gabo.jpeg",
        "../../img/foto_autores/GiocondaBelli.jpeg",
        "../../img/foto_autores/JuanRulfo.jpeg",
        "../../img/foto_autores/OctavioPaz.jpeg",
        "../../img/foto_autores/Pizarnik.jpeg",
        "../../img/foto_autores/Poe.jpeg",
        "../../img/foto_autores/TitaValencia.jpeg",
        "../../img/foto_autores/WilliamS.jpeg",        
    ];

    const nombres = [
        "Amparo Davila",
        "Luis Borges",
        "Carlos Fuentes",
        "Miguel Cervantes",
        "Julio Cortázar",
        "Elena Garro",
        "Elena Poniatowska",
        "Gustave Flaubert",
        "Gabriel Marquez", 
        "Gioconda Belli",
        "Juan Rulfo",
        "Octavio Paz",
        "Alejandra Pizarnik",
        "Allan Poe",
        "Tita Valencia",
        "William Shakespeare"
    ];        

    const navigate = useNavigate();
    const handleClic = () =>{
        navigate("/genero");
    }

    return (
        <>
            <div className={styles.autorsContainer}>
                <h2 style={{fontSize: "50px", textAlign: "center", color:"white"}}>Autores</h2>
                <ul className={styles.ul}>
                    {autores.map((url, index) => (
                        <ItemOption key={index} imgUrl={url} nombre={nombres[index]} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MenuAutores;