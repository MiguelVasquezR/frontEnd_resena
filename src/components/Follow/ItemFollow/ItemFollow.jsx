import styles from './ItemFollow.module.css';
import {RiUserUnfollowFill} from 'react-icons/ri';
import {FaRegUserCircle} from 'react-icons/fa'
import { getUser } from '../../../hooks/Aut';
import { useNavigate } from 'react-router-dom';

function ItemFollow(props, {hand}){
    const {s, id, idUser, foto, nombre, usuario} = props;
    const user = getUser();
    const navigate = useNavigate();


    const handleClicUnFollow = (e) =>{
        e.stopPropagation();
        const fetchDelete = async () =>{
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/delete-follow?IDOrigen=${user.IDUsuario}&IDDes=${idUser}`, {method: 'DELETE'});
            if(res.ok){
                const data = await res.json();
                console.log(data);
                navigate('/perfil');
            }
        }    
        fetchDelete();        
    }    

    return(
        <div key={nombre} className={styles.container}>
            <div className={styles.imgContainer}>
                {
                    foto ? 
                    <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + foto + ".png"} alt="Foto de perfil" className={styles.img} /> 
                    :
                    <FaRegUserCircle size={90} color='white' />
                }            
            </div>
            <div className={styles.infoContainer}>
                <h2 style={{fontSize: '20px'}}>{nombre}</h2>
                <h3 style={{fontSize: '12px', color:'rgba(255,255,255,.8)', margin: '3px 0'}}>{'@'+usuario}</h3>
            </div>

            {
                user.IDUsuario === id && s===0 ?
                <RiUserUnfollowFill onClick={handleClicUnFollow} color='white' size={50}/>
                :
                ""
            }

            
        </div>
    )
}

export default ItemFollow;