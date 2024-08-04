import { useState, useEffect } from "react";

interface UseTypingEffectProps {
  initialDelay?: number;
  finishDelay?: number;
  typingSpeed?: number;
  fullCommand: string;
  onAnimationDone: () => void;
  onAnimationDelayDone?: () => void;
}

const useTypingEffect = ({
  initialDelay = 1000,
  finishDelay = 2000,
  typingSpeed = 400,
  fullCommand,
  onAnimationDone,
  onAnimationDelayDone,
}: UseTypingEffectProps) => {
  const [command, setCommand] = useState<string>("");
  const [showNextCommand, setShowNextCommand] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let finishTimeout: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setCommand(fullCommand.slice(0, index + 1));
        index++;

        if (index === fullCommand.length) {
          clearInterval(typingInterval);
          setShowNextCommand(true);
          onAnimationDone();

          finishTimeout = setTimeout(() => {
            onAnimationDelayDone && onAnimationDelayDone();
          }, finishDelay);
        }
      }, typingSpeed);
    };

    const initialTimeout = setTimeout(() => {
      startTyping();
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(typingInterval);
      clearTimeout(finishTimeout);
    };
  }, [
    fullCommand,
    initialDelay,
    typingSpeed,
    finishDelay,
    onAnimationDone,
    onAnimationDelayDone,
  ]);

  return { command, showNextCommand };
};

export default useTypingEffect;
