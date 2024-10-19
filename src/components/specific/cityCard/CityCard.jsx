import { useContext, useEffect } from "react";
import getWeatherData from "../../../services/weatherAPI";
import { GlobalContext } from "../../../contexts/GlobalContext";
import style from "./cityCard.module.css";
import unixTo12Hour from "../../../utils/unixTo12Hour";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import iconGenerator from "../../../utils/iconGenerator";
import getIconFlag from "../../../utils/getIconFlag";

const CityCard = () => {
  const { city, weatherData, setWeatherData, citySubmit, setCitySubmit } =
    useContext(GlobalContext);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(city, "es");
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [citySubmit]);
  

  return (
    <div className={style.card}>
      {weatherData ? (
        <div className={style.card_content}>
          <div className={style.main_data_container}>
            <div className={style.tittleContainer}>
              <h1 className={style.city_name} >{weatherData.name}</h1>
              <h2>{getIconFlag(weatherData.sys.country)}</h2>
            </div>
            <p>{weatherData.main.temp} °C</p>
            <div className={style.description}>
              <p>{capitalizeFirstLetter(weatherData.weather[0].description)} </p>
              <img className={style.icon} src={iconGenerator(weatherData.weather[0].icon)} alt={weatherData.weather[0].description} /> 
            </div>
          </div>
          <div className={style.hours_container}>
            <div className={style.sunrise}>
              <p>Amanecer</p>
              <p>{unixTo12Hour(weatherData.sys.sunrise)} </p>
            </div>
            <div className={style.sunset}>
              <p>Atardecer</p>
              <p>{unixTo12Hour(weatherData.sys.sunset)} </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CityCard;
