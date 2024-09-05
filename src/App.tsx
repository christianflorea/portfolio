import React, { Fragment, useCallback, useState } from "react";
import "./App.css";

import Terminal from "./components/common/Terminal";
import About from "./components/sections/About";
import useScreenSizeStatus from "./hooks/useScreenSizeStatus";
import { styled } from "styled-components";
import Projects from "./components/sections/Projects";
import ScrollIcon from "./components/common/ScrollIcon";
import ExperienceDesktop from "./components/sections/ExperienceDesktop";
import Footer from "./components/sections/Footer";

const TopLineContainer = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
`;

function App() {
  const { isMobile, isDesktop } = useScreenSizeStatus();
  const [isContentVisible, setIsContentVisible] = useState(false);

  const onAnimationDone = useCallback(() => {
    setIsContentVisible(true);
  }, []);

  return (
    <div className="App">
      <TopLineContainer isRow={isDesktop}>
        <Terminal onAnimationDone={onAnimationDone} />

        {isContentVisible && (
          <Fragment>
            <ScrollIcon />
            <About />
            <ExperienceDesktop />
            <Projects />
            <Footer />
          </Fragment>
        )}
      </TopLineContainer>
    </div>
  );
}

export default App;
