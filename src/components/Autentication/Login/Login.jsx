import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { addPersonne } from '../../../hooks/Aut';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [band, setBand] = useState(false);
  const [type, setType] = useState('password');
  const [usuario, setUsuario] = useState({});
  const navigate = useNavigate();

  const handleLogin = (datos) => {
    setBand(false);

    const useLogin = async (datos) => {
      try {
        const res = await fetch('http://192.168.1.67:4567/usuario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos)
        });
        const data = await res.json();
        setUsuario(data);        
        if (usuario.password === datos.password) {          
          window.localStorage.setItem('localUserStorage', JSON.stringify(usuario));          
          addPersonne();
          navigate("/");
        } else {
          setBand(true);
        }

      } catch (error) {
        console.error("Error en la llamada fetch:", error);
      }
    }

    useLogin(datos);

  };

  const handleSeePassword = () => {
    if (type === "password") {
      setType('text');
    } else if (type === "text") {
      setType('password');
    }
  }

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit(handleLogin)}>
        <input className={styles.input} type="text" placeholder='Usuario o Email' {...register('usuario', { required: true })} />
        <div style={
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }
        }>
          <input className={styles.input} type={type} placeholder='Contraseña' {...register('password', { required: true })} />
          <IoEyeOutline size={30} color='white' style={{ borderBottom: "1px solid #fff" }} onClick={handleSeePassword} />
        </div>
        {band === true && <h2>Tus datos son incorrectos</h2>}
        <input className={styles.btn} type="submit" value='Entrar' />
      </form>
    </div>
  );
}

export default Login;
