import { useState } from "react";
import type { ChangeEvent } from "react";
import style from "../caseFilter/CaseFilter.module.css";

interface FilterProps {
  search?: string;
}

function CaseFilter() {
  const [search, setSearch] = useState<FilterProps | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ search: e.target.value });
  };

  return (
    <input
      className={style.searchInput}
      type="search"
      placeholder="Search cases..."
      value={search?.search ?? ""}
      onChange={handleChange}
    />
  );
}
export default CaseFilter;
