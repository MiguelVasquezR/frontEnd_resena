import Header from "../../../components/Header/Header";
import Message from "../../../components/Chat/Message/Message";
import url from '../../../../public/img/persona.jpg';
import Interaction from '../../../components/Chat/Interaction/Interaction';
import styles from './InteractionMessage.module.css';

import { IsLoging } from "../../../hooks/IsLogin";
import IS from "../../../Alerts/IniciaSesión/IS";

function InteractionMessage() {
    return (
        <div className={styles.containerMain}>
            <Header />
            {
                IsLoging() ?
                    <div>
                        <div className={styles.chats}>
                            <Message urlImg={url} message='hola' position='propiedad' />
                            <Message urlImg={url} message='hola' position='' />
                        </div>
                        <div className={styles.footer}>
                            <Interaction />
                        </div>
                    </div>

                    :
                    <IS />
            }

        </div>
    )
}

export default InteractionMessage;