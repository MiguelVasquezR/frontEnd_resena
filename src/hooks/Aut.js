export const getUser = () =>{  
  const localStorage = window.localStorage.getItem('localUserStorage');  
  const usuario = JSON.parse(localStorage);      
  return usuario;
}

export const getPersona = () =>{    
    const localStorage = window.localStorage.getItem('localPersonneStorage');  
    const persona = JSON.parse(localStorage);      
    return persona;  
}

export const addPersonne = () =>{
  const fetchEvent = async () =>{
    try{
      const user = getUser();
      const res = await fetch(`http://localhost:4567/persona?id=${user.IDPersona}`);  
      const persona = await res.json();
      window.localStorage.setItem('localPersonneStorage', JSON.stringify(persona));
    }catch(error){
      console.log(error);
    }
  }
  fetchEvent();
}

export const logout = () =>{
  window.localStorage.removeItem('localUserStorage');  
  window.localStorage.removeItem('localPersonneStorage');
}