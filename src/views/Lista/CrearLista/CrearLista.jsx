import React, { useState, useRef } from 'react';
import styles from './CrearLista.module.css';
import Header from '../../../components/Header/Header';
import Barra from './Barra/Barra';
import PhotoPerfil from '../../../components/SelectPerfilPhoto/PhotoPerfil';
import OptionsBooks from '../OptionsBooks/OptionsBooks'
import { getUser } from '../../../hooks/Aut';

function CrearLista() {
    const [datos, setDatos] = useState({ nombre: '', descripcion: '', privacidad: '', IDUsuario: '' });    
    const [selectedOption, setSelectedOption] = useState('');    

    const handleChangeOption = (e) => {
        setSelectedOption(e.target.value);
    };    

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = getUser();
        datos.IDUsuario = user.IDUsuario;
        datos.privacidad = selectedOption;        

        const enviarDatos = async () => {
            const res = fetch('http://localhost:4567/create-lista', { method: 'POST', body: JSON.stringify(datos) });            
        }

        enviarDatos();

        setDatos({ nombre: '', descripcion: '', privacidad: '', IDUsuario: '' });
        setSelectedOption('');        
    }

    return (
        <div className={styles.mainContainer}>
            <Header />
            <h2 className={styles.titulo}>Crea tu lista</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <PhotoPerfil />
                <input name='nombre' value={datos.nombre} type="text" placeholder='Nombre de Lista' className={styles.nombre} onChange={handleOnChange} required />

                <select name="nombre" id="nombre" className={styles.nombre} onChange={handleChangeOption} value={selectedOption} required>
                    <option value="" selected={!selectedOption}>
                        Selecciona
                    </option>
                    <option value="publico">Público</option>
                    <option value="privado">Privado</option>
                </select>

                <textarea name='descripcion' value={datos.descripcion} id="" cols="30" rows="10" placeholder='Descripción de tu lista' className={styles.descripcion} onChange={handleOnChange} required />
                <button type='submit' className={styles.btn}>Crear</button>
            </form>

        </div>
    );
}

export default CrearLista;


{/* <Barra />
                
                <div className={styles.optionBookContainer}>
                    <h2 style={{textAlign: 'center', margin: '16px 0'}}>Agregar Libros</h2>
                    <OptionsBooks />
                    <OptionsBooks />
                    <OptionsBooks />
                    <OptionsBooks />
                    <OptionsBooks />
                </div> */}