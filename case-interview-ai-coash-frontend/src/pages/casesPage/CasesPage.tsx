import CasesGrid from "../../features/cases/components/casesGrid/CasesGrid";
import CasesToolBar from "../../features/cases/components/casesToolBar/CasesToolbar";
import style from "../casesPage/CasesPage.module.css";

function CasesPage() {
  return (
    <div className={style.conatiner}>
      <div className={style.filterBar}>
        <CasesToolBar />
      </div>
      <div>
        <CasesGrid />
      </div>
    </div>
  );
}

export default CasesPage;
