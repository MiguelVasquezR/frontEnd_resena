import styles from './Follow.module.css';
import Header from '../Header/Header';
import { useState } from 'react';
import ItemFollow from './ItemFollow/ItemFollow';

import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";


function Follow() {
    /*
        Seguidos -> false
        seguidores -> true
    */
    const [option, setOption] = useState(false);

    const handleClicOption = (e) => {
        if (e.target.id === 'seguidos') {
            setOption(false)
        } else if (e.target.id === 'seguidores') {
            setOption(true)
        }
    }

    return (
        <>
            <Header />
            {
                IsLoging() ?
                    <div>
                        <ul className={styles.ul}>
                            <li id='seguidos' onClick={handleClicOption}>Seguidos</li>
                            <li id='seguidores' onClick={handleClicOption}>Seguidores</li>
                        </ul>

                        <div className={styles.followsContainer}>
                            {option && <ItemFollow nombre='Miguel Vásquez' usuario='@Miguel_VR12' />}
                            {!option && <h2>Seguidos</h2>}
                        </div>
                    </div>
                    :
                    <IS />
            }


        </>
    )
}

export default Follow;