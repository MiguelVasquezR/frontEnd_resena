import styles from './Autor.module.css';

import Header from '../../components/Header/Header';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import { useEffect, useState } from 'react';
import ItemsBook from '../../components/Libro/ItemsBook';
import { useParams } from 'react-router-dom';

import { RiseLoader } from 'react-spinners';


function Autor() {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get('img');
    const nombreA = searchParams.get('nombre');

    const [autor, setAutor] = useState('');
    const [libros, setLibros] = useState([]);
    const [isLoging, setIsLoging] = useState(true);

    useEffect(() => {
        fetch(`http://${import.meta.env.VITE_DIR_IPP}/getImages`).then(res => { console.log(res); }).catch(err => console.log("Error", err));
        if (isLoging) {
            datosAutor();
        }
    }, [isLoging])

    useEffect(() => {
        if (autor && autor.IDAutor) {
            datosLibros(autor.IDAutor);
        }
    }, [autor]);

    const datosAutor = () => {
        const fetchAutor = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/autor-datos?nombre=${nombreA}`, { method: 'POST' });
            const data = await res.json();
            setAutor(data);
            setIsLoging(false);
        }
        fetchAutor();
    }



    const datosLibros = (ID) => {
        const fetchLibros = async (ID) => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/libros/autor?autor=${ID}`);
            const data = await res.json();
            setLibros(data);
        }
        fetchLibros(ID);
    }

    const cargando = () => {
        return (
            <div key={1} className={styles.cargando}>
                <RiseLoader
                    color={'#006edf'}
                    loading={isLoging}
                    cssOverride={{
                        display: "block",
                        margin: "0 auto",
                        borderColor: "red",
                    }}
                    size={20}
                    speedMultiplier={.8}
                />
                <h2 className={styles.msj}>Cargando</h2>
            </div>

        );
    }




    return (
        <div className={styles.autorContainer}>
            <Header />

            {
                isLoging ?
                    cargando()
                    :
                    <div>
                        <div className={styles.informationContainer}>
                            <div className={styles.superior}>
                                <div className={styles.imgContainer}>
                                    <img src={url} alt="Foto del autor" className={styles.img} />
                                </div>
                                <div className={styles.datosContainer}>
                                    <h3 className={styles.datos}>{autor.nombre + " " + autor.paterno + " " + autor.materno}</h3>
                                    <h3 className={styles.datos}>{autor.nacionalidad}</h3>
                                    <h3 className={styles.datos}>{autor.nacimiento}</h3>
                                    <h3 className={styles.datos}>{autor.deceso}</h3>
                                </div>
                            </div>
                            <div className={styles.biografiaContainer}>
                                <h3>Biografía</h3>
                                <p className={styles.biografia}>{autor.biografia}</p>
                            </div>
                        </div>

                        <div className={styles.booksOptions}>
                            {libros ?
                                libros.map((libro) => {
                                    return (<ItemsBook key={libros.IDLibro} libro={libro} />)
                                })
                                :
                                ""
                            }
                        </div>
                    </div>
            }

        </div>
    )
}

export default Autor;