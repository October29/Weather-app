import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState('cartagena');
  const [weatherData, setWeatherData] = useState(null)
  const [backgroundImage, setBackgroundImage] = useState('path/to/default-image.jpg'); 
  const [citySubmit, setCitySubmit] = useState(false);

  return (
    <GlobalContext.Provider value={{
      searchQuery, setSearchQuery,
      city, setCity,
      weatherData, setWeatherData,
      citySubmit, setCitySubmit,
      backgroundImage, setBackgroundImage //background image app 
    }} >
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalProvider};