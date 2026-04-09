import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Product = () => {
    const [activateModal, setActivateModal] = useState(null);

    useEffect(() => {
        if (activateModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        };

        return () => document.body.style.overflow = "unset";
    }, [activateModal])

    const desc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore odio sit ullam? Explicabo in magni suscipit id non at soluta, cumque eveniet vitae magnam praesentium illum earum sit doloremque. Mollitia cum magni assumenda aliquid quo tempora nisi voluptatem ea adipisci sunt unde inventore magnam itaque eum ratione earum, iusto non. Laborum mollitia aperiam minima rem, blanditiis perferendis aspernatur molestias?"
    const PRODUCTS_ASSET = [
        {id: "html", name: "HTML5", desc: desc},
        {id: "css", name: "CSS", desc: desc},
        {id: "js", name: "JavaScript", desc: desc},
        {id: "react", name: "React", desc: desc},
        {id: "python3", name: "Python3", desc: desc},
        {id: "java", name: "Java", desc: desc},
        {id: "rust", name: "Rust", desc: desc},
    ];

    return (
        <section id="section-product">
            <h2 className="main-header-text">Products</h2>
            <ul className="product-container nav-list">
                {PRODUCTS_ASSET.map((product) => {
                    return (
                        <li className="product-item  hover-cursor" key={product.id}>
                            <figure className="product-figure-container">
                                <div className="product-img-container">
                                    <img
                                        className="product-icon"
                                        src={`./src/assets/img/${product.id}-icon.svg`}
                                        alt={product.id} />
                                    <span className="product-name">{product.name}</span>
                                </div>
                                <figcaption className="product-caption">
                                    <p>{product.desc}</p>
                                    <button className="learn-more" type="button" onClick={() => setActivateModal(product)}>
                                        <div className="hover-text">
                                            <img
                                                className="svg-icon"
                                                src="./src/assets/img/arrow-right.svg"
                                                alt="arrow" />
                                        </div>
                                    </button>
                                </figcaption>
                            </figure>
                        </li>
                    );
                })}
            </ul>
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
                                    src="./src/assets/img/close-icon.svg"
                                    alt="close" />
                            </button>
                            <img
                                className="modal-icon"
                                src={`./src/assets/img/${activateModal.id}-icon.svg`}
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
        </section>
    );
};

export default Product;