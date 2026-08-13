import style from "../casesToolBar/CasesToolBar.module.css";
import CaseFilter from "../caseFilter/CaseFilter";
import Button from "../../../../components/common/Button/Button";
function CasesToolBar() {
  return (
    <div className={style.caseToolBarContainer}>
      <div className={style.caseFilter}>
        <CaseFilter />
      </div>
      <div className={style.addCaseBtn}>
        <Button>+ Case</Button>
      </div>
    </div>
  );
}

export default CasesToolBar;
