import Header from "../../components/Header/Header";
import ItemNotification from "../../components/ItemNotification/ItemNotification";
import styles from './Notification.module.css';

function Notification(){
    const img = '../../../public/img/persona.jpg';
    return (
        <div>
            <Header />
            <div className={styles.notificationContainer}>
                <ItemNotification urlImg={img} emisor="Miguel Vásquez" contenido="Te ha comenzado a seguir"/>
                <ItemNotification urlImg={img} emisor="Xanery Landero" contenido="Te ha comenzado a seguir"/>
            </div>
        </div>        
    );
}

export default Notification;