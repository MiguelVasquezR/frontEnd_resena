import { useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";

function E404(){    
    const error = useRouteError();
    return(
        <>
            <Header />
            <h2>Error 404</h2>
            <p>{error.value}</p>        
        </>
    )
}

export default E404;