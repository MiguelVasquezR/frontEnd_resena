import { useNavigate } from 'react-router-dom';
import ItemForo from '../ItemForo/ItemForo';
import styles from './ForoMain.module.css';
import {MdForum} from 'react-icons/md'
import { useEffect, useState } from "react";
import axios from 'axios';

function ForoMain(){
    const navigate = useNavigate();

    const [foros, setForos] = useState([]);

    const handleClic = () => {
        navigate('/create-foro');
    }

    useEffect(() => {
        handleGetForos();        
    }, [setForos])

    const handleGetForos = () => {
        const functForos = async () => {
            const data = await axios.get(`https://${import.meta.env.VITE_DIR_IP}/foros`);
            const fors = await data.data;
            setForos(fors);            
        }
        functForos();        
    }

    return (
        <div>
            <h2 style={{textAlign: 'center', fontSize: '30px', margin: '10px'}}>Foros</h2>
            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={handleClic}><MdForum color='white' size={30}/></div>
            </div>

            {foros ? foros.map((foro) => {                
                return (
                    <ItemForo foro={foro}/>
                )
            }) : ""}
        </div>
    )
}

export default ForoMain;