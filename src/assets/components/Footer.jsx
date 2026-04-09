const Footer = ({ NAV_ASSET }) => {

    return (
        <footer id="section-footer">            
            <div className="footer-nav">
                <h2 className="footer-head-text">Navigation</h2>
                <div className="footer-icon-container">
                    <a href="#" className="jump-top">
                        <svg className="footer-jump-icon svg-icon hover-cursor" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
                <ul className="footer-nav-list nav-list">
                    {NAV_ASSET.map((nav) => {
                        return (
                            <li className="footer-nav-item hover-cursor" key={nav.id}>
                                <a href={`#section-${nav.id}`} className="footer-item-anchor nav-name">
                                {nav.name}</a>
                                <ul className="footer-inner-nav">
                                    <li><a href="#" className="inner-item">dummy</a></li>
                                    <li><a href="#" className="inner-item">dummy</a></li>
                                    <li><a href="#" className="inner-item">dummy</a></li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
                <small className="footer-copyright">Copyright © 2026 *dummy text*</small>
            </div>
        </footer>
    );
};

export default Footer;