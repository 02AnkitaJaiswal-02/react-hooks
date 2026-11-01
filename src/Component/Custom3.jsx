import useCustom from "./useCustom";

function Custom3() {
  const width = useCustom();

  return <h1>Window Width: {width}px</h1>;
}

export default Custom3;