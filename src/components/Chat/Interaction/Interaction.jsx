import { AiOutlineSend } from 'react-icons/ai'
import styles from './Interaction.module.css';

function Interaction() {
    return (
        <div className={styles.container}>
            <form action="" className={styles.formulario}>
                <input type="text" placeholder="Escribe tu mensaje" className={styles.input}/>
                <AiOutlineSend size={30} color='white'/>
            </form>
        </div>
    )
}

export default Interaction;