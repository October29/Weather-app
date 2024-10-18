import style from "./appContainer.module.css";
import SearchCity from "../searchCity/SearchCity";
import CityCard from "../cityCard/CityCard";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import weatherImages from "../../../data/weatherImages.json";

const AppContainer = () => {
  const { citySubmit, weatherData, backgroundImage, setBackgroundImage } = useContext(GlobalContext);

  useEffect(() => {
    const getBackgroundImage = (id) => {
      return weatherImages[id] || 'https://i.ibb.co/DMr56V9/default-image.jpg'; // Imagen por defecto si no hay coincidencia
    };

    // Verificar que weatherData no sea null y tenga datos
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const image = getBackgroundImage(weatherData.weather[0].id);
      setBackgroundImage(image); // Actualizar el estado con la nueva imagen
    } else {
      // Si no hay datos, podrías establecer una imagen por defecto
      setBackgroundImage('https://i.ibb.co/DMr56V9/default-image.jpg');
    }
  }, [citySubmit, weatherData]); // Añadir weatherData a las dependencias

  return (
    <div
      className={style.appContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SearchCity />
      <CityCard />
    </div>
  );
};

export default AppContainer;
