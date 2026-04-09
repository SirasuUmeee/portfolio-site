const News = () => {

    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit. Laborum accusamus totam blanditiis!";
    const NEWS_ASSET = [
        {id: "dummy_1", image: "https://placehold.jp/200x120.png", title: "dummy title", desc: desc, date: "2xxx-xx-01"},
        {id: "dummy_2", image: "https://placehold.jp/200x120.png", title: "dummy title", desc: desc, date: "2xxx-xx-02"},
        {id: "dummy_3", image: "https://placehold.jp/200x120.png", title: "dummy title", desc: desc, date: "2xxx-xx-03"},
        {id: "dummy_4", image: "https://placehold.jp/200x120.png", title: "dummy title", desc: desc, date: "2xxx-xx-04"},
        {id: "dummy_5", image: "https://placehold.jp/200x120.png", title: "dummy title", desc: desc, date: "2xxx-xx-05"}
    ];

    return (
        <section id="section-news">
            <h2 className="main-header-text">News</h2>
            <ul className="news-container nav-list">
                {NEWS_ASSET.map((news) => {
                    return (
                        <li className="news-item hover-cursor" key={news.id} tabIndex={0}>
                            {true && (
                                <img src="/img/thumbtack.svg" alt="thumbtack" className="news-thumbtack svg-icon"/>
                            )}
                            <article>
                                <figure className="news-figure-container">
                                    <img className="news-image" src={news.image} alt={news.id} />
                                    <figcaption className="news-caption">
                                        <h3 className="news-title">{news.title}</h3>
                                        <p className="news-text">{news.desc}</p>
                                        <small className="news-date">{news.date}</small>        
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default News;