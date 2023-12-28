import styles from './InformacionPerfil.module.css';
import { addPersonne, getUser, getPersona } from '../../hooks/Aut';
import { FaRegUserCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react';

function ItemInformationUser({ idUser }) {
    const [bandImg, setBandImg] = useState(false);
    const [datos, setDatos] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const getDatos = () => {
        const fetchDato = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/get-perfil-user?IDuser=${idUser}`, { method: 'POST' })

            if (res.ok) {
                const data = await res.json();
                setDatos(data);
                setIsLoading(false);
            }
        }
        fetchDato();
    }


    useEffect(() => {
        getDatos();
        fetch(`http://${import.meta.env.VITE_DIR_IP}:9000/image/${datos.Foto}`)
            .catch(err => { console.log("ERROR AL OBTENER LA FOTO"); })        
    }, [isLoading])

    return (
        <>
            {
                isLoading ?
                    <div>Hola</div>
                    :
                    <div className={styles.container}>
                        <div className={styles.imgContainer}>
                            {datos.foto ? <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + datos.foto + ".png"} alt={'Perfil de ' + datos.nombre} className={`${styles.img}`} /> : <FaRegUserCircle size={90} color='white' />}
                        </div>
                        <div className={styles.informationUserContainer}>
                            <h3 className={`${styles.h3}`}>{datos.nombre + " " + datos.paterno + " " + datos.materno}</h3>
                            <h3 className={`${styles.userH3} `}>{"@" + datos.usuario}</h3>
                        </div>
                    </div>
            }
        </>

    )
}

export default ItemInformationUser;