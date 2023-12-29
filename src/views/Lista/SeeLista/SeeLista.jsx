
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import styles from './SeeLista.module.css'
import OptionsBooks from "../OptionsBooks/OptionsBooks";
import Loading from "../../../components/Loading/Loading";
import { MdDelete } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'
import imgLogo from '../../../../public/img/pluma.png';
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../hooks/Aut";

export default function SeeLista() {
    const [infoLista, setInfoLista] = useState([]);
    const searchParams = new URLSearchParams(location.search);
    const IDLista = searchParams.get('id');
    const IDUSUARIO = searchParams.get('IDUSER');
    const navigate = useNavigate();
    const [lista, setLista] = useState(null);
    const [infoOptionBook, setInfoOptionBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const user = getUser();

    useEffect(() => {
        handleGetBooks();
        handleInfoList();
        handlelist();
    }, [setLista, setInfoOptionBook])


    const handleClicResena = () => {
        navigate(`/add-book?id=${IDLista}`);
    }

    // Rellena el setInforLista de la tabla Lista
    const handleGetBooks = () => {
        const fetchBooks = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/libros-lista?IDLista=${IDLista}`, { method: 'GET' });
            const data = await res.json();
            if (res.ok) {
                setInfoLista(data);
                setLoading(false);
            }
        }
        fetchBooks();
    }

    const handlelist = () => {
        const fetchPerfil = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/get-lista-info?id=${IDLista}`, { method: 'GET' });
            const data = await res.json();
            setLista(data);
            setIsLoading(false);
        }
        fetchPerfil();
    }

    //Traer informacion de los liibros para rellenarlos
    const handleInfoList = () => {
        const fetchPerfil = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/optionBook?id=${IDLista}`, { method: 'GET' });
            const data = await res.json();
            console.log(data);
            setInfoOptionBook(data);
            setLoading(false);
        }
        fetchPerfil();
    }

    const [deletedIndex, setDeletedIndex] = useState(null);

    const renderOptionBook = (item, i) => {

        const handleDelte = () => {
            fetch(`https://${import.meta.env.VITE_DIR_IP}/eliminar-libros?idlista=${IDLista}&idLibro=${item.IDLibro}`, { method: 'DELETE' }).then(() => { setDeletedIndex(i) }).catch(err => { })
        }

        if (i === deletedIndex) {
            return null;
        }

        return (
            <div key={i} className={styles.containerOption}>
                <section className={styles.imagenContainer}>
                    <img src={`https://${import.meta.env.VITE_DIR_IPP}/` + item.Foto + ".png"} alt="Imagen Portada del Libro" className={styles.imgBook} />
                </section>

                <section className={styles.informationContainer}>
                    <h3 className={`${styles.texto} ${styles.autor}`}>{item.Titulo}</h3>
                    <h2 className={styles.texto}>{item.Nombre + " " + item.Paterno + " " + item.Materno}</h2>
                    <h2 className={styles.texto}>{item.NumPag}</h2>

                </section>

                {
                    user.IDUsuario === IDUSUARIO ?
                        <section className={styles.interactionsContainer}>
                            <MdDelete size={40} color="white" onClick={handleDelte} />
                        </section>
                        :
                        ""
                }


            </div>
        );
    }


    return (
        <div>
            <Header />

            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <div className={styles.containerInformacion}>
                            <div>
                                <img className={styles.img} src={lista ? `https://${import.meta.env.VITE_DIR_IPP}/` + lista.IDImagen + ".png" : ""} alt="Foto de perfil del foro" />
                            </div>

                            <div>
                                <h2 className={`${styles.text} ${styles.titulo}`}>{lista.nombre}</h2>
                                <h3 className={styles.text}>{lista.cantidad + " Libros"}</h3>
                                <h3 className={styles.text}>{lista.descripcion}</h3>
                            </div>
                        </div>

                        {
                            loading ?
                                <Loading />
                                :
                                infoLista.map((item, i) => {
                                    return (renderOptionBook(infoOptionBook[i], i));
                                })
                        }

                    </div>

            }


            {
                user.IDUsuario === IDUSUARIO ?
                    <div className={styles.container}>
                        <div onClick={handleClicResena} className={styles.btnResena}><IoIosAddCircleOutline size={200} /></div>
                    </div>
                    :
                    ""
            }




        </div>
    );
}