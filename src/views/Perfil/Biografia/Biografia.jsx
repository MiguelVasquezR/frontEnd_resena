import styles from './Biografia.module.css';
import {ImPencil2} from 'react-icons/im'
import {FiSave} from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { getPersona, upload } from '../../../hooks/Aut';
import { useNavigate } from 'react-router-dom';

function Biografia() {
    const [isEditing, setIsEditing] = useState(false);
    const persona = getPersona();        
    const [biografia, setBiografia] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        upload();        
    },[isEditing])

    const handleBiografiaEdit = () =>{
        setIsEditing(!isEditing);
    }

    const handleSaveBiografia = () =>{
        const fetchBiografia = async () =>{
            const res =await fetch(`http://192.168.1.67:4567/add-biografia?biografia=${biografia}&IDPersona=${persona.IDPersona}`, {method: 'POST'});
            upload();            
        }                
        fetchBiografia();                                                                
        setIsEditing(false);        

        navigate("/");
    }

    const handleOnchange = (e) =>{
        setBiografia(e.target.value);
    }


    return (
        <div className={styles.bibliography}>
            <div className={styles.headerBiografia}>
                <h2 className={styles.tituloBli}>Bibliografia</h2>
                {isEditing ? <FiSave size={25} onClick={handleSaveBiografia} /> : <ImPencil2 size={20} onClick={handleBiografiaEdit} />}
            </div>
            {isEditing ? <textarea value={biografia} placeholder='Escribe tu biografia' className={styles.edtiBiografia} onChange={handleOnchange}/> : <p>{persona.biografia ? persona.biografia : "Escribe tu biografia ..."}</p>}
        </div>
    )
}

export default Biografia;