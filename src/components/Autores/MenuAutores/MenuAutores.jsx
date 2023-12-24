import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MenuAutores.module.css';
import ItemOption from '../../ItemOption/ItemOption';
import { useNavigate } from 'react-router-dom';

function MenuAutores() {

    const autores = [
        "../../img/foto_autores/GMarquez.png",
        "../../img/foto_autores/ICalvino.png",
        "../../img/foto_autores/JSteinbeck.png",
        "../../img/foto_autores/CDrummond.png",
        "../../img/foto_autores/IAllende.png",
        "../../img/foto_autores/JBorges.png",
        "../../img/foto_autores/VWoolf.png",
        "../../img/foto_autores/JCortazar.gif",
        "../../img/foto_autores/AStorni.png",
        "../../img/foto_autores/WSoyinka.png",
        "../../img/foto_autores/LHughes.png",
        "../../img/foto_autores/JRulfo.png",
        "../../img/foto_autores/MUnamuno.png",
        "../../img/foto_autores/MCervantes.png",
        "../../img/foto_autores/OPaz.png",
        "../../img/foto_autores/FKafka.png",
        "../../img/foto_autores/ATan.png",
        "../../img/foto_autores/JRiberyro.png",
        "../../img/foto_autores/APizarnik.png",
        "../../img/foto_autores/AFrank.png",
        "../../img/foto_autores/CFuentes.png",
        "../../img/foto_autores/MVargas.png",
        "../../img/foto_autores/AChristie.png",
        "../../img/foto_autores/PNeruda.png",
        "../../img/foto_autores/RCastellanos.png",
        "../../img/foto_autores/LEsquivel.png",
        "../../img/foto_autores/GMistral.png"
    ];

    const nombres = [
        "Gabriel García",
        "Italo Calvino",
        "John Steinbeck",
        "Carlos	Drummond",
        "Isabel	Allende",
        "Jorge Borges",
        "Virginia Woolf",
        "Julio Cortázar",
        "Alfonsina Storni",
        "Wole Soyinka",
        "Langston Hughes",
        "Juan Rulfo",
        "Miguel Unamuno",
        "Miguel	Cervantes",
        "Octavio Paz",
        "Franz Kafka",
        "Amy Tan",
        "Julio Ribeyro",
        "Alejandra Pizarnik",
        "Anne Frank",
        "Carlos Fuentes",
        "Mario Vargas",
        "Agatha Christie",
        "Pablo Neruda",
        "Rosario Castellanos",
        "Laura Esquivel",
        "Gabriela Mistral"

    ];

    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const handleClic = () => {
        navigate("/autor");
    }

    const handleAutor = (url, nombre) => {
        navigate(`/autor?img=${url}&nombre=${nombre}`);
    }

    return (
        <div className={styles.autorsContainer}>
            <h2 className={styles.title}>Autores</h2>
            <Slider className={styles.carrusel} {...settings}>
                {autores.map((url, index) => (
                    <ItemOption imgUrl={url} nombre={nombres[index]} handleGenero={() => handleAutor(url, nombres[index])} />
                ))}
            </Slider>
        </div>
    );
}

export default MenuAutores;
