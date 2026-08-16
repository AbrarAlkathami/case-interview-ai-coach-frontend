import style from "../Button/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({ children, className = "btn", type = "button" }: ButtonProps) {
  return (
    <button type={type} className={`${style.btn} ${className ?? ""}`}>
      {children}
    </button>
  );
}

export default Button;
