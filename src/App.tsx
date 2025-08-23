import React, { useCallback, useState } from "react";
import "./App.css";

import Terminal from "./components/common/Terminal";
import Dock from "./components/common/Dock";
import useScreenSizeStatus from "./hooks/useScreenSizeStatus";
import { styled } from "styled-components";
import Modal from "./components/common/Modal";
import Projects from "./components/sections/Projects";
import ExperienceDesktop from "./components/sections/ExperienceDesktop";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const onModalClick = useCallback((content: React.ReactNode) => {
    setIsModalOpen(true);
    setModalContent(content);
  }, []);

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  const dockItems = [
    {
      text: "Experience",
      onClick: () => onModalClick(<ExperienceDesktop />),
    },
    {
      text: "Projects",
      onClick: () => onModalClick(<Projects />),
      alt: "Molex",
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/resume-logo.png",
      onClick: () =>
        openInNewTab(process.env.PUBLIC_URL + "/documents/resume.pdf"),
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/linkedin-logo.png",
      onClick: () =>
        openInNewTab("https://www.linkedin.com/in/christianflorea/"),
    },
    {
      icon: process.env.PUBLIC_URL + "/logos/github-logo.png",
      onClick: () =>
        openInNewTab("https://github.com/christianflorea"),
    },
  ];

  return (
    <AppContainer>
      <TopLineContainer isRow={!isDesktop}>
        <Terminal onAnimationDone={() => null} />
        <Dock
          items={dockItems}
          size={isDesktop ? 80 : isMobile ? 50 : 60}
          dividerIndex={1}
          scaleIntensity={1}
          disableScaling={!isDesktop}
        />
      </TopLineContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </AppContainer>
  );
}

export default App;
