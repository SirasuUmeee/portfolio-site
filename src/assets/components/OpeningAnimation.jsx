import { useEffect, useRef, useState } from "react";

const ANIMATION_TEXT_ASSETS = {
    jsSyntax: [
        {target: "text-box", text: "console", color: "#d44c3b", speed: 200},
        {target: "text-box", text: ".log", color: "#61afef", speed: 200},
        {target: "paren", text: "()", color: "#abb2bf", speed: 200, type: "double"},
        {target: "semicolon", text: ";", color: "#abb2bf", speed: 300},
        {target: "quote", text: '""', color: "#98c379", speed: 200, type: "double"}
    ],
    javaSyntax: [
        {target: "text-box", text: "System", color: "#d44c3b", speed: 200},
        {target: "text-box", text: ".out", color: "#d44c3b", speed: 200},
        {target: "text-box", text: ".println", color: "#61afef", speed: 200},
        {target: "paren", text: "()", color: "#abb2bf", speed: 200, type: "double"},
        {target: "semicolon", text: ";", color: "#abb2bf", speed: 300},
        {target: "quote", text: '""', color: "#98c379", speed: 200, type: "double"}
    ],
    pythonSyntax: [
        {target: "text-box", text: "print", color: "#61afef", speed: 200},
        {target: "paren", text: "()", color: "#abb2bf", speed: 200, type: "double"},
        {target: "semicolon", text: ";", color: "#abb2bf", speed: 300},
        {target: "quote", text: '""', color: "#98c379", speed: 200, type: "double"}
    ],
    rubySyntax: [
        {target: "text-box", text: 'puts ', color: "#61afef", speed: 200},
        {target: "paren", text: '""', color: "#98c379", speed: 200, type: "double"}
    ],
    "cPlusPlusSyntax": [
        {target: "text-box", text: 'cout ', color: "#abb2bf", speed: 200},
        {target: "text-box", text: '<< ', color: "#61afef", speed: 200},
        {target: "quote", text: '""', color: "#98c365", speed: 200, type: "double"},
        {target: "semicolon", text: ';', color: "#abb2bf", speed: 300}
    ],
    phpSyntax: [
        {target: "text-box", text: 'echo ', color: "#61afef", speed: 200},
        {target: "quote", text: '""', color: "#98c365", speed: 200, type: "double"},
        {target: "semicolon", text: ';', color: "#abb2bf", speed: 300}
    ],
    goSyntax: [
        {target: "text-box", text: 'fmt', color: "#d44c3b", speed: 200},
        {target: "text-box", text: '.Println', color: "#61afef", speed: 200},
        {target: "paren", text: "()", color: "#abb2bf", speed: 200, type: "double"},
        {target: "quote", text: '""', color: "#98c365", speed: 200, type: "double"}
    ],
    pascalSyntax: [
        {target: "text-box", text: 'writeln', color: "#61afef", speed: 200},
        {target: "paren", text: "()", color: "#abb2bf", speed: 200, type: "double"},
        {target: "quote", text: "''", color: "#98c365", speed: 200, type: "double"},
        {target: "semicolon", text: ';', color: "#abb2bf", speed: 200},
    ],

    commonText: {target: "context", text: "Hello World!", color: "#98c379", speed: 150}
};

const OpeningAnimation = () => {
    const containerRef = useRef(null);
    const [ startAnimation, setAnimation ] = useState(true);

    useEffect(() => {
        const getScreen = containerRef.current;
        const textBoxes = getScreen.querySelectorAll(".entry-text");
        const textCursor = document.createElement('span');
        textCursor.className = 'typing-cursor';


        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


        const typeText = async (position, text, color, speed) => {
            position.appendChild(textCursor);

            for (const char of text) {
                const charNode = document.createTextNode(char);
                position.insertBefore(charNode, textCursor);
                await wait(speed);
            };
            position.style.color = color;
        };

        const startOpeningAnimation = async () => {
            const rand = Math.floor(Math.random() * (Object.keys(ANIMATION_TEXT_ASSETS).length - 1));
            const targetSyntax = Object.values(ANIMATION_TEXT_ASSETS)[rand];
            let targetSpanIndex = 0;
            
            // Animation order
            await wait(1000);
            for (const element of targetSyntax) {
                const { target, text, color, speed, type = "single" } = element;
                let pos;

                if (type === "single") {
                    pos = target === "text-box"
                        ? textBoxes[targetSpanIndex]
                        : getScreen.querySelector(`.text-${target}`);
                    await typeText(pos, text, color, speed);
                } else {
                    const positions = getScreen.querySelectorAll(`.text-${target}`);
                    await Promise.all(Array.from(positions).map((pos, i) => {
                        typeText(pos, text[i] || "", color, speed);
                    }));
                };
                targetSpanIndex++;
            };

            const common = ANIMATION_TEXT_ASSETS.commonText;
            const pos = getScreen.querySelector(`.text-${common.target}`);
            await typeText(pos, common.text, common.color, common.speed);

            await wait(300);
            textCursor.remove();

            await wait(700);
            const getRipple = getScreen.querySelector(".ripple-circle");
            getRipple.classList.add("activate-ripple");
            
            await wait(1500);
            getScreen.classList.add("move-up");

            await wait(2000);
            setAnimation(false);
        };
        startOpeningAnimation();
    }, []);

    return (
        <>
        {startAnimation && (
            <div className="opening-animation-container" ref={containerRef}>
                <div className="loading-content">
                    <div className="ripple-circle"></div>
                    <span className="type-text-container">
                        <span className="entry-text"></span>
                        <span className="entry-text"></span>
                        <span className="entry-text"></span>
                        <span className="entry-text"></span>
                        <span className="entry-text"></span>

                        <span className="type-text-container">
                            <span className="text-paren"></span>
                            <span className="text-quote"></span>
                            <span className="text-context"></span>
                            <span className="text-quote"></span>
                            <span className="text-paren"></span>
                        </span>
                        <span className="text-semicolon"></span>
                    </span>
                </div>
            </div>
        )}
        </>
    );
};

export default OpeningAnimation;