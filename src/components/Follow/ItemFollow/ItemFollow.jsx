import styles from './ItemFollow.module.css';
import {RiUserUnfollowFill} from 'react-icons/ri';

function ItemFollow(props){
    const {nombre, usuario} = props;


    const handleClicUnFollow = (e) =>{
        e.stopPropagation();
        alert("UnFollow")
    }

    const handleClicViewPerfil = (e) =>{
        e.stopPropagation();
        alert('Ver perfil');
    }


    return(
        <div className={styles.container} onClick={handleClicViewPerfil}>
            <div className={styles.imgContainer}>
                <img src="" alt="" />
            </div>
            <div className={styles.infoContainer}>
                <h2 style={{fontSize: '20px'}}>{nombre}</h2>
                <h3 style={{fontSize: '12px', color:'rgba(255,255,255,.8)', margin: '3px 0'}}>{usuario}</h3>
            </div>
            <RiUserUnfollowFill onClick={handleClicUnFollow} color='white' size={30}/>
        </div>
    )
}

export default ItemFollow;