import React from 'react';


type RowProps = {
  children: React.ReactNode;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
};

const Row = ({children, gap, justifyContent, alignItems, width }: RowProps) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent,
      gap,
      alignItems,
      width
    }}>
     {children}
    </div>
  );
}

export default Row;
