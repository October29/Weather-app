const getIconFlag = (codigoPais) => {
  return [...codigoPais].map(letra => String.fromCodePoint(letra.charCodeAt(0) + 127397)).join('');
}

export default getIconFlag;