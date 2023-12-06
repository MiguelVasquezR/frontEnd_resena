import Header from "../../components/Header/Header";
import styles from './Configuration.module.css';
import { RiMoonClearLine, RiMoonClearFill } from 'react-icons/ri';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getPersona, getUser } from "../../hooks/Aut";

function Configuration() {
    const { register, handleSubmit, formState: { erros } } = useForm();
    const [persona, setPersona] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [fecha, setFecha] = useState("");

    const handleNewDatos = (data) => {
        console.log(data);
    }

    // const handleNewRedSocial = (data) =>{
    //     alert("data")
    //     console.log(data);
    // }

    // const handleAddRedSocial = (data) =>{
    //     console.log(data);
    // }

    useEffect(() => {
        const persona = getPersona();
        setPersona(persona);
        parseFecha(persona.fNacimiento);
        const usuario = getUser();
        setUsuario(usuario);
    }, []);

    const parseFecha = (fNac) => {        
        const meses = {
            jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
        };
        let partesFecha = fNac.split(" ");        
        let numeroMes = meses[partesFecha[0].toLowerCase()];        
        let dia = partesFecha[1].replace(",", "");
        let ano = partesFecha[2];        
        let fechaFormateada = `${dia}/${numeroMes}/${ano}`;
        console.log(fechaFormateada);
        setFecha(fechaFormateada);
        console.log(fecha);
    }



    return (
        <>
            <Header />

            <div className={styles.informationContainer}>
                <h2 style={{ fontSize: 40 }}>Información</h2>
                <form action="" className={styles.form} onSubmit={handleSubmit(handleNewDatos)}>
                    <fieldset style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", padding: "5px" }}>
                        <legend style={{ padding: "0 20px", fontSize: 24 }}>Datos Personales</legend>
                        <input type="text" className={styles.input} placeholder="Escribe tu nombre" value={persona.nombre} />
                        <input type="text" className={styles.input} placeholder="Escribe tu Apellido Paterno" value={persona.paterno} />
                        <input type="text" className={styles.input} placeholder="Escribe tu Apellido Materno" value={persona.materno} />
                        <input type="date" className={styles.input} value={fecha} />
                    </fieldset>

                    <fieldset style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", padding: "5px", margin: "20px 0" }}>
                        <legend style={{ padding: "0 20px", fontSize: 24 }}>Datos De Cuenta</legend>
                        <input type="text" className={styles.input} placeholder="Escribe tu Usuario" value={usuario.usuario} />
                        <input type="text" className={styles.input} placeholder="Escribe tu Password" value={usuario.password} />
                    </fieldset>

                    <button type="submit" className={styles.btnPlus}>Actualizar</button>
                </form>
            </div>

            {/* <div className={styles.redesContainer}>
                <h2>Redes Sociales</h2>
                <IoAddCircleOutline size={60}/>
                <div>
                    <form action="" onSubmit={handleSubmit(handleNewRedSocial)} className={styles.form}>
                        <input type="text" placeholder="Ingresa URL de tu red" {...register('link', {required: true})} className={styles.input}/>
                        <button type="submit" className={styles.btnPlus}>Agregar</button>
                    </form>
                </div>
            </div> */}

            {/* <div className={styles.temaContainer}>
                <h2>Tema</h2>
                <div className={styles.optionTema}>                    
                    <RiMoonClearLine size={40}/>
                    <RiMoonClearFill size={40}/>
                </div>
            </div> */}

            <div className={styles.btnsPlus}>
                <button className={styles.btnPlus}>Ayuda</button>
                <button className={styles.btnPlus}>Cerrar Sesión</button>
            </div>

        </>
    )
}

export default Configuration;