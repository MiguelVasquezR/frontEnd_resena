import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../views/Home/Home";
import Notification from '../views/Notification/Notification';
import Chat from '../views/Chat/Chat';
import Genero from "../views/Genero/Genero";
import Perfil from "../views/Perfil/Perfil";
import Configuration from "../views/Configuration/Configuration";
import Foro from "../views/Foro/Foro";
import Autentication from "../views/Autentication/Autentication";
import Ayuda from "../views/Ayuda/Ayuda";
import CreateResena from "../views/CreateResena/CreateResena";
import InteractionMessage from "../views/Chat/InteractionMessage/InteractionMessage";
import CreateForo from '../components/Foro/CreateForo/CreateForo'
import ForoMain from "../views/Foro/ForoMain/ForoMain";
import Follow from '../views/Follow/Follow';
import CrearLista from '../views/Lista/CrearLista/CrearLista'
import E404 from "../views/Error/E404.JSX";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,        
        errorElement: <E404 />
    },
    {
        path: "/notification",
        element: <Notification />
    },
    {
        path: "/message",
        element: <Chat />
    },
    {
        path: "/novela",
        element: <Genero />,        
    },
    {
        path: "/autor",
        element: <Genero />,        
    },
    {
        path: "/perfil",
        element: <Perfil />,
    },
    {
        path: "/configuracion",
        element: <Configuration />,
    },
    {
        path: "/Foro",
        element: <Foro />,        
    },
    {
        path: "/create-foro",
        element: <CreateForo />,
    },
    {
        path: "/foro-main",
        element: <ForoMain />,
    },
    {
        path: "/Autentication",
        element: <Autentication />,
    },
    {
        path: "/Ayuda",
        element: <Ayuda />,
    },
    {
        path: "/Create-resena",
        element: <CreateResena />,
    },
    {
        path: "/chat-user",
        element: <InteractionMessage />,
    },
    {
        path: "/follows",
        element: <Follow />,
    },
    {
        path: "/crear-lista",
        element: <CrearLista />,
    },

]);

function Router(){
    return(
        <>
        <RouterProvider  router={router}/>
        </>
    )
}

export default Router;