import styles from './Calificacion.module.css';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({onClick}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);    
    const [valor, setValor] = useState(0);

    useEffect(() => {
        onClick(valor)                                     
    }, [rating, onClick])    

    const handleStarClick = (value) => {                 
        setValor(value)
        setRating(value)                        
    };

    const handleStarHover = (value) => {
        setHover(value);
    };

    return (
        <div className={styles.container}>
            <h2>Calificación</h2>
            <div style={{ margin: '10px 0' }}>
                {[...Array(5)].map((star, index) => {
                    const starValue = index + 1;                    
                    return (
                        <label key={index} >
                            <input
                                style={{ display: 'none' }}
                                type="radio"
                                name="rating"
                                value={starValue}
                                onClick={() => handleStarClick(starValue)}
                                onMouseEnter={() => handleStarHover(starValue)}
                                onMouseLeave={() => handleStarHover(0)}
                            />
                            <FaStar
                                style={{ margin: '0 5px' }}
                                color={starValue <= (hover || rating) ? 'gold' : '#F3F3EF'}
                                size={50}
                            />
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default StarRating;
