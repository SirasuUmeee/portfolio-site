
const AboutItem = ({ item }) => {
    return (
        <figure className="about-figure-container" key={item.id}>
            <img className="about-image" src={item.image} alt={item.id} />
            <figcaption className="about-caption">
                <h3>dummy text dummy text dummy text dummy text dummy text</h3>
                <p className="hover-cursor"><span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odit veritatis error odio provident magnam consequatur nostrum earum facilis voluptatibus labore obcaecati debitis modi, alias hic iure impedit eos soluta.
                Ex quisquam a illum ipsa ipsum odit animi <span className="bold">voluptates</span>, eum, quia adipisci, perspiciatis distinctio. Temporibus assumenda quisquam sequi accusantium quod modi numquam laborum nisi impedit corrupti? Qui itaque molestias dignissimos.
                Architecto nam soluta, alias <span className="bold">temporibus</span> maxime ad repellendus corporis? Illum odio repellat eius ullam ea, consequatur cum voluptatibus, impedit nostrum vero nemo beatae asperiores ducimus porro minus voluptates <span className="bold">adipisci</span> eligendi!</p>
            </figcaption>
        </figure>
    );
};

export default AboutItem;