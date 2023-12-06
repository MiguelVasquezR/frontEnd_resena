import styles from './Message.module.css';

function Message(props) {    
    const { urlImg, message, position} = props;

    if (position === 'propiedad') {
        return (
            <div className={styles.messageContainer}>
                <div className={styles.message}>{message}</div>
                <img src={urlImg} alt={'img_perfil'} className={styles.img} />
            </div>)
    }

    return (
        <div className={styles.messageContainer}>
            <img src={urlImg} alt={'img_perfil'} className={styles.img} />
            <div className={styles.message}>{message}</div>
        </div>
    )
}

export default Message;