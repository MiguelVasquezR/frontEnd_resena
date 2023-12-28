import Header from "../../../components/Header/Header";
import PublicacionForo from "../../../components/Foro/PublicacionForo/PublicacionForo";
import styles from './ForoMain.module.css'
import { useEffect, useState } from 'react';
import { getUser } from '../../../hooks/Aut'

function ForoMain(props) {

    const searchParams = new URLSearchParams(location.search);
    const nombre = searchParams.get('nombre')
    const cantidad = searchParams.get('cant')
    const descripcion = searchParams.get('des')
    const IDFoto = searchParams.get('IDFoto')
    const IDForo = searchParams.get('IDForo')
    const [publicacion, setPublicacion] = useState('');
    const [participle, setParticiple] = useState('Unirse al foro');
    const [participantes, setParticipantes] = useState([]);


    useEffect(() => {
        fetch(`http://${import.meta.env.VITE_DIR_IPP}/getImages`).then(res => {console.log(res);}).catch(err=>console.log("Error", err));
        handleGetUsuario1();
    }, [])

    useEffect(() => {
        const user = getUser();
        const band = participantes.find((usuario) => {
            if (usuario.IDUsuario === user.IDUsuario) {
                return true;
            }
        })
        if (band) {
            setParticiple('Salirse del foro');
        } else {
            setParticiple('Unirse al foro');
        }

    }, [participantes])



    const handleGetUsuario1 = () => {
        const handleGetUsuario = async () => {
            const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/participantes?IDForo=${IDForo}`);
            if (res.ok) {
                const data = await res.json();
                setParticipantes(data);
            }
        }
        handleGetUsuario();
    }



    const fetchPublicacion = () => {
        if (publicacion.length > 0) {
            const user = getUser();
            const data = {
                IDUsuario: user.IDUsuario,
                IDForo: IDForo,
                Comentario: publicacion,
                Like: 0,
                Dislike: 0,
            };
            const sendPublicacion = async () => {
                const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/crear-publicacion`, { method: 'POST', body: JSON.stringify(data) })
                if (res.ok) {
                    console.log('Exito');
                }

                location.reload();
            }
            sendPublicacion();

            setPublicacion('');
        }
    }


    const onChange = (e) => {
        setPublicacion(e.target.value);
    }


    const handleAddGroup = () => {
        const user = getUser();

        if (participle === 'Unirse al foro') {
            const fetchAddGroup = async () => {
                const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/agregar-participante?IDUser=${user.IDUsuario}&IDForo=${IDForo}`, { method: 'POST' });
                if (res.ok) {
                    const data = await res.json()
                    console.log(data);
                    setParticiple('Salirse del foro');
                }
            }
            fetchAddGroup();
        } else if (participle === 'Salirse del foro') {
            const fetchAddGroup = async () => {
                const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}/delete-participante?IDUser=${user.IDUsuario}&IDForo=${IDForo}`, { method: 'DELETE' });
                if (res.ok) {
                    const data = await res.json()
                    console.log(data);
                    setParticiple('Unirse al foro');
                }
            }
            fetchAddGroup();
        }



    }


    return (
        <div>
            <Header />

            <div className={styles.infoContainer}>

                <div className={styles.containerInfo}>
                    <img src={`http://${import.meta.env.VITE_DIR_IP}:9000/` + IDFoto + '.png'} alt="Imagen perfil" className={styles.img} />

                    <section>
                        <h2 className={styles.titulo}>{nombre}</h2>                        
                    </section>

                </div>
                <p className={styles.descripcion}>{descripcion}</p>
                <div className={styles.containerBTNAgregar}>
                    <button onClick={handleAddGroup} className={styles.btn}>{participle}</button>
                </div>
            </div>

            {
                participle === 'Salirse del foro' ?
                    <div className={styles.publicationContainer}>
                        <textarea onChange={onChange} type="text" placeholder="Publica" className={styles.tx} />
                        <button onClick={fetchPublicacion} className={styles.btnPublica}>Publicar</button>
                    </div>
                    :
                    <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Para publicar debes unirte al grupo</h2>

            }



            <div className={styles.containerPublication}>
                <PublicacionForo IDForo={IDForo} />
            </div>


        </div>
    )
}

export default ForoMain;