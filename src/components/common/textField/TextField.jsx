import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import style from "./textField.module.css";

const TextField = () => {
  const {searchQuery, setSearchQuery} = useContext(GlobalContext);

  const textHandle = (e) => {
    setSearchQuery(e.target.value);
  }
  return(
    <>
    <input
    type="text"
    value={searchQuery}
    placeholder="Ingrese ciudad"
    onChange={(e) => textHandle(e)}
    />
    </>
  );
};

export default TextField;