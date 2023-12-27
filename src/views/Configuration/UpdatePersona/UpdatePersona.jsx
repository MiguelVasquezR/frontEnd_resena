import styles from '../Configuration.module.css';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { getPersona } from "../../../hooks/Aut";
import { parse, format } from 'date-fns';


function UpdatePersona() {
    const { register, handleSubmit } = useForm();
    const [persona, setPersona] = useState({});

    useEffect(() => {
        const personne = getPersona();
        if (personne) {
            setPersona(personne);
        }
    }, [])

    function parseDate(fecha) {
        var meses = {
            'ene': 1, 'feb': 2, 'mar': 3, 'abr': 4, 'may': 5, 'jun': 6,
            'jul': 7, 'ago': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dic': 12
        };
        var partesFecha = fecha.split(' ');
        var mesNumero = meses[partesFecha[0].toLowerCase().substr(0, 3)];
        var fechaNueva = partesFecha[2] + '-' + (mesNumero < 10 ? '0' : '') + mesNumero + '-' + partesFecha[1];    
        var indiceABorrar = fechaNueva.indexOf(',');        
        if (indiceABorrar !== -1) {            
            var nuevaCadena = fechaNueva.slice(0, indiceABorrar) + fechaNueva.slice(indiceABorrar + 1);            
        }
        return nuevaCadena;
    }


    const handleSubmitUpdate = (data) => {
        const persona = getPersona();
        let dataActualizada;

        if (typeof data === 'object' && data !== null) {
            dataActualizada = Object.keys(data).reduce((obj, clave) => {
                obj[clave] = data[clave] === '' ? persona[clave] : data[clave];
                return obj;
            }, {})
        };

        dataActualizada.id = persona.IDPersona;        
        dataActualizada.nacimiento = parseDate(persona.fNacimiento);
        dataActualizada.biografia = persona.biografia ? persona.biografia : '';        

        const fetchUpdatePersonne = async () => {
            await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/persona`, { method: 'PUT', body: JSON.stringify(dataActualizada) });
        }

        fetchUpdatePersonne();

    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setPersona({
            ...persona,
            [name]: value,
        });
    }

    return (
        <form action="" className={styles.formContainer} onSubmit={handleSubmit(handleSubmitUpdate)}>
            <input type="text" className={styles.input} {...register('nombre')} value={persona.nombre} onChange={handleOnChange} />
            <input type="text" className={styles.input} {...register('paterno')} value={persona.paterno} onChange={handleOnChange} />
            <input type="text" className={styles.input} {...register('materno')} value={persona.materno} onChange={handleOnChange} />
            <button type='submit' className={`${styles.btns} ${styles.btnUpdate}`}>Actualizar</button>
        </form>

    );
}

export default UpdatePersona;