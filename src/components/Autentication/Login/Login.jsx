import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [band, setBand] = useState(false);
  const [usuarios, setUsuarios] = useState([]);  

  const handleLogin = async (datos) => {
    setBand(false);
    try {
      const res = await axios.get("http://localhost:4567/usuario");
      setUsuarios(res.data);
      const user = usuarios.find((usuario) => { if (usuario.usuario === datos.usuario && usuario.password === datos.password) { return usuario } });

      if (user) {
        window.localStorage.setItem(
          'localUserStorage', JSON.stringify(user)
        );        
        navigate("/");
      } else {
        setBand(true);
      }
    } catch (error) {
      console.log("Error al autenticar en login ", error);
    }
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit(handleLogin)}>
        <input className={styles.input} type="text" placeholder='Usuario o Email' {...register('usuario', { required: true })} />
        <input className={styles.input} type="password" placeholder='Contraseña' {...register('password', { required: true })} />        
        {band && <h2>Tus datos son incorrectos</h2>}
        <input className={styles.btn} type="submit" value='Entrar' />
      </form>
    </div>
  );
}

export default Login;
