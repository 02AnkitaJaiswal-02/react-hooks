import { useEffect, useState } from "react";

function Custom1() {
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
    <div>
      <h1>Window Width: {width}px</h1>
      <p>Browser window ka size change karke dekho.</p>
    </div>
  );
}
export default Custom1;