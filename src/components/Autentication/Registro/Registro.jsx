import { useState } from "react";
import DatosPersonales from "./DatosPersonales/DatosPersonales";
import DatosCuenta from "./DatosCuenta/DatosCuenta";
import SelectGenero from "./SelectGenero/SelectGenero";

function Registro(){
    const [option, setOption] = useState(0);

    const handleClicRegistro = (e) => {
        setOption(e);
    }

    return(
        <div>
            {option===0 && <DatosPersonales clickHijo={handleClicRegistro}/>}
            {option===1 && <DatosCuenta clickHijo={handleClicRegistro}/>}
            {option===2 && <SelectGenero />}
        </div>
    )
}

export default Registro;