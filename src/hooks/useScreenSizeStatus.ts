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
    const updateScreenSizeStatus = () => {
      const isMobileSize = width < MOBILE_SIZE || height < MOBILE_SIZE;
      const isResponsiveSize = width < RESPONSIVE_SIZE && width >= MOBILE_SIZE;
      const isDesktopSize = !isMobileSize && !isResponsiveSize;

      setIsMobile(isMobileSize);
      setIsResponsive(isResponsiveSize);
      setIsDesktop(isDesktopSize);
    };

    updateScreenSizeStatus();
  }, [width, height]);

  return { isMobile, isResponsive, isDesktop };
};

export default useScreenSizeStatus;
