
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Loading from "../../../components/Loading/Loading";
import styles from './SeeLista.module.css'
import OptionsBooks from "../OptionsBooks/OptionsBooks";

export default function SeeLista() {
    const [loading, setLoading] = useState(true);
    const [infoLista, setInfoLista] = useState([]);    
    const searchParams = new URLSearchParams(location.search);
    const IDLista = searchParams.get('id');

    useEffect(() => {
        handleGetBooks();
    }, [])
    

    const handleGetBooks = () => {
        const fetchBooks = async () => {
            const res = await fetch(`http://192.168.1.67:4567/libros-lista?IDLista=${IDLista}`, { method: 'GET' });
            const data = await res.json();
            if (res.ok) {                
                setInfoLista(data);
                setLoading(false);
            }
        }
        fetchBooks();
    }



    return (
        <div>
            <Header />

            <div className={styles.containerInformacion}>
                <div>
                    <img className={styles.img} src="" alt="Foto de perfil del foro" />
                </div>

                <div>
                    <h2 className={styles.text}>Nombre Lista</h2>
                    <h3 className={styles.text}>Cantidad Libros</h3>
                    <h3 className={styles.text}>Descripción</h3>
                </div>
            </div>

            {
                loading ?
                    <Loading />
                    :
                    infoLista.map((item) => {                        
                        return <p>{item.IDLibroLista + " " +item.IDLista + " " + item.IDLibro}</p>
                    })
            }



        </div>
    );
}