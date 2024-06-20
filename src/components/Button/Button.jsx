import css from "./Button.module.css";

const Button = ({ children, type = "button", ...otherProps }) => {
  return (
    <button className={css.btn} type={type} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;