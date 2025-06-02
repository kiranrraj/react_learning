export const generateRandomRGB = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

export const generateRandomHexCode = () => {
    let val = Math.floor(Math.random() * 16777215); 
  return '#' + val.toString(16).padStart(6, '0');
}
