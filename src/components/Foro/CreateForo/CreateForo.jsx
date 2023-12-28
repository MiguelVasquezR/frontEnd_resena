import { useState } from 'react';
import styles from './CreateForo.module.css';
import CreateForoGenero from './CreateForoGenero/CreateForoGenero';
import Header from '../../Header/Header';

import { IsLoging } from "../../../hooks/IsLogin";
import IS from "../../../Alerts/IniciaSesión/IS";


function CreateForo() {
    const [option, setOption] = useState('');


    const handleChangeOption = (e) => {
        if (e.target.value === 'Autor') {
            setOption("Autor");
        } else if (e.target.value === 'Libro') {
            setOption("Libro");
        } else if (e.target.value === 'Genero') {
            setOption("Genero");
        } else {
            setOption('')
        }
    }

    return (
        <div>
            <Header />

            {
                IsLoging() ?
                    <div className={styles.container}>
                        <h2 className={styles.titulo}>Crear Foro</h2>
                        <select name="" id="" className={styles.select} onChange={handleChangeOption}>
                            <option value="">Selecciona</option>
                            <option value="Autor">Autor</option>
                            <option value="Libro">Libro</option>
                            <option value={"Genero"}>Género</option>
                        </select>
                        <div className={styles.formContainer}>
                            {option === '' && <h2 className={styles.titulo}>Selecciona un Objetivo</h2>}
                            {option === 'Autor' && <CreateForoGenero option={'Autor'} />}                            
                            {option === 'Libro' && <CreateForoGenero option={'Libro'} />}                            
                            {option === 'Genero' && <CreateForoGenero option={'Género'} />}                            
                        </div>
                    </div>
                    :
                    <IS />


            }


        </div>
    )
}

export default CreateForo;