import { useEffect, useState } from "react";

function useCustom() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
      console.log("Width updated:", window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
}

export default useCustom;