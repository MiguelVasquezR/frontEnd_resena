import styles from './Biografia.module.css';
import {ImPencil2} from 'react-icons/im'
import {FiSave} from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { getPersona, getUser, upload } from '../../../hooks/Aut';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

function Biografia({idUser}) {
    const [isEditing, setIsEditing] = useState(false);
    const [persona, setPersona] = useState();
    const [biografia, setBiografia] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const user = getUser();

    useEffect(()=>{
        getDataPersona();
    },[])    

    const handleBiografiaEdit = () =>{
        setIsEditing(!isEditing);
    }

    const handleSaveBiografia = () =>{
        const fetchBiografia = async () =>{
            const res =await fetch(`https://${import.meta.env.VITE_DIR_IP}/add-biografia?biografia=${biografia}&IDPersona=${idUser}`, {method: 'POST'});            
        }                
        fetchBiografia();                                                                
        setIsEditing(false);        
        navigate("/");
    }

    const getDataPersona = () =>{
        const fetchBiografia = async () =>{
            const res =await fetch(`https://${import.meta.env.VITE_DIR_IP}/get-biografia?IDPersona=${idUser}`, {method: 'GET'});            
            if(res.ok){
                const data = await res.json();                                
                setPersona(data);
                setIsLoading(false);
            }
        }                
        fetchBiografia();                                                                                
                
    }

    
    const handleOnchange = (e) =>{
        setBiografia(e.target.value);
    }


    return (
        <div className={styles.bibliography}>
            <div className={styles.headerBiografia}>
                <h2 className={styles.tituloBli}>Bibliografia</h2>
                {
                    user.IDUsuario === idUser ? isEditing ? <FiSave size={25} onClick={handleSaveBiografia} /> : <ImPencil2 size={20} onClick={handleBiografiaEdit} /> : ""
                }
            </div>
            {
                isLoading ? 

                <Loading />
                :                
                isEditing ? 
                    <textarea value={biografia} placeholder='Escribe tu biografia' className={styles.edtiBiografia} onChange={handleOnchange}/> 
                    : 
                    <p>{persona.bio !== "" ? persona.bio : "Escribe tu biografia ..."}</p>
            
            }
        </div>
    )
}

export default Biografia;