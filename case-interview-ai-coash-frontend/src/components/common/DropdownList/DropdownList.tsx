import style from "../DropdownList/DropdownList.module.css";
interface DropdownListProps {
  options: string[];
}
function DropdownList({ options }: DropdownListProps) {
  return (
    <div className={style.container}>
      <select className={style.dropdown}>
        {options?.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}
export default DropdownList;
