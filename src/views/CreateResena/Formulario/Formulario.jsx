import React, { useEffect } from 'react';
import styles from './Formulario.module.css';
import { useState } from 'react';

function Formulario({onClick}) {


    const [datos, setDatos] = useState(
        {
            libro: '',
            autor: '',
            idioma: '',
            editorial: '',
        }
    );


    useEffect(()=>{
        onClick(datos);
    }, [datos, onClick])


    const handleCampoChange = (campo, valor) => {
        setDatos((prevDatos) => ({
            ...prevDatos,
            [campo]: valor,
        }));        
    };

    return (
        <form action="" className={styles.form}>
            <input                
                onChange={(e) => handleCampoChange('libro', e.target.value)}
                value={datos.libro}                
                type="text"
                placeholder="Nombre del libro"
                className={styles.input}
            />
            <input                
                onChange={(e) => handleCampoChange('autor', e.target.value)}
                value={datos.autor}
                type="text"
                placeholder="Nombre del autor"
                className={styles.input}
            />
            <input                
                onChange={(e) => handleCampoChange('idioma', e.target.value)}
                value={datos.idioma}
                type="text"
                placeholder="Idioma del libro"
                className={styles.input}
            />

            <input                
                onChange={(e) => handleCampoChange('editorial', e.target.value)}
                value={datos.editorial}
                type="text"
                placeholder="Editorial"
                className={styles.input}
            />
        </form>
    );
}

export default Formulario;
