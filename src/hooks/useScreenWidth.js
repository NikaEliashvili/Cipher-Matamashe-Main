import { useEffect } from "react";
import useScreenStore from "../store/screenStore";

const useScreenWidth = () => {
  const setScreenWidth = useScreenStore(
    (state) => state.setScreenWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Initial set on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenWidth]);
};

export default useScreenWidth;
