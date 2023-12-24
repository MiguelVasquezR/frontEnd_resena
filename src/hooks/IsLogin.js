import { getPersona, getUser } from "./Aut"

export const IsLoging = () => {
    if(getPersona() && getUser()){
        return true;
    }else{
        return false;
    }
}