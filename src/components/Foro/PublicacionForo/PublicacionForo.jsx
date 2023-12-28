import styles from './PublicacionForo.module.css';
import Interacciones from '../../Publicacion/Interacciones/Interacciones';
import { useEffect, useState } from "react";
import axios from 'axios';
import { getUser, getPersona } from '../../../hooks/Aut'

function PublicacionForo(){

    const [publicaciones, setPublicaciones] = useState([]);
    const [userid, setUserid] = useState([]);
    const [username, setUsername] = useState([]);
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);

    useEffect(() => {
        handleGetPublicaciones();
        // console.log(foros);
    }, [setPublicaciones])

    const handleGetPublicaciones = () => {
        const functPublicaciones = async () => {
            const data = await axios.get('http://192.168.100.6:4567/publicaciones');
            const p = await data.data;
            setPublicaciones(p);
        }
        functPublicaciones();

        const user = getUser();
        const persona = getPersona();
    }

    const getNombre = (id) =>{
      const fetchEvent = async () =>{
        try{
          const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/persona?id=${id}`, {method: 'GET'});
          const persona = await res.json();
          setNombre(persona.nombre);
        }catch(error){
          console.log("Error obtener persona" , error);
        }
      }
      fetchEvent();
    }

    const getApellido = (id) =>{
      const fetchEvent = async () =>{
        try{
          const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/persona?id=${id}`, {method: 'GET'});
          const persona = await res.json();
          setApellido(persona.paterno);
        }catch(error){
          console.log("Error obtener persona" , error);
        }
      }
      fetchEvent();
    }

    const getUsername = (id) =>{
      const fetchEvent = async () =>{
        try{
          const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/usuarioById?IDUsuario=${id}`, {method: 'GET'});
          const user = await res.json();
          setUsername(user.usuario);
          setUserid(user.IDPersona);
        }catch(error){
          console.log("Error obtener usuario" , error);
        }
      }
      fetchEvent();
    }

    return(
        <div>
            {publicaciones ? publicaciones.map((publicacion) => {
                return (
                    <div>
                        <br /><br />
                        <div className={styles.publicacionForo}>
                            <div className={styles.informationContainer}>
                                <div className={styles.imgContainer}>
                                    <img src="" alt="" className={styles.img}/>
                                </div>
                                <div className={styles.infoContainer}>
                                    <h2 className={styles.h2}>{getUsername(publicacion.IDUsuario)} {getNombre(userid)} {nombre} {getApellido(userid)} {apellido}</h2>
                                    <h3 className={styles.h3}>{username}</h3>
                                </div>
                            </div>

                            <div className={styles.descriptionContainer}>
                                {publicacion.Comentario}
                            </div>

                            <Interacciones />
                        </div>
                    </div>

                )
            }) : ""}
        </div>
    )
}

export default PublicacionForo;