// Dock.tsx
import React, { useRef } from "react";
import styled, { css } from "styled-components";

type DockItem = {
  icon: string;
  onClick: () => void;
  alt?: string;
};

type DockProps = {
  items: DockItem[];
  size?: number;
  className?: string;
  dividerIndex?: number;
  /** How strong the zoom effect is (default 5).
   * Larger = more aggressive scaling */
  scaleIntensity?: number;
};

const scaleValue = (
  value: number,
  from: [number, number],
  to: [number, number]
) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};

export const Dock: React.FC<DockProps> = ({
  items,
  size = 60,
  className,
  dividerIndex,
  scaleIntensity = 5,
}) => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const rect = ev.currentTarget.getBoundingClientRect();
    const iconPositionLeft = rect.left;
    const iconWidth = rect.width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [scaleIntensity * -1, scaleIntensity]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );
    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <DockWrap
      ref={dockRef}
      className={className}
      $baseSize={size}
      role="navigation"
      aria-label="Application Dock"
    >
      <DockList>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <App onMouseMove={handleAppHover}>
              <IconButton
                type="button"
                onClick={item.onClick}
                aria-label={item.alt || "Dock app"}
              >
                <Icon src={item.icon} alt={item.alt || ""} draggable={false} />
              </IconButton>
            </App>
            {dividerIndex !== undefined && idx === dividerIndex && (
              <Divider role="separator" />
            )}
          </React.Fragment>
        ))}
      </DockList>
    </DockWrap>
  );
};

/* ===================== Styled Components ===================== */

const DockWrap = styled.nav<{ $baseSize: number }>`
  --base-size: ${({ $baseSize }) => `${$baseSize}px`};
  --size-1: calc(var(--base-size) + 10px);
  --size-2: calc(var(--base-size) + 20px);
  --size-hover: calc(var(--base-size) + 30px);

  margin: auto auto 12px auto;
  padding: 6px 12px;
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15);
`;

const DockList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: flex-end;
`;

const appBase = css`
  width: var(--base-size);
  height: var(--base-size);
  position: relative;
  transition: width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 100ms;
`;

const Divider = styled.li`
  width: 1px;
  height: calc(var(--base-size) * 0.9);
  margin: 0 12px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  align-self: center;
`;

const App = styled.li`
  --gutter: 8px;
  padding-inline: var(--gutter);
  display: flex;
  justify-content: center;

  width: var(--base-size);
  height: var(--base-size);
  position: relative;
  transition: width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 100ms;

  &:hover {
    width: var(--size-hover);
    height: var(--size-hover);
    margin-top: -30px;
  }

  &:hover + & {
    width: calc(var(--size-2) + var(--dock-offset-right, 0px));
    height: calc(var(--size-2) + var(--dock-offset-right, 0px));
    margin-top: calc(-20px + var(--dock-offset-right, 0px) * -1);
  }

  &:hover + & + & {
    width: calc(var(--size-1) + var(--dock-offset-right, 0px));
    height: calc(var(--size-1) + var(--dock-offset-right, 0px));
    margin-top: calc(-10px + var(--dock-offset-right, 0px) * -1);
  }

  &:has(+ &:hover) {
    width: calc(var(--size-2) + var(--dock-offset-left, 0px));
    height: calc(var(--size-2) + var(--dock-offset-left, 0px));
    margin-top: calc(-20px + var(--dock-offset-left, 0px) * -1);
  }

  &:has(+ & + &:hover) {
    width: calc(var(--size-1) + var(--dock-offset-left, 0px));
    height: calc(var(--size-1) + var(--dock-offset-left, 0px));
    margin-top: calc(-10px + var(--dock-offset-left, 0px) * -1);
  }
`;

const IconButton = styled.button`
  aspect-ratio: 1;
  width: 100%;
  max-height: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
  border-radius: 12px;
`;

export default Dock;
