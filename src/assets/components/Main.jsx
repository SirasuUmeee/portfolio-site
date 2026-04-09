import Product from "./Product";
import About from "./About";
import News from "./News";
import Contact from "./Contact";

const Main = ({ scrollMarkerRef }) => {

    return (
        <main className="main-container main-content">
            <div id="scroll-marker" ref={scrollMarkerRef}></div>
            <Product />
            <About />
            <News />
            <Contact />
        </main>
    );
};

export default Main;