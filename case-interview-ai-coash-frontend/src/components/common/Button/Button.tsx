import style from "../Button/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function Button({
  children,
  className = "btn",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.btn} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
