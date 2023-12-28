import { useState } from 'react';
import styles from './ItemForo.module.css';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function ItemForo(props) {
    const [color, setColor] = useState('white');
    const [pres, setPres] = useState(false);
    const navigate = useNavigate();

    const handleLike = () =>{
        if(!pres){
            setColor('red')
            setPres(true);
        }else{
            setColor('white')
            setPres(false);
        }
    }

    const { nombre, cantUsuarios, descripcion, IDForo} = props;

    const handleClicForo = () => {
        navigate(`/foro-main?nombre=${nombre}&cant=${cantUsuarios}&des=${descripcion}&IDFoto={IDFoto}`)
    }

    
    return (
        <div key={nombre} className={styles.container} onClick={handleClicForo}>

            <div className={styles.imgContainer}>

                <div className={styles.superior}>

                    <img src="" alt="" className={styles.img} />

                    <div className={styles.izquierda}>
                        <h2 className={styles.titulo}>{nombre}</h2>
                        <h2 className={styles.cant}>{cantUsuarios + " usuarios"}</h2>
                    </div>
                    
                </div>                                

                <div className={styles.infoContainer}>
                    <p className={styles.descripcion}>{descripcion}</p>
                </div>

            </div>                

            <FaHeart color={color} size={50} style={{margin: '0px 10px'}} onClick={handleLike}/>
        </div>
    )
}

export default ItemForo;