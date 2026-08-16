import CaseCard from "../caseCard/CaseCard";
import style from "../casesGrid/CasesGrid.module.css";

interface CaseItem {
  id: number;
  caseName: string;
  caseType: string;
  companyName: string;
  difficulty: string;
}

interface CasesGridProps {
  mockCases: CaseItem[];
}

function CasesGrid({ mockCases }: CasesGridProps) {
  return (
    <div className={style.caseCardsRow}>
      {mockCases.map((caseItem) => (
        <div className={style.caseCardsCol} key={caseItem.id}>
          <CaseCard
            id={caseItem.id}
            caseName={caseItem.caseName}
            caseType={caseItem.caseType}
            companyName={caseItem.companyName}
            difficulty={caseItem.difficulty}
          />
        </div>
      ))}
    </div>
  );
}

export default CasesGrid;
