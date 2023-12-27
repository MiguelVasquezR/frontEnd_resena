import { useEffect, useState } from 'react';
import styles from '../Configuration.module.css'
import { useForm } from "react-hook-form";
import { getUser } from "../../../hooks/Aut";
import { IoEyeOutline } from 'react-icons/io5'

function UpdateUserForm() {
    const { register, handleSubmit } = useForm();
    const [usuario, setUsuario] = useState({});
    const [type, setType] = useState('password');

    useEffect(() => {
        const user = getUser();
        if (user) {
            setUsuario(user);
        }
    }, [])

    const handleSubmitUpdate = (data) => {        
        const usuario = getUser();
        console.log(usuario);
        let dataActualizada;
        if (typeof data === 'object' && data !== null) {
            dataActualizada = Object.keys(data).reduce((obj, clave) => {
                obj[clave] = data[clave] === '' ? usuario[clave] : data[clave];
                return obj;
            }, {})
        };
        dataActualizada.idUsuario = usuario.IDUsuario;     
        dataActualizada.idPersona = usuario.IDPersona;
        
        const fetchUpdateUser = async () => {
            await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/usuario`, { method: 'PUT', body: JSON.stringify(dataActualizada) });
        }
        fetchUpdateUser();
    }

    const handleSeePassword = (e) => {
        if (type === 'password') {
            setType('text');
        } else if (type === 'text') {
            setType('password');
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario, 
            [name]: value,
        });
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(handleSubmitUpdate)}>
            <input type="text" className={styles.input} {...register('usuario')} value={usuario.usuario} name='usuario' onChange={handleOnChange}/>
            <input type="text" className={styles.input} {...register('correo')} value={usuario.correo} name='correo' onChange={handleOnChange}/>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: "90%" }}>
                <input type={type} className={styles.input} {...register('password')} value={usuario.password} name='password' onChange={handleOnChange}/>
                <IoEyeOutline onClick={handleSeePassword} size={35} style={{ borderBottom: "1px solid #000" }} />
            </div>
            <button type="submit" className={`${styles.btns} ${styles.btnUpdate}`}>Actualizar</button>
        </form>
    );
}

export default UpdateUserForm;