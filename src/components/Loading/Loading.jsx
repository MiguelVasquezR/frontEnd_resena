
import { RiseLoader } from "react-spinners"
import styles from './Loading.module.css'

export default function Loading({isLoging}){
    return(
        <div className={styles.container}>
            <RiseLoader
                    color={'#006edf'}
                    loading={isLoging}
                    cssOverride={{
                        display: "block",
                        margin: "0 auto",
                        borderColor: "red",
                    }}
                    size={20}
                    speedMultiplier={.8}
                />
                <h2 className={styles.msj}>Cargando</h2>
        </div>
    )

}