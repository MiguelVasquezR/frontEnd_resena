import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { addPersonne } from '../../../hooks/Aut';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    usuario: '',
    password: ''
  });
  const [band, setBand] = useState(false);
  const [type, setType] = useState('password');
  const [usuario, setUsuario] = useState({});
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [click, setClick] = useState(true);


  const handleLogin = (datos) => {
    setBand(false);
    const useLogin = async (datos) => {
      try {
        const respuesta = await fetch('http://192.168.1.67:4567/usuario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
          const data = await respuesta.json();
          setUsuario(data);      
          console.log(usuario);    

          if (click === true) {
            buttonRef.current.click();
            setClick(false);
          } else {
            if (usuario.password === datos.password) {   
              console.log(usuario);           
              window.localStorage.setItem('localUserStorage', JSON.stringify(usuario));
              addPersonne();              
              navigate(`/`);            
            } else {              
              setBand(true);
            }
          }

        } else {
          console.error(`Error en la respuesta: ${respuesta.status}`);
        }
      } catch (error) {
        console.error("Error en la llamada fetch:", error);
        setBand(true);
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
            width: '90%',
          }
        }>
          <input className={styles.input} type={type} placeholder='Contraseña' {...register('password', { required: true })} />
          <IoEyeOutline size={30} color='white' style={{ borderBottom: "1px solid #fff" }} onClick={handleSeePassword} />
        </div>
        {band === true && <h2>Tus datos son incorrectos</h2>}
        <input ref={buttonRef} className={styles.btn} type="submit" value='Entrar' />
      </form>
    </div>
  );
}

export default Login;
