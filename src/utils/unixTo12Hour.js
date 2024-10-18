const unixTo12Hour = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // La hora 0 debería ser 12
  const strTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  return strTime;
};

export default unixTo12Hour;