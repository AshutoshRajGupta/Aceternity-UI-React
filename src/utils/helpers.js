export function hexToRgb(hex) {
  // Remove the '#' symbol from the beginning of the hex string
  hex = hex.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  return { r, g, b };
}

export function genRandomNumbers(min, max, count) {
  const randomNumbers = [];

  for (let i = 0; i < count; i++) {
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Add the random number to the array
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}
