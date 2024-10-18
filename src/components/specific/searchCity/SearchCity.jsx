import { useContext } from "react";
import Button from "../../common/button/Button"
import TextField from "../../common/textField/TextField"
import { GlobalContext } from "../../../contexts/GlobalContext";
import style from "./searchCity.module.css"

const SearchCity = () => {

  const {searchQuery, setSearchQuery, setCity, citySubmit, setCitySubmit} = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setCitySubmit(!citySubmit);
    setCity(searchQuery);
    setSearchQuery("");
  }

  return(
    <form className={style.form_data} onSubmit={(e) =>submitHandler(e)}>
      <TextField />
      <Button textButton="Enviar" />
    </form>
  );
};

export default SearchCity;