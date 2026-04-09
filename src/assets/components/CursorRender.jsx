import { useRef, useEffect } from "react";

const CursorRender = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const target = e.target;

            if (target && target.closest(".main-content")) {
                outlineRef.current.classList.add("in-content-area");
            } else {
                outlineRef.current.classList.remove("in-content-area");
            };

            if (target && target.closest(".hover-cursor")) {
                dotRef.current.classList.add("is-hover-area");
                outlineRef.current.classList.add("is-hover-area");
            } else {
                dotRef.current.classList.remove("is-hover-area");
                outlineRef.current.classList.remove("is-hover-area");
            };

            if (target && target.closest(".disable-cursor-area")) {
                dotRef.current.classList.add("is-hidden-cursor");
                outlineRef.current.classList.add("is-hidden-cursor");
            } else {
                dotRef.current.classList.remove("is-hidden-cursor");
                outlineRef.current.classList.remove("is-hidden-cursor");
            };            
        };
        window.addEventListener('mousemove', onMouseMove);

        function animate() {
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;

            dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            outlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;

            requestRef.current = requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef}></div>
            <div className="cursor-outline" ref={outlineRef}></div>
        </>
    );
};

export default CursorRender;