

export function getNombreAutores(){
    console.log("Entro a log");
    const fetchAutores = async () => {
        const res = await fetch(`http://${import.meta.env.VITE_DIR_IP}:4567/nombre-autores`, {method: 'GET'});
        const datos = await res.json();
        console.log(datos);
        return datos;
    }
    return fetchAutores();
}