import styles from "./Header.module.css";
import logo from '../../../public/img/Logo.png';
import { IoIosNotificationsOutline, IoMdGift } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiSettings, CiLogin } from 'react-icons/ci';
import { MdForum } from 'react-icons/md';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { RiMoonClearLine } from 'react-icons/ri';
import { getPersona, getUser, logout } from "../../hooks/Aut";
import {IoChevronBackOutline} from 'react-icons/io5'
import { useLocation } from "react-router-dom";
import { IsLoging } from "../../hooks/IsLogin";


function Header({actualizar}) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const lasOption = getUser() ? "LogOut" : "Login";
    const options = ["Perfil", "Ajustes", "Foros", "Tema", "Ayuda", lasOption];
    const [isLogin, setIsLogin] = useState(false);

    const location = useLocation();

    useEffect(() => {        
        if (getPersona() && getUser()) {            
            setIsLogin(true);            
        } else {
            setIsLogin(false);
        }
    }, [])


    const iconosPorTitulo = {
        Perfil: FaRegUserCircle,
        Ajustes: CiSettings,
        Foros: MdForum,
        Tema: RiMoonClearLine,
        Ayuda: IoIosHelpCircleOutline,
        LogOut: CiLogin,
        Login: CiLogin,
    };


    const handleNotification = () => {        
        if (isLogin) {
            // navigate("/notification");
            alert("Estará disponible proximamente")
        }
    }

    const handleMessage = () => {
        if (isLogin) {
            // navigate("/message");
            alert("Estará disponible proximamente")
        }
    }

    const handleBack = () => {
        navigate(-1);                
    }


    const actualizarPadre = (ho) => {
        actualizar(ho)
    }


    const handleHome = () => {
        navigate("/");
    }

    const handleMenuModal = (e) => {
        setOpen(!open);
    }

    const handleClicOptionModal = (e) => {

        if (isLogin) {            
            if (e.target.id === "Perfil") {
                navigate("/perfil");
            } else if (e.target.id === "Ajustes") {
                navigate("/configuracion");
            }
            else if (e.target.id === "Foros") {
                navigate("/Foro");
            } else if (e.target.id === "Ayuda") {
                navigate("/Ayuda");
            } else if (e.target.id === "LogOut") {
                logout();
                setOpen(!open)     
                actualizarPadre("Nuevo");           
                navigate(`/`);      
            }
        }

        if (e.target.id === "Login") {            
            navigate("/Autentication");                            
        }

    }


    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                {
                    location.pathname === '/' ?
                    ""
                    :
                    <IoChevronBackOutline  color="white" size={30} style={{margin: '0 10px'}} onClick={handleBack} />
                }            
                <img src={logo} alt="Logo de la página" className={styles.img}  onClick={handleHome}/>
            </div>

            <div className={styles.options}>
                <IoIosNotificationsOutline color="white" size={28} style={{ margin: 10 }} onClick={handleNotification} />
                <FiMessageCircle color="white" size={28} style={{ margin: 10 }} onClick={handleMessage} />
                <FaRegUserCircle color="white" size={52} style={{ margin: 10 }} onClick={handleMenuModal} />
            </div>

            {
                open && (
                    <div className={styles.modal}>
                        <ul className={styles.ulModal}>
                            {options.map((titulo, index) => {
                                const Icono = iconosPorTitulo[titulo];
                                return (
                                    <li id={titulo} className={styles.liModal} key={"modal_option_" + titulo} onClick={handleClicOptionModal}>
                                        {Icono && <Icono size={20} style={{ margin: "0px 10px" }} />}
                                        {titulo}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    );
}


export default Header;
