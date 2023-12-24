import { AiOutlineSend } from 'react-icons/ai'
import styles from './Interaction.module.css';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io();

function Interaction() {
    const [message, setMessage] = useState('');


    const sendMessage = (e) => {
        e.preventDefault();

        console.log(socket);
        
    };

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }


    return (
        <div className={styles.container}>
            <form className={styles.formulario}>
                <input value={message} onChange={handleOnChange} type="text" placeholder="Escribe tu mensaje" className={styles.input} />
                <AiOutlineSend size={30} color='white' onClick={sendMessage} />
            </form>
        </div>
    )
}

export default Interaction;