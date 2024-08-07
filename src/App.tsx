import React, { Fragment, useCallback, useRef, useState } from "react";
import "./App.css";

import Terminal from "./components/common/Terminal";
import About from "./components/sections/About";
import useScreenSizeStatus from "./hooks/useScreenSizeStatus";
import { styled } from "styled-components";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

const TopLineContainer = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
`;

function App() {
  const { isDesktop } = useScreenSizeStatus();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutMe = useCallback(() => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onAnimationDelayDone = useCallback(() => {
    scrollToAboutMe();
  }, [scrollToAboutMe]);

  const onAnimationDone = useCallback(() => {
    setIsContentVisible(true);
  }, []);

  return (
    <div className="App">
      <TopLineContainer isRow={isDesktop}>
        <Terminal
          onAnimationDone={onAnimationDone}
          onAnimationDelayDone={onAnimationDelayDone}
        />
        <div ref={aboutSectionRef} />
        {isContentVisible && (
          <Fragment>
            <About />
            <Experience />
            <Projects />
          </Fragment>
        )}
      </TopLineContainer>
    </div>
  );
}

export default App;
