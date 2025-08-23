// Dock.tsx
import React, { useRef } from "react";
import styled, { css } from "styled-components";

type DockItem = {
  icon?: string;
  text?: string;
  onClick: () => void;
  alt?: string;
};

type DockProps = {
  items: DockItem[];
  size?: number;
  className?: string;
  dividerIndex?: number;
  scaleIntensity?: number;
  disableScaling?: boolean;
};

/* ------------------------------ Public API ------------------------------ */

export const Dock: React.FC<DockProps> = ({
  items,
  size = 60,
  className,
  dividerIndex,
  scaleIntensity = 5,
  disableScaling = false,
}) => {
  return disableScaling ? (
    <StaticDockWrap className={className} $baseSize={size} role="navigation" aria-label="Application Dock">
      <DockList>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <StaticApp $isText={!!item.text}>
              {item.text ? (
                <TextButton type="button" onClick={item.onClick} aria-label={item.alt || item.text || "Dock app"}>
                  <TextTile>
                    <TextLabel>{item.text}</TextLabel>
                  </TextTile>
                </TextButton>
              ) : (
                <IconButton type="button" onClick={item.onClick} aria-label={item.alt || "Dock app"}>
                  <Icon src={item.icon || ""} alt={item.alt || ""} draggable={false} />
                </IconButton>
              )}
            </StaticApp>
            {dividerIndex !== undefined && idx === dividerIndex && <Divider role="separator" />}
          </React.Fragment>
        ))}
      </DockList>
    </StaticDockWrap>
  ) : (
    <DockWithScaling
      items={items}
      size={size}
      className={className}
      dividerIndex={dividerIndex}
      scaleIntensity={scaleIntensity}
    />
  );
};

/* -------------------------- Scaling Dock variant ------------------------- */

const DockWithScaling: React.FC<
  Required<Pick<DockProps, "items" | "size" | "scaleIntensity">> &
    Pick<DockProps, "className" | "dividerIndex">
> = ({ items, size, className, dividerIndex, scaleIntensity }) => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;
    const mouseX = ev.clientX;
    const rect = ev.currentTarget.getBoundingClientRect();
    const left = rect.left;
    const w = rect.width;

    const scaleValue = (value: number, from: [number, number], to: [number, number]) => {
      const scale = (to[1] - to[0]) / (from[1] - from[0]);
      const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
      return Math.floor(capped * scale + to[0]);
    };

    const cursorDistance = (mouseX - left) / w;
    const offset = scaleValue(cursorDistance, [0, 1], [scaleIntensity * -1, scaleIntensity]);

    dockRef.current.style.setProperty("--dock-offset-left", `${offset * -1}px`);
    dockRef.current.style.setProperty("--dock-offset-right", `${offset}px`);
  };

  return (
    <ScalingDockWrap
      ref={dockRef}
      className={className}
      $baseSize={size}
      role="navigation"
      aria-label="Application Dock"
    >
      <DockList>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <App $isText={!!item.text} onMouseMove={handleAppHover}>
              {item.text ? (
                <TextButton type="button" onClick={item.onClick} aria-label={item.alt || item.text || "Dock app"}>
                  <TextTile>
                    <TextLabel>{item.text}</TextLabel>
                  </TextTile>
                </TextButton>
              ) : (
                <IconButton type="button" onClick={item.onClick} aria-label={item.alt || "Dock app"}>
                  <Icon src={item.icon || ""} alt={item.alt || ""} draggable={false} />
                </IconButton>
              )}
            </App>
            {dividerIndex !== undefined && idx === dividerIndex && <Divider role="separator" />}
          </React.Fragment>
        ))}
      </DockList>
    </ScalingDockWrap>
  );
};

/* ------------------------------ Shared styles ---------------------------- */

const DockChrome = css`
  margin: auto auto 12px auto;
  padding: 6px 12px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
`;

const DockList = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IconButton = styled.button`
  aspect-ratio: 1; /* square for icons */
  width: 100%;
  height: auto;
  border: 0;
  padding: 0;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }
`;

const TextButton = styled.button`
  /* fill parent (which is already wider via --ratio) */
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  border-radius: 16px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;

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

const TextTile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #bfe3ff;
  border: 3px solid rgba(34, 41, 47, 0.9);
  display: flex; align-items: center; justify-content: center;
  box-sizing: border-box;
`;

const TextLabel = styled.span`
  font-size: calc(var(--h-base) * 0.2); /* scale with item height */
  font-weight: 600;
  color: #22292f;
  line-height: 1.1;
  text-align: center;
  user-select: none;
  transition: font-size 100ms cubic-bezier(0.25, 1, 0.5, 1);
`;

const Divider = styled.li`
  width: 1px;
  height: calc(var(--h-base) * 0.9);
  margin: 0 12px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  align-self: center;
  pointer-events: none;
`;

/* --------------------------- Static Dock styles -------------------------- */

const StaticDockWrap = styled.nav<{ $baseSize: number }>`
  ${DockChrome}
  --h-base: ${({ $baseSize }) => `${$baseSize}px`};
`;

const StaticApp = styled.li<{ $isText: boolean }>`
  /* ratio 1 for icons, 1.5 for text */
  --ratio: ${({ $isText }) => ($isText ? 1.1 : 1)};

  width: calc(var(--h-base) * var(--ratio));
  height: var(--h-base);
  flex-shrink: 0;
  display: flex; justify-content: center; align-items: center;
`;

/* -------------------------- Scaling Dock styles -------------------------- */

const ScalingDockWrap = styled.nav<{ $baseSize: number }>`
  ${DockChrome}
  --h-base: ${({ $baseSize }) => `${$baseSize}px`};
  --h-1: calc(var(--h-base) + 10px);
  --h-2: calc(var(--h-base) + 20px);
  --h-hover: calc(var(--h-base) + 30px);
`;

const App = styled.li<{ $isText: boolean }>`
  --ratio: ${({ $isText }) => ($isText ? 1.5 : 1)};

  width: calc(var(--h-base) * var(--ratio));
  height: var(--h-base);
  flex-shrink: 0;
  display: flex; justify-content: center; align-items: center;

  transition:
    width 100ms cubic-bezier(0.25, 1, 0.5, 1),
    height 100ms cubic-bezier(0.25, 1, 0.5, 1),
    margin-top 100ms cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    width: calc(var(--h-hover) * var(--ratio));
    height: var(--h-hover);
    margin-top: -30px;
  }

  /* Right neighbors */
  &:hover + & {
    width: calc((var(--h-2) + var(--dock-offset-right, 0px)) * var(--ratio));
    height: calc(var(--h-2) + var(--dock-offset-right, 0px));
    margin-top: calc(-20px + var(--dock-offset-right, 0px) * -1);
  }
  &:hover + & + & {
    width: calc((var(--h-1) + var(--dock-offset-right, 0px)) * var(--ratio));
    height: calc(var(--h-1) + var(--dock-offset-right, 0px));
    margin-top: calc(-10px + var(--dock-offset-right, 0px) * -1);
  }

  /* Left neighbors */
  &:has(+ &:hover) {
    width: calc((var(--h-2) + var(--dock-offset-left, 0px)) * var(--ratio));
    height: calc(var(--h-2) + var(--dock-offset-left, 0px));
    margin-top: calc(-20px + var(--dock-offset-left, 0px) * -1);
  }
  &:has(+ & + &:hover) {
    width: calc((var(--h-1) + var(--dock-offset-left, 0px)) * var(--ratio));
    height: calc(var(--h-1) + var(--dock-offset-left, 0px));
    margin-top: calc(-10px + var(--dock-offset-left, 0px) * -1);
  }
`;

export default Dock;