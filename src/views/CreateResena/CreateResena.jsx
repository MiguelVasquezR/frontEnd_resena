import styles from './CreateResena.module.css';
import Header from "../../components/Header/Header";

import { useNavigate } from 'react-router-dom';
import { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { getUser } from '../../hooks/Aut';

import PhotoPerfil from '../../components/SelectPerfilPhoto/PhotoPerfil';
import Formulario from './Formulario/Formulario';
import Calificacion from './Calificacion/Calificacion';
import Resena from './CampoResena/Resena';

import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";

function CreateResena() {
    const navigate = useNavigate();
    const [dataResena, setDataResena] = useState('');
    const [dataFormulario, setDataFormulario] = useState(null);
    const [dataCalificacion, setDataCalificacion] = useState(0);    

    const resenaData = (resena) => {
        setDataResena(resena);
    }

    const formularioData = (resena) => {
        setDataFormulario(resena);
    }

    const calificacionData = (resena) => {
        setDataCalificacion(resena);
    }

    const handleClic = () => {
        const fotoID = localStorage.getItem('IDImagen')        
        const IDUsuario = getUser();

        const rensenaCompleta = {
            FotoID: fotoID,
            contenido: dataResena,
            nombreLibro: dataFormulario.libro,
            nombreAutor: dataFormulario.autor,
            idioma: dataFormulario.idioma,
            editorial: dataFormulario.editorial,
            calificacion: dataCalificacion
        }        

        const fetchResena = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/crear-resena?IDUsuario=${IDUsuario.IDUsuario}`, { method: 'POST', body: JSON.stringify(rensenaCompleta) });
            const data = await res.json();

            if (data.Msj === 'Guardado') {
                navigate("/")
            } else {
                alert("Hubo un error");
            }

        }

        fetchResena();


    }

    return (
        <div className={styles.containerMain}>
            <Header />

            {
                IsLoging() ?
                    <div className={styles.containerA}>
                        <h2 style={{ margin: '20px', fontSize: "30px" }}>Escribe tu reseña</h2>

                        <PhotoPerfil />
                        <Formulario onClick={formularioData} />
                        <Calificacion onClick={calificacionData} />
                        <Resena onClick={resenaData} />

                        <div className={styles.btnContainer}>
                            <button onClick={handleClic} className={styles.btnPublicar}>Publicar</button>
                        </div>

                    </div>
                    :
                    <IS />
            }



        </div>
    )
}

export default CreateResena;
