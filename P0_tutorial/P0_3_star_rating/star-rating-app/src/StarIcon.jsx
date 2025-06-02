

const StarIcon = ({ width = 24, height = 24, className = "star-svg", color = "currentColor" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth="0"
  >
    <path d="M12 .587l3.668 7.431 8.204 1.191-5.945 5.792 1.406 8.176L12 18.896l-7.333 3.857 1.406-8.176-5.945-5.792 8.204-1.191L12 .587z" />
  </svg>
);

export default StarIcon;
