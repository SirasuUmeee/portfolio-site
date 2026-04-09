const Hero = () => {

    return (
        <section className="hero-container" id="section-top">
            <video
                className="hero-video"
                src="./src/assets/video/hero-hq-loop.mp4"
                autoPlay
                muted
                loop
                playsInline
            ></video>
            <h1 className="hero-caption">Hello World!</h1>
        </section>
    );
};

export default Hero;