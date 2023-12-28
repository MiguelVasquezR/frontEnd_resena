import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import { IsLoging } from "../../../hooks/IsLogin";
import { getUser } from "../../../hooks/Aut";
import Header from "../../../components/Header/Header";
import Message from "../../../components/Chat/Message/Message";
import Interaction from '../../../components/Chat/Interaction/Interaction';
import IS from "../../../Alerts/IniciaSesión/IS";
import styles from './InteractionMessage.module.css';
// const socket = io("/");

function InteractionMessage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
            
    // useEffect(() => {
    //   socket.on("message", receiveMessage)            
    //   return () => {
    //     socket.off("message", receiveMessage);
    //   };
    // }, []);
  
    // const receiveMessage = (message) => setMessages(state => [message, ...state]);
  
    // const handleSubmit = () => {      
    //   const newMessage = {
    //     body: message,
    //     from: "Me",
    //   };
    //   setMessages(state => [newMessage, ...state]);
    //   setMessage("");
    //   socket.emit("message", newMessage.body);      
    // };

    // useEffect(()=>{
    //     handleSubmit();            
    // }, [message])
  

    const handleMessage = (mensaje) => {
        setMessage(mensaje);        
    };

    return (
        <div className={styles.containerMain}>
            <Header />
            {IsLoging() ? (
                <div>
                    <div className={styles.chats}>
                        {
                        messages.slice(0).reverse().map((mensaje, i) => {                                                        
                            console.log( "Cant" , messages.length)
                            if (mensaje.body.trim() !== '') {
                                console.log(mensaje);
                                const res = mensaje.from === 'Me' ? 'propiedad' : '';
                                return (
                                    <div key={i} className={styles.container}>
                                        <Message urlImg={""} message={mensaje.body} position={res} />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className={styles.footer}>
                        <Interaction getMessage={handleMessage} />
                    </div>
                </div>
            ) : (
                <IS />
            )}
        </div>
    );


}

export default InteractionMessage;