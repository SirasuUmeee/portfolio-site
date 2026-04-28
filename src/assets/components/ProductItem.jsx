
const ProductItem = ({ item, setActivateModal }) => {
    
    return (
        <li className="product-item  hover-cursor" key={item.id}>
            <figure className="product-figure-container">
                <div className="product-img-container">
                    <img
                        className="product-icon"
                        src={`/img/${item.id}-icon.svg`}
                        alt={item.id} />
                    <span className="product-name">{item.name}</span>
                </div>
                <figcaption className="product-caption">
                    <p>{item.desc}</p>
                    <button className="learn-more" type="button" onClick={() => setActivateModal(item)}>
                        <div className="hover-text">
                            <img
                                className="svg-icon"
                                src="/img/arrow-right.svg"
                                alt="arrow" />
                        </div>
                    </button>
                </figcaption>
            </figure>
        </li>
    );
};

export default ProductItem;