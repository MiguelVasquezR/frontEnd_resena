import Header from "../../components/Header/Header";
import OptionsChats from "../../components/Chat/OptionsChats/OptionsChats";
import styles from './Chat.module.css';
import ItemChat from "../../components/Chat/ItemChat/ItemChat";
import Message from "../../components/Chat/Message/Message";
import url from '../../../public/img/persona.jpg';


function Chat(){
    const img = '../../../public/img/persona.jpg';    

    return(
        <>
            <Header />  
            <div className={styles.options}>
                <OptionsChats urlImg={img} nombre="Miguel" />                
                <OptionsChats urlImg={img} nombre="Xanery" />
                <OptionsChats urlImg={img} nombre="Patricio" />
                <OptionsChats urlImg={img} nombre="Mago" />
                <OptionsChats urlImg={img} nombre="Lewis" />
                <OptionsChats urlImg={img} nombre="Checo" />
            </div>
            <div className={styles.chats}>
                <ItemChat nombre="Miguel Vásquez" mensaje="Tú: Hola, cómo estas?" />
                <ItemChat nombre="Xanery Landeros" mensaje="Xanery: Hola"/>
                <ItemChat nombre="Lewis Hamilton" mensaje="Lewis: Hoy corro en Dubai"/>                
            </div>
        </>                
    )
}

export default Chat;