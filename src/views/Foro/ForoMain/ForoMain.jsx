import Header from "../../../components/Header/Header";
import PublicacionForo from "../../../components/Foro/PublicacionForo/PublicacionForo";
import styles from './ForoMain.module.css'
import {useState} from  'react';
import {getUser} from '../../../hooks/Aut'

function ForoMain(props){

    const searchParams = new URLSearchParams(location.search);
    const nombre = searchParams.get('nombre')
    const cantidad = searchParams.get('cant')
    const descripcion = searchParams.get('des')
    const [publicacion, setPublicacion] = useState('');
    const IDFo = searchParams.get('IDForo')


    const fetchPublicacion = () => {
        const user = getUser();
        const data = {
            IDUsuario: user.IDUsuario,
            IDForo: IDFo,
            Descripcion: publicacion,
            Like: 0,
            Dislike: 0,
        };
        const sendPublicacion = async () =>{
            const res = await fetch('http://localhost:4567/crear-publicacion', {method: 'POST', body: JSON.stringify(data)})
            if(res.ok){
            console.log('Exito');
            }
        }
        sendPublicacion();
    }


    const onChange = (e) =>{
         setPublicacion(e.target.value);
    }




    return(
        <div>
            <Header />

            <div className={styles.infoContainer}>
                <h2 className={styles.titulo}>{nombre}</h2>
                <h3 className={styles.cant}>{cantidad + " " +'usuarios'}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <div style={{position: 'relative', width:'100%', height:'40px'}}>
                    <button className={styles.btn}>Dejar Grupo</button>
                </div>
            </div>

            <div className={styles.publicationContainer}>
                <input onChange={onChange} type="text" placeholder="Publica" className={styles.tx}/>
                <button onClick={fetchPublicacion} className={styles.btnPublica}>Publicar</button>
            </div>

            <div>
                <PublicacionForo />
            </div>
            

        </div>
    )
}

export default ForoMain;