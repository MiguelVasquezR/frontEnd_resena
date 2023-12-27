import Header from "../../components/Header/Header";
import OptionsChats from "../../components/Chat/OptionsChats/OptionsChats";
import styles from './Chat.module.css';
import ItemChat from "../../components/Chat/ItemChat/ItemChat";
import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";


function Chat() {
    const img = '../../../public/img/persona.jpg';

    return (
        <>
            <Header />
            {
                IsLoging() ?
                    <div>
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
                            
                        </div>

                    </div>
                    :
                    <IS />
            }
        </>
    )
}

export default Chat;