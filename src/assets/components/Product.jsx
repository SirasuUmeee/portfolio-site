import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";

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

    return (
        <section id="section-product">
            <h2 className="main-header-text">Products</h2>
            <ul className="product-container nav-list">
                {PRODUCTS_ASSET.map((product) => (
                    <ProductItem key={product.id} item={product} setActivateModal={setActivateModal} />
                ))}
            </ul>

            <ProductModal state={[ activateModal, setActivateModal ]} />
            
        </section>
    );
};

export default Product;