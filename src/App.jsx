import { useRef } from "react";
import OpeningAnimation from "./assets/components/OpeningAnimation";
import CursorRender from "./assets/components/CursorRender";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

function App() {
  const scrollMarkerRef = useRef(null);
  const NAV_ASSET = [
      {id: "product", name: "Product"},
      {id: "about", name: "About me"},
      {id: "news", name: "News"},
      {id: "contact", name: "Contact"},
  ];

  return (
    <>
      <OpeningAnimation />
      <CursorRender />
      <Header scrollMarkerRef={scrollMarkerRef} NAV_ASSET={NAV_ASSET} />
      <Hero />
      <Main scrollMarkerRef={scrollMarkerRef} />
      <Footer NAV_ASSET={NAV_ASSET} />
    </>
  );
};

export default App