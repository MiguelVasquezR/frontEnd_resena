import styles from './Follow.module.css';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import ItemFollow from './ItemFollow/ItemFollow';

import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";
import Loading from '../Loading/Loading';


function Follow() {
    const [option, setOption] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id')
    const [seguidores, setSeguidores] = useState([]);
    const [seguidos, setSeguidos] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const handleClicOption = (e) => {
        if (e.target.id === 'seguidos') {
            setOption(false)
        } else if (e.target.id === 'seguidores') {
            setOption(true)
        }        
    }    

    useEffect(()=>{
        setIsLoading(true);
        getData();
    }, [option])

    const getData = () => {
        if (option) {
            const seg = async () => {
                const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/seguidos?id=${id}`)
                if (res.ok) {
                    const data = await res.json();
                    setSeguidos(data);
                    setIsLoading(false);
                }
            }
            seg();            
        } else {
            const seg = async () => {
                const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/seguidores?id=${id}`)
                if (res.ok) {
                    const data = await res.json();
                    setSeguidores(data);
                    setIsLoading(false);                    
                }
            }
            seg();            
        }
    }    


    return (
        <>
            <Header />
            {
                IsLoging() ?
                    <div>
                        <ul className={styles.ul}>
                            <li className={`${!option ? styles.selected : ""}`} id='seguidos' onClick={handleClicOption}>Seguidos</li>
                            <li className={`${!option ? "" : styles.selected}`} id='seguidores' onClick={handleClicOption}>Seguidores</li>
                        </ul>

                        <div className={styles.followsContainer}>
                            {
                                isLoading ?
                                    <Loading /> :

                                    option ?
                                        seguidos.map((seguido, i) => {                                            
                                            return <ItemFollow s={1} id={id} idUser={seguido.IDUsuario} key={i} foto={seguido.foto} nombre={seguido.nombre + " " + seguido.paterno + " " + seguido.materno} usuario={seguido.usuario} />
                                        })
                                        :
                                        seguidores.map((seguidor, i) => {
                                            return <ItemFollow s={0} id={id} idUser={seguidor.IDUsuario} key={i} foto={seguidor.foto} nombre={seguidor.nombre + " " + seguidor.paterno + " " + seguidor.materno} usuario={seguidor.usuario} />
                                        })
                            }
                        </div>
                    </div>
                    :
                    <IS />
            }


        </>
    )
}

export default Follow;