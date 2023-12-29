import styles from './AddBook.module.css'
import OptionsBooks from './OptionBooks';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import Header from '../../../components/Header/Header';

export default function AddBook(){
    const [isLoading, setIsLoading] = useState(true)
    const [libros, setLibros] = useState(null)
    const searchParams = new URLSearchParams(location.search);
    const IDLista = searchParams.get('id');


    useEffect(() => {
        handleGetBook();
    }, [])


    const handleGetBook = () =>{
        const fetchBooks = async () =>{
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/libros`);
            const data = await res.json();
            setLibros(data);                    
            setIsLoading(false);        
        }
        fetchBooks();
    }


    return(
        <div>
            <Header />
            <h2 style={{textAlign: 'center', fontSize: 30, margin: '12px 0'}}>Selecciona tus libros</h2>
            {
                isLoading ?
                <Loading /> 
                :
                libros.map((libro, i)=>{
                    return <OptionsBooks  
                        key={i}
                        IDLibro = {libro.IDLibro} 
                        titulo = {libro.titulo}
                        foto = {libro.foto}
                        idioma = {libro.idioma}
                        editorial = {libro.editorial}
                        IDAutor = {libro.IDAutor}
                        IDLista = {IDLista}
                    />
                })
            }
        </div>
    );
}