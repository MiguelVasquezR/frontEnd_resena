

export function getNombreAutores(){
    console.log("Entro a log");
    const fetchAutores = async () => {
        const res = await fetch(`http://192.168.100.6:4567/nombre-autores`, {method: 'GET'});
        const datos = await res.json();
        console.log(datos);
        return datos;
    }
    return fetchAutores();
}