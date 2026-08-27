import style from "../DropdownList/DropdownList.module.css";

interface DropdownListProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function DropdownList({ options, value, onChange }: DropdownListProps) {
  return (
    <div className={style.container}>
      <select
        className={style.dropdown}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownList;
