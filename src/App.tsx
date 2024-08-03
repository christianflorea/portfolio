import React, { useRef, useState } from "react";
import "./App.css";

import Terminal from "./components/common/Terminal";
import About from "./components/sections/About";
import useScreenSizeStatus from "./hooks/useScreenSizeStatus";
import { styled } from "styled-components";

const TopLineContainer = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

function App() {
  const { isDesktop } = useScreenSizeStatus();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = () =>
    aboutSectionRef.current
      ? aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
      : null;

  return (
    <div className="App">
      <TopLineContainer isRow={isDesktop}>
        <Terminal
          onAnimationDone={() => scrollToAboutMe()}
          onAnimationDelayDone={() => setIsContentVisible(true)}
        />
        <div ref={aboutSectionRef} />
        {isContentVisible && <About />}
      </TopLineContainer>
    </div>
  );
}

export default App;
