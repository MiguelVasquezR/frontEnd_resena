import styles from './ItemChat.module.css';
import { MdDelete } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ItemChat(props){
    const {nombre, mensaje} = props;
    const img = '../../../public/img/persona.jpg';
    const navigate = useNavigate();        

    const handleDelete = (e) =>{
        e.stopPropagation();
        alert("Eliminar Mensaje");
    }

    const handleWatchPerfil = (e) =>{
        e.stopPropagation();
        alert("Ver Perfil");
    }    

    const handleOpenChat = (e) =>{
        e.stopPropagation();        
        navigate('/chat-user');
    }

    return (
        <div className={styles.itemChat} onClick={handleOpenChat}>
            <div className={styles.contImg}><img src={img}alt={"itemChat_perfil_"+nombre} className={styles.img} /></div>
            <div className={styles.content}>
                <h2 className={styles.h2}>{nombre}</h2>
                <p className={styles.p}>{mensaje}</p>
            </div>
            <div className={styles.icos}>
                <MdDelete size={30} color='white' style={{margin: 5}} onClick={handleDelete}/>
                <FaRegEye size={30} color='white' style={{margin: 5}} onClick={handleWatchPerfil}/>
            </div>
        </div>
    )
}

export default ItemChat;