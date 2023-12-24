import { useState } from 'react';
import styles from './Interacciones.module.css';
import { FaHeartBroken, FaComment } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';

function Interacciones() {
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [colorLike, setColorLike] = useState('white');
    const [colorDLike, setDColorLike] = useState('white');

    const handleClic = (e) => {    
        e.stopPropagation();
        if(e.target.id === 'dislike'){
            console.log(e.target.id);            
        }else if(e.target.id === 'like'){
            if(likeActive && dislikeActive){                
                likeActive(true);
                setColorLike('red');
            }else if(likeActive && !dislikeActive){
                
            }else if(!likeActive){
                setLikeActive(false);
                setColorLike('red');
            }
        }
    };

    const handleClicOpenComments = () => {
        alert("Comentarios");
    }

    const handleClicShare = () => {
        alert("Compartir");
    }

    return (
        <div className={styles.reactionContainer}>
            <FaHeart id="like" size={30} color='white' onClick={handleClic} />
            <FaHeartBroken id="dislike" size={30} color='white' onClick={handleClic} />
            <FaComment size={30} style={{ margin: "10px 0" }} color='white' onClick={handleClicOpenComments} />
            <IoMdShare size={30} style={{ margin: "10px 0" }} color='white' onClick={handleClicShare} />
        </div>
    )
}

export default Interacciones;