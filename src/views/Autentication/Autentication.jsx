import styles from './Autentication.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../../public/img/logo.png';
import { useState } from 'react';

import Login from '../../components/Autentication/Login/Login';
import Registro from '../../components/Autentication/Registro/Registro';

function Autentication() {
    /*
        Login -> true
        Registrar -> false
    
    */
    const [option, setOption] = useState(true);

    const handleClicOption = (e) =>{
        if (e.target.id === "login"){
            setOption(true);
        }else if(e.target.id === 'registrar'){
            setOption(false);
        }
    }

    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <img src={Logo} alt="Logo de Sistema" className={styles.logo} />
                <ul className={styles.ul}>
                    <li id='login' className={styles.li} onClick={handleClicOption}>Iniciar Sesión</li>
                    <li id='registrar' className={styles.li} onClick={handleClicOption}>Registrarse</li>
                </ul>
                <div className={styles.container}>
                    {option === true && <Login />}
                    {option === false && <Registro />}
                </div>
            </div>
        </div>
    )
}

export default Autentication;