const capitalizeFirstLetter = (string) => {
  if (!string) return string; // Maneja el caso de strings vacíos
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;