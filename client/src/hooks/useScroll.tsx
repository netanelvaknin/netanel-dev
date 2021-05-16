import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// The purpose of this hook is to scroll to the top
// of the page every route change
export const useScroll = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
