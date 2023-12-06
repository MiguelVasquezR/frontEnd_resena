export const logOut = () => {
  const u = window.localStorage.getItem('localUserStorage');
  const nu = JSON.parse(u);  
}

export const getUser = () =>{  
  const localStorage = window.localStorage.getItem('localUserStorage');  
  const usuario = JSON.parse(localStorage);  

  // const res = fetch(`http://localhost:4567/personas?IDPersona=${usuario.IDPersona}`);
  // const persona = res.json();
  // console.log(persona);


  return usuario;
}

export const getPersona = () =>{
  
}


export const logout = () =>{
  window.localStorage.removeItem('localUserStorage');  
}