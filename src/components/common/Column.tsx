import React from "react";

type RowProps = {
  children: React.ReactNode;
  flex?: number;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
};

const Column = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  flex,
}: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent,
        gap,
        alignItems,
        width,
        flex,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
