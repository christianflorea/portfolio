import { useRef, useState, useEffect } from 'react';

const useDivWidth = (): [React.RefObject<HTMLDivElement>, number] => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return [divRef, width];
};

export default useDivWidth;
