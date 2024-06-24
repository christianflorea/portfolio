import { useState, useEffect } from 'react';
import useScreenSize from './useScreenSize';

const MOBILE_SIZE = 500;
const RESPONSIVE_SIZE = 1000;

interface ScreenSizeStatus {
  isMobile: boolean;
  isResponsive: boolean;
  isDesktop: boolean;
}

const useScreenSizeStatus = (): ScreenSizeStatus => {
  const { width, height } = useScreenSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isResponsive, setIsResponsive] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (width < MOBILE_SIZE || height < MOBILE_SIZE) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (width < RESPONSIVE_SIZE && width >= MOBILE_SIZE) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }

    if (!isMobile && !isResponsive) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [width, height]);

  return { isMobile, isResponsive, isDesktop };
};

export default useScreenSizeStatus;
