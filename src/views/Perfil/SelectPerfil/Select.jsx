import Perfil from "../Perfil";
import { getUser } from "../../../hooks/Aut";

export default function Select(){

    const searchParams = new URLSearchParams(location.search);
    const idUser = searchParams.get('id');
    const user = getUser();

    if(idUser && idUser.length > 0){
        return <Perfil idusuario={idUser} />
    }else{
        return <Perfil idusuario={user.IDUsuario} />
    }


}