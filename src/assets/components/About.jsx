import AboutItem from "./AboutItem";

const ABOUT_ASSET = [
    {id: "dummy_1", image: "https://placehold.jp/500x300.png"},
    {id: "dummy_2", image: "https://placehold.jp/500x300.png"},
    {id: "dummy_3", image: "https://placehold.jp/500x300.png"},
];

const About = () => {
    return (
        <section id="section-about">
            <h2 className="main-header-text">About Me</h2>
            {ABOUT_ASSET.map(about => <AboutItem key={about.id} item={about} />)}
        </section>
    );
};

export default About;