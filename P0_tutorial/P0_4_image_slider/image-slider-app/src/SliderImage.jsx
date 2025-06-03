import { useState } from "react";
import ImageURLs from "./image";
import { useEffect, useCallback } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageIndex = ImageURLs.length - 1;

  const gotoPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const gotoNext = useCallback(() => {
    if (currentIndex >= imageIndex ) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [imageIndex, currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      gotoNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [gotoNext]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer">
          <img className="img" src={ImageURLs[currentIndex].url} alt="" />
          <button className="btn btnPrev" onClick={gotoPrev}>
            Prev
          </button>
          <button className="btn btnNext" onClick={gotoNext}>
            Next
          </button>
        </div>
        <div className="progress">
          {[...Array(imageIndex + 1)].map((_, index) => {
            return (
              <span
                key={index}
                className={index <= currentIndex ? "dot active" : "dot"}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
