import React from "react";
import styled from "styled-components";
import Row from "./Row";

const ModalOverlay = styled.div`
  position: fixed;
  top: -7.5vh;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 1000;
  pointer-events: none;
`;

const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.8);
  max-width: 95vw;
  max-height: 80vh;
  overflow: hidden;
  position: relative;
  pointer-events: auto;
`;

const ModalControls = styled.div`
  padding: 9px 0 9px 12px;
  background-color: #999;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #666;
`;

const MacButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const CloseButton = styled(MacButton)`
  &:hover {
    background-color: #ff5f56 !important;
  }
`;

const ModalContent = styled.div`
  padding: 24px 0;
  overflow-y: auto;
  max-height: calc(90vh - 60px);
`;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, title }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <ModalOverlay 
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <ModalContainer>
        <ModalControls>
          <Row gap="8px">
            <CloseButton 
              style={{ backgroundColor: "#ff5f56" }}
              onClick={onClose}
              title="Close"
            />
            <MacButton style={{ backgroundColor: "#ffbd2e" }} />
            <MacButton style={{ backgroundColor: "#27c93f" }} />
          </Row>
        </ModalControls>
        <ModalContent>
          {content}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal; 