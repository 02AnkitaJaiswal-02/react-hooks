import { useEffect, useState } from "react";

function Custom2() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
      
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <aside>
      <h2>Sidebar Width: {width}px</h2>
    </aside>
  );
}

export default Custom2;