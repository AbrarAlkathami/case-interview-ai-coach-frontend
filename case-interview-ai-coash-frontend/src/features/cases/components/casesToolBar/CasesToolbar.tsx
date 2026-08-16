import style from "../casesToolBar/CasesToolBar.module.css";
import CaseFilter from "../caseFilter/CaseFilter";
import Button from "../../../../components/common/Button/Button";

interface CasesToolBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function CasesToolBar({ searchQuery, onSearchChange }: CasesToolBarProps) {
  return (
    <div className={style.caseToolBarContainer}>
      <div className={style.caseFilter}>
        <CaseFilter searchQuery={searchQuery} onSearchChange={onSearchChange} />
      </div>

      <div className={style.addCaseBtn}>
        <Button>+ Case</Button>
      </div>
    </div>
  );
}

export default CasesToolBar;
