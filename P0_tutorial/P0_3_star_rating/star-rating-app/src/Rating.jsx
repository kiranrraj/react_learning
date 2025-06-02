import { useState } from "react"; 
import StarIcon from "./StarIcon"; 

const selectedStarColor = "gold"; 
const hoveredStarColor = "green"; 
const emptyStarColor = "lightgray"; 

const Rating = () => {
  const star_count = 5;

  // State variable to store the user's selected rating.
  const [rating, setRating] = useState(0);

  // State variable to store the temporary rating based on mouse hover.
  const [hoverRating, setHoverRating] = useState(0);

  // Event handler function for when a star is clicked.
  // It updates the 'rating' state with the value of the clicked star.
  const handleRating = (rating) => {
    setRating(rating);
  };

  // Event handler function for when the mouse enters a star's area.
  // It updates the 'hoverRating' state to the value of the star being entered.
  const handleMouseEnter = (enteredStarValue) => {
    setHoverRating(enteredStarValue);
    // console.log(enteredStarValue);
  };

  // Event handler function for when the mouse leaves the stars container.
  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating-container">
      <div className="starts" onMouseLeave={handleMouseLeave}>
        {/* Generates an array of 'star_count' elements (e.g., [undefined, undefined, ...])
            and then maps over it to render each star. */}
        {[...Array(star_count)].map((_, index) => {
          const starIndex = index + 1;
          let starFillColor = emptyStarColor;

          // Logic to determine the fill color of the current star:
          // Priority 1: Check if a hover is active.
          if (hoverRating > 0) {
            // If the current star's index is less than or equal to the hoverRating,
            // it means this star should be filled with the hovered color.
            if (starIndex <= hoverRating) {
              starFillColor = hoveredStarColor;
            }
          } else {
            // Priority 2: If no hover is active, check the selected rating.
            // If the current star's index is less than or equal to the actual rating,
            // it means this star should be filled with the selected color.
            if (starIndex <= rating) {
              starFillColor = selectedStarColor;
            }
          }

          return (
            <span
              // Dynamically applies CSS classes based on whether the star should be "filled".
              // Note: The logic `starIndex <= (rating || hoverRating)` determines if `star-filled` class is applied.
              className={
                starIndex <= (rating || hoverRating)
                  ? "star star-filled" // Applies 'star-filled' if star is covered by rating or hover.
                  : "star"
              }
              key={starIndex} 
              // When clicked, it sets the main 'rating' state to this star's index.
              onClick={() => {
                handleRating(starIndex);
              }}
              onMouseEnter={() => {
                handleMouseEnter(starIndex);
              }}
            >
              <StarIcon color={starFillColor} />
            </span>
          );
        })}
      </div>
      <p className="ratingPara">
        Current Rating: {rating !== 0 ? rating : 0}/5
      </p>
    </div>
  );
};

export default Rating;