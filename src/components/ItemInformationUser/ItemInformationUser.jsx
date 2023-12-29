import styles from './ItemInformationUser.module.css';
import { getPersona, getUser } from '../../hooks/Aut';
import { FaRegUserCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { FaCircleDollarToSlot } from 'react-icons/fa6';

function ItemInformationUser({ idUser }) {    
    const [datos, setDatos] = useState();    
    const [isLoading, setIsLoading] = useState(true);    

    useEffect(() => {
        getDatos();        
    }, [])    

    const getDatos = () => {
        const fetchDato = async () => {
            const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/get-perfil-user?IDuser=${idUser}`, { method: 'POST' })
            if (res.ok) {
                const data = await res.json();
                setDatos(data);
                setIsLoading(false);
            }
        }
        fetchDato();
    }

    return (
        <>
            {
                isLoading ?
                ""
                :
                <div className={styles.informationContainer}>
                    <div className={styles.imgContainer}>
                        {datos.foto ? <img src={`https://${import.meta.env.VITE_DIR_IPP}/` + datos.foto + ".png"} alt={'Pergil de ' + datos.nombre} className={styles.img} /> : <FaRegUserCircle size={40} color='white' />}
                    </div>
                    <div className={styles.informationUserContainer}>
                        <h3 className={styles.h3_nombre}>{datos.nombre + " " + datos.paterno + " " + datos.materno}</h3>
                        <h3 className={styles.h3_usuario}>{"@ " + datos.usuario}</h3>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemInformationUser;