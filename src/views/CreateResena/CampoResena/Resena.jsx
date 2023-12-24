import { useEffect, useState } from 'react';
import styles from './Resena.module.css';

function Resena({onClick}) {
  const [resena, setResena] = useState('');     

  const onChangeResena = (e) => {
      setResena(e.target.value);
      onClick(resena);
  };


  return (
    <div className={styles.resenaContainer}>
      <h2 style={{ margin: '12px', fontSize: '25px' }}>Contenido de Reseña</h2>
      <textarea
        onChange={onChangeResena}
        value={resena}
        className={styles.textResena}
        placeholder="Escribe tu reseña"
      ></textarea>
    </div>
  );
}

export default Resena;
