import styles from './Foro.module.css';
import Header from '../../components/Header/Header';
import ForoMain from '../../components/Foro/ForoMain/ForoMain';

import { IsLoging } from "../../hooks/IsLogin";
import IS from "../../Alerts/IniciaSesión/IS";

function Foro(){
    return(
        <>
            <Header />
            {
                IsLoging() ? 
                <ForoMain />
                :
                <IS />
            }
            
        </>
    )
}

export default Foro;