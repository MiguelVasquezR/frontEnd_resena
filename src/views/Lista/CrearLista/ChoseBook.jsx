import Header from "../../../components/Header/Header";
import OptionsBooks from "../OptionsBooks/OptionsBooks";
import styles from './ChoseBook.module.css';
import { useNavigate } from "react-router-dom";

function ChoseBook() {

    const navigate = useNavigate();

    const handleSendBooks = () =>{
        console.log("Enviado");
        navigate("/perfil")
    }


    return(

        <div className={styles.containter}>
            <Header />
            <h2 style={{textAlign: 'center', margin: '20px 0'}}>ELIGE TUS LIBROS</h2>
            <OptionsBooks />

            <div className={styles.btnContainer}>
                <button onClick={handleSendBooks} className={styles.btn}>Crear</button>
            </div>
        </div>

    );
}

export default ChoseBook;