import style from "../Button/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={style.btn}>
      {children}
    </button>
  );
}

export default Button;
