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
      const res = await fetch(`http://192.168.100.6:4567/persona?id=${user.IDPersona}`, {method: 'GET'});  
      const persona = await res.json();           
      console.log(persona);
      window.localStorage.setItem('localPersonneStorage', JSON.stringify(persona));      
    }catch(error){
      console.log("Erro obtener persona" , error);
    }
  }
  fetchEvent();
}

export const upload = () =>{  
  const fetchEvent = async () =>{
    try{
      const user = getUser();
      const res = await fetch(`http://192.168.100.6:4567/persona?id=${user.IDPersona}`, {method: 'GET'});  
      const persona = await res.json();                             
      let localData = window.localStorage.getItem('localPersonneStorage');                  
      let existingData = localData ? JSON.parse(localData) : {};      
      Object.assign(existingData, persona);
      console.log(existingData)      
      window.localStorage.setItem('localPersonneStorage', JSON.stringify(existingData));
    }catch(error){
      console.log("Erro obtener persona" , error);
    }
  }
  fetchEvent();
}


export const logout = () =>{
  window.localStorage.clear();  
}