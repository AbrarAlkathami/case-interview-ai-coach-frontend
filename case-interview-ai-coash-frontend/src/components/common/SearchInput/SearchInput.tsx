import style from "./SearchInput.module.css";
interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
}: SearchInputProps) {
  return (
    <input
      className={style.searchInput}
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default SearchInput;
