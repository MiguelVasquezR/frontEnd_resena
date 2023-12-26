import { AiOutlineSend } from 'react-icons/ai'
import styles from './Interaction.module.css';
import { useState, useEffect } from 'react';

function Interaction({ getMessage }) {
    const [message, setMessage] = useState('');    

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleMessage  = (e) => {
        e.preventDefault();        
        getMessage(message);
        setMessage('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleMessage} className={styles.formulario}>
                <input value={message} onChange={handleOnChange} type="text" placeholder="Escribe tu mensaje" className={styles.input} />
                <AiOutlineSend size={30} color='white' onClick={handleMessage} />
            </form>
        </div>
    )
}

export default Interaction;