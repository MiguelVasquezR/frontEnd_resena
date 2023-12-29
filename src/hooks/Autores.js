

export function getNombreAutores(){
    console.log("Entro a log");
    const fetchAutores = async () => {
        const res = await fetch(`https://${import.meta.env.VITE_DIR_IP}/nombre-autores`, {method: 'GET'});
        const datos = await res.json();
        console.log(datos);
        return datos;
    }
    return fetchAutores();
}