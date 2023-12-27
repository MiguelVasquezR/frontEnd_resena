import ItemOption from "../../ItemOption/ItemOption";
import styles from './MenuGeneros.module.css';
import { useNavigate } from "react-router-dom";

function MenuGeneros() {
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

    const titulos = ["Novela", "Cuento", "Poesia", "Memorias", "Romance", "Teatro", "Ciencia Ficción", "No Ficción"];

    const navigate = useNavigate();
    const handleGenero = (url, nombre) =>{           
        navigate(`/novela?img=${url}&genero=${nombre}`);
    }    

    return (
        <>
            <div className={styles.contGeneros}>
                <h2 className={styles.h2}>Géneros</h2>
                <ul className={styles.ul}>
                    {imagenes.map((url, index) => (
                        <ItemOption
                            key={"genenero-item-"+index} 
                            imgUrl={url} 
                            nombre={titulos[index]} 
                            handleGenero={() => handleGenero(url, titulos[index])}
                        />
                    ))}

                </ul>
            </div>
        </>
    );
}

export default MenuGeneros;