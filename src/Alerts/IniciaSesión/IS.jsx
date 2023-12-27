import styles from './IS.module.css';
import { useNavigate } from 'react-router-dom';


export default function IS(){

    const navigate = useNavigate();

    const handleClic = () => {
        navigate("/Autentication");
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.titulo}>Iniciar Sesión</h2>                        
            <button onClick={handleClic} className={styles.btnLogin}>Iniciar Sesión</button>
        </div>
    )
}