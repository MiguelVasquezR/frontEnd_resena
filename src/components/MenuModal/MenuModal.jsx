import styles from './MenuModal.module.css';

function MenuModal(cerra) {
    return (
        <div>            
            {modalAbierto && (
                <div className="modal">
                    <div className="modal-contenido">
                        <p>Contenido del modal aquí...</p>
                        <button onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuModal;