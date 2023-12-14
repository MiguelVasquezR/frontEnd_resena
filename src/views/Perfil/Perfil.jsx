import styles from './Perfil.module.css';
import Header from '../../components/Header/Header';
import ItemInformationUser from '../../components/ItemInformationUser/ItemInformationUser';
import { useState } from 'react';
import Publicacion from '../../components/Publicacion/Publicacion';
import Lista from '../../components/Lista/Lista';
import { useNavigate } from 'react-router-dom';
import { getPersona } from '../../hooks/Aut';

function Perfil() {
    const redes = ["Facebook", "Instagram", "Git Hub"];
    const generos = ["Novela", "Cuento"];
    const [option, setOption] = useState(true);
    const persona = getPersona();

    const handleClicOption = (e) =>{
        if (e.target.id === "resena"){
            setOption(true);
        }else if(e.target.id === 'lista'){
            setOption(false);
        }
    }

    const navigate = useNavigate();
    const handleClicFollow = () =>{
        navigate('/follows')
    }

    return (
        <>
            <Header />
            <div className={styles.userConteiner}>
                < ItemInformationUser />
                <button className={styles.btnFollow}>Seguir</button>
            </div>

            <div className={styles.follow} onClick={handleClicFollow}>
                <div>
                    <h2 className={styles.h2}>Seguidores</h2>
                    <p className={styles.p}>1,200</p>
                </div>

                <div>
                    <h2 className={styles.h2}>Seguidos</h2>
                    <p className={styles.p}>456</p>
                </div>
            </div>

            <div className={styles.bibliography}>
                <h2 className={styles.tituloBli}>Bibliografia</h2>
                <p>{persona.biografia ? persona.biografia : "Aún no hay información sobre el usuario"}</p>
            </div>

            <div className={styles.generos}>
                <h2 className={styles.h2Generos}>Géneros Favoritos</h2>
                <ul className={styles.ul}>
                    {generos.map((titulo) => {
                       return(<li className={styles.li}>{titulo}</li>);
                    })}                
                </ul>
            </div>

            <div className={styles.socialRedes}>
                <h2 className={styles.h2Red}>Redes Sociales</h2>
                <ul className={styles.ulRed}>
                    {redes.map((titulo) => {
                        return(<li className={styles.liRed}>{titulo}</li>);
                    })}
                </ul>
            </div>

            <div className={styles.contenidoContainer}>

                    <ul className={styles.ulContenido}>
                        <li onClick={handleClicOption} id='resena'>Reseña</li>
                        <li onClick={handleClicOption} id='lista'>Lista</li>
                    </ul>

                    <div className={styles.listasContiner}>
                        {option === true && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}><Publicacion /><Publicacion /><Publicacion /></div>}
                        {option === false && <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}><Lista /></div>}
                    </div>
            </div>




        </>
    )
}

export default Perfil;