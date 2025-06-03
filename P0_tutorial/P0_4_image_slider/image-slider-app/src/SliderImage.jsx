import { useState } from "react"
import ImageURLs from "./image"


const ImageSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const imageCount = ImageURLs.length - 1

  
  const gotoPrev = () => {
    if (currentIndex === 0 ) {
        setCurrentIndex(imageCount - 1)
    } else {
        setCurrentIndex(currentIndex - 1)
    }
    console.log(currentIndex, imageCount)
  }

  const gotoNext = () => {
    if (currentIndex >= imageCount) {
        setCurrentIndex(0)
    } else{
        setCurrentIndex(currentIndex + 1)
    }
    console.log(currentIndex, imageCount)
  }

  return (
    <div className="container">
        <div className="wrapper">
            <div className="imageContainer">
                <img className="img" src={ImageURLs[currentIndex].url} alt="" />
                <button className="btn btnPrev" onClick={gotoPrev}>Prev</button>
                <button className="btn btnNext" onClick={gotoNext}>Next</button>
            </div>
        </div>
    </div>
  )

}

export default ImageSlider;