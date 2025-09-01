import { useEffect, useState } from "react";

export default function useLoadBackgroundImage(src: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    if (img.complete) {
      setLoaded(true);
      return;
    }

    const onLoad = () => setLoaded(true);
    const onError = () => setLoaded(true);

    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src]);

  return loaded;
}
