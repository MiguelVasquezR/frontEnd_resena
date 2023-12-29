import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { addPersonne } from '../../../hooks/Aut';
import React from 'react';
import { IsLoging } from '../../../hooks/IsLogin';
import Loading from '../../../components/Loading/Loading'


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
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = (datos) => {          
    setBand(false);    
    const useLogin = async (datos) => {
      try {
        
        const respuesta = await fetch(`https://${import.meta.env.VITE_DIR_IP}/usuario`,{
          method: 'POST',          
          body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
          const data = await respuesta.json();
          setUsuario(data);                 

          if (click === true) {
            buttonRef.current.click();
            setClick(false);
          } else {
            if (usuario.password === datos.password) {                 
              window.localStorage.setItem('localUserStorage', JSON.stringify(usuario));
              addPersonne();    
              setTimeout(()=> {
                navigate(`/`);    
              }, 1500)                                            
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
