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
        // console.log(foros);
    }, [setForos])

    const handleGetForos = () => {
        const functForos = async () => {
            const data = await axios.get('http://192.168.100.6:4567/foros');
            const fors = await data.data;
            setForos(fors);
            // console.log(foros);
        }
        functForos();
        /*console.log("data", data.data);
        setForos(data.data);*/
    }

    return (
        <div>
            <h2 style={{textAlign: 'center', fontSize: '30px', margin: '10px'}}>Foros</h2>
            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={handleClic}><MdForum color='white' size={30}/></div>
            </div>

            {foros ? foros.map((foro) => {
                return (
                    <ItemForo IDForo={foro.IDForo} foro={foro} nombre={foro.Nombre} cantUsuarios="1500" descripcion={foro.Descripcion}/>
                )
            }) : ""}
        </div>
    )
}

export default ForoMain;