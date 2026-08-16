import style from "./TextField.module.css";

interface TextFieldProps {
  placeholder: string;
  type: "text" | "email" | "password";
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({
  placeholder,
  type,
  value,
  required = false,
  onChange,
}: TextFieldProps) {
  return (
    <input
      required={required}
      className={style.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
