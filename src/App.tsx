import React, { Fragment, useCallback, useState } from "react";
import "./App.css";

import Terminal from "./components/common/Terminal";
import Dock from "./components/common/Dock";
import useScreenSizeStatus from "./hooks/useScreenSizeStatus";
import { styled } from "styled-components";

const TopLineContainer = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(${process.env.PUBLIC_URL + "/os-wallpaper.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function App() {
  const { isMobile, isDesktop } = useScreenSizeStatus();
  const [isContentVisible, setIsContentVisible] = useState(false);

  const onAnimationDone = useCallback(() => {
    setIsContentVisible(true);
  }, []);

  const dockItems = [
    {
      icon: process.env.PUBLIC_URL + "/logos/uber-logo.png",
      onClick: () => console.log("Uber clicked"),
      alt: "Uber"
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/verkada-logo.webp",
      onClick: () => console.log("Verkada clicked"),
      alt: "Verkada"
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/molex-logo.png",
      onClick: () => console.log("Molex clicked"),
      alt: "Molex"
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/ats-logo.webp",
      onClick: () => console.log("ATS clicked"),
      alt: "ATS"
    }
  ];

  return (
    <AppContainer>
      <TopLineContainer isRow={isDesktop}>
        <Terminal onAnimationDone={onAnimationDone} />
        
        {isContentVisible && (
            <Dock items={dockItems} size={60} dividerIndex={2} />
        )}
      </TopLineContainer>
    </AppContainer>
  );
}

export default App;
