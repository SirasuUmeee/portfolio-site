// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const ProductModal = ({ state }) => {
    const [ activateModal, setActivateModal ] = state;

    return (
        <AnimatePresence>
            {activateModal && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onClick={() => setActivateModal(null)}>
                    <motion.div
                        className="modal-container"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}>
                        <button className="modal-button hover-cursor" onClick={() => setActivateModal(null)}>
                            <img
                                className="modal-icon"
                                src="/img/close-icon.svg"
                                alt="close" />
                        </button>
                        <img
                            className="modal-icon"
                            src={`/img/${activateModal.id}-icon.svg`}
                            alt={activateModal.id} />
                        <h3>{activateModal.name}</h3>
                        
                        <div  className="modal-window-container hover-cursor">
                            <svg className="window-bar" xmlns="http://www.w3.org/2000/svg" role="img">
                                <circle cx="25" cy="12" r="5.5" fill="#f48384"/>
                                <circle cx="45" cy="12" r="5.5" fill="#fbd172"/>
                                <circle cx="65" cy="12" r="5.5" fill="#82c880"/>
                            </svg>
                            <p>{activateModal.desc}</p>
                            <p>{activateModal.desc}</p>
                            <p>{activateModal.desc}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;