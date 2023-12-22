import styles from './Autor.module.css';

import Header from '../../components/Header/Header';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import { useEffect, useState } from 'react';
import ItemsBook from '../../components/Libro/ItemsBook';
const searchParams = new URLSearchParams(location.search);

function Autor({datos}){    
    const nombreA = searchParams.get('nombre');
    const url = searchParams.get('img');
    const [autor, setAutor] = useState('');
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        datosAutor();                
    }, [])    

    useEffect(() => {
        if (autor && autor.IDAutor) {
            datosLibros(autor.IDAutor);
        }
    }, [autor]);

    const datosAutor = () =>{
        const fetchAutor = async () =>{
            const res = await fetch(`http://192.168.1.67:4567/autor-datos?nombre=${nombreA}`, {method: 'POST'});            
            const data = await res.json();                        
            setAutor(data);            
        }
        fetchAutor();        
    } 
    

    const datosLibros = (ID) =>{
        const fetchLibros = async (ID) =>{
            const res = await fetch(`http://192.168.1.67:4567/libros/autor?autor=${ID}`);
            const data = await res.json();                   
            setLibros(data);
        }
        fetchLibros(ID);        
    }
    



    return (
        <div className={styles.autorContainer}>
            <Header />
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
            <BarraBusqueda b="libro"/>

            <div className={styles.booksOptions}>
                {libros.map((libro) => {
                    return(<ItemsBook key={libros.IDLibro} libro={libro}/>)
                })}
            </div>





        </div>
    )
}

export default Autor;