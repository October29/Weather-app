import style from "./button.module.css";

const Button = ({textButton}) => {

  return(
    <button className={style.button_style} >{textButton}</button>
  );
};

export default Button;