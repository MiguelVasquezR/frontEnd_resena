import Header from "../../../components/Header/Header";
import OptionsBooks from "../OptionsBooks/OptionsBooks";
import styles from './ChoseBook.module.css';
import { useNavigate } from "react-router-dom";
import { IsLoging } from "../../../hooks/IsLogin";
import IS from "../../../Alerts/IniciaSesión/IS";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";


function ChoseBook() {
    const navigate = useNavigate();
    const [libros, setLibros] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        handleGetBook();
    }, [isLoading]);

    const handleSendBooks = () => {        
        navigate("/perfil")

    }

    const handleGetBook = () =>{
        const fetchBooks = async () =>{
            const res = await fetch('http://192.168.1.67:4567/libros');
            const data = await res.json();
            setLibros(data);                    
            setIsLoading(false);        
        }
        fetchBooks();
    }


    return (

        <div className={styles.containter}>
            <Header />
            {
                IsLoging() ?
                    <div className={styles.containerContent}>
                        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>ELIGE TUS LIBROS</h2>                    
                        {
                            isLoading ?
                            <Loading />   
                            :
                            libros.map((libro, i) => {
                                return(
                                    <OptionsBooks 
                                    key={i}
                                    IDLibro = {libro.IDLibro} 
                                    titulo = {libro.titulo}
                                    foto = {libro.foto}
                                    idioma = {libro.idioma}
                                    editorial = {libro.editorial}
                                    IDAutor = {libro.IDAutor}
                                    />
                                );
                            })
                        }

                        <div className={styles.btnContainer}>
                            <button onClick={handleSendBooks} className={styles.btn}>Crear</button>
                        </div>

                    </div>
                    :
                    <IS />
            }

        </div>

    );
}

export default ChoseBook;