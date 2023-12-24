import Header from "../../components/Header/Header";
import styles from './Configuration.module.css';
import UpdateUserForm from "./UpdateUser/UpdateUserForm";
import UpdatePersona from "./UpdatePersona/UpdatePersona";
import axios from "axios";
import PhotoPerfil from "../../components/SelectPerfilPhoto/PhotoPerfil";

import { RiMoonClearLine, RiMoonClearFill } from 'react-icons/ri';
import { IoAddCircleOutline, IoEyeOutline } from 'react-icons/io5';
import { useEffect, useState } from "react";
import { logout, getUser } from "../../hooks/Aut";
import {FaSquareXTwitter,FaGithub} from 'react-icons/fa6'
import {IoLogoLinkedin} from 'react-icons/io'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import {TiSocialAtCircular} from 'react-icons/ti';
import { useNavigate } from "react-router-dom";

function Configuration() {    
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState(false);    
    const [url, setUrl] = useState('');    
    const [redes, setRedes] = useState([]);
    const navigate = useNavigate();        

    const handleRenderAddRed = () => {
        setOpen(!open);
    }

    const handleChoseOption = (e) => {
        const opt = e.target.id;
        if (opt === "dPersonales") {
            setOption("dPersonales");
        } else if (opt === "dCuenta") {
            setOption("dCuenta")
        }
    }

    // --------------------------------------- Redes Sociales
    const handleChangeRedSocial = (e) => {
        const url = e.target.value;
        setUrl(url);
    }

    const handleAddRed = (e) => {
        e.preventDefault();
        const fetchAddRed = async () =>{
            try {
                const user = getUser();
                const datos={
                    IDUsuario: user.IDUsuario,
                    URL: url,
                }
                const res  = await fetch(`http://192.168.100.6:4567/red-social`, {method: 'POST', body: JSON.stringify(datos)});                                
            } catch (error) {                
                console.log(error);
            }
        }            
        fetchAddRed();

        setUrl('');
    }

    const GetRedSocial = () =>{        
        const fetchGetRed = async () =>{
            const user = getUser();
            const res = await axios.get('http://192.168.100.6:4567/red-social', {params: user});
            setRedes(res.data);     
            setOpen(false);
        }
        fetchGetRed();
    }

    useEffect(() => {
        GetRedSocial();
    }, [])

    const handleLogout = () =>{        
        logout();
        navigate("/");
    }    

    const selectLogo = (url) => {
        const lowercaseUrl = url.toLowerCase();
        const tam = 50;
        if (lowercaseUrl.includes('github')) {
            return <FaGithub size={tam} color="#4183C4"/>;
        } else if (lowercaseUrl.includes('twitter')) {
            return <FaSquareXTwitter size={tam} color="#1DA1F2"/>;
        } else if (lowercaseUrl.includes('linkedin')) {
            return <IoLogoLinkedin size={tam} color="#0077B5"/>;
        } else if (lowercaseUrl.includes('instagram')) {
            return <FaInstagram size={tam} color="#C13584"/>;
        } else if (lowercaseUrl.includes('facebook')) {
            return <FaFacebook size={tam} color="#1879F2"/>;
        } else {            
            return <TiSocialAtCircular size={tam} />
        }
    };    

    return (
        <>
            <Header />

            <div className={styles.informationContainer}>
            <h2 style={{ fontSize: 30 }}>Cambiar tu foto</h2>
                <br />
                <PhotoPerfil />
            </div>

            <div className={styles.informationContainer}>
                <h2 style={{ fontSize: 30 }}>Información</h2>
                <ul className={styles.ulContainer}>
                    <li className={styles.btns} id="dPersonales" onClick={handleChoseOption}>Datos Personales</li>
                    <li className={styles.btns} id="dCuenta" onClick={handleChoseOption}>Datos de Cuenta</li>
                </ul>
                <div className={styles.renderContainer}>
                    {option === "dPersonales" && <UpdatePersona />}
                    {option === "dCuenta" && <UpdateUserForm />}
                </div>
            </div>

            <div className={styles.redesContainer}>

                <h2 style={{ fontSize: 30, margin: "5px 0" }}>Redes Sociales</h2>
                
                <div className={styles.optionRedesContainer}>
                    {redes ? <div>{ redes.map((red) => {return <a target="_blank" key={red.URL} href={red.URL} className={styles.urls}> {selectLogo(red.URL)} </a>})}</div> : ''}
                    <IoAddCircleOutline size={60} onClick={handleRenderAddRed} />
                </div>

                {open === true &&
                    <div>
                        <form action="" onSubmit={handleAddRed} className={styles.form}>
                            <input value={url}  type="text" placeholder="Ingresa URL de tu red" className={styles.input} onChange={handleChangeRedSocial} />
                            <button type="submit" className={styles.btns}>Agregar</button>
                        </form>
                    </div>
                }

            </div>

            {/* <div className={styles.temaContainer}>
                <h2>Tema</h2>
                <div className={styles.optionTema}>                    
                    <RiMoonClearLine size={40}/>
                    <RiMoonClearFill size={40}/>
                </div>
            </div> */}

            <div className={styles.btnsPlus}>
                <button className={styles.btns}>Ayuda</button>
                <button className={styles.btnLogOut} onClick={handleLogout}>Cerrar Sesión</button>
            </div>

        </>
    )
}

export default Configuration;