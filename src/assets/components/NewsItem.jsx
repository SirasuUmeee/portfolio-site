
const NewsItem = ({ item }) => {
    return (
        <li className="news-item hover-cursor" key={item.id} tabIndex={0}>
            <img src="/img/thumbtack.svg" alt="thumbtack" className="news-thumbtack svg-icon"/>
            <article>
                <figure className="news-figure-container">
                    <img className="news-image" src={item.image} alt={item.id} />
                    <figcaption className="news-caption">
                        <h3 className="news-title">{item.title}</h3>
                        <p className="news-text">{item.desc}</p>
                        <small className="news-date">{item.date}</small>        
                    </figcaption>
                </figure>
            </article>
        </li>
    );
};

export default NewsItem;