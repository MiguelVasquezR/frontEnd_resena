import Header from "../../components/Header/Header";
import ItemNotification from "../../components/ItemNotification/ItemNotification";
import styles from './Notification.module.css';

import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";

function Notification(){
    const img = '../../../public/img/persona.jpg';    


    return (
        <div>
            <Header />
            {
                IsLoging() ? 
                <div className={styles.notificationContainer}>
                    <ItemNotification urlImg={img} emisor="Miguel Vásquez" contenido="Te ha comenzado a seguir"/>
                    <ItemNotification urlImg={img} emisor="Xanery Landero" contenido="Te ha comenzado a seguir"/>
                </div>
                :
                <IS />
            }        
        </div>        
    );
}

export default Notification;