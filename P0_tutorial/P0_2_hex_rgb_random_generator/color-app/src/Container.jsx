import { useState } from "react";
import { generateRandomHexCode, generateRandomRGB } from "./color_generator";

const Container = () => {
  const [colorText, setColorText] = useState("");
  const [colorStyle, setColorStyle] = useState("#fffff");

  function handleRGBCode() {
    const rgbCode = generateRandomRGB();
    setColorText(rgbCode);
    setColorStyle(rgbCode);
    console.log(rgbCode);
  }

  function handleHexCode() {
    const hexCode = generateRandomHexCode();
    setColorText(hexCode);
    setColorStyle(hexCode);
    console.log(hexCode);
  }

  function handleReset() {
    setColorText("");
    setColorStyle("#fff");
  }

  return (
    <div className="container" style={{ backgroundColor: colorStyle }}>
      <div className="btnBlock">
        <button className="hexCode btn" onClick={handleHexCode}>
          Hex Color
        </button>
        <button className="rgb btn" onClick={handleRGBCode}>
          RGB Color
        </button>
        <button className="reset btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <p id="colorPara">{colorText}</p>
    </div>
  );
};

export default Container;
