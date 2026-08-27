import CaseCard from "../caseCard/CaseCard";
import style from "../casesGrid/CasesGrid.module.css";
import type { Case } from "../../../../api/cases";

interface CasesGridProps {
  cases: Case[];
  onOpenDetails: (caseId: number) => void;
  onDeleteCase: (caseId: number) => void;
}

function CasesGrid({ cases, onOpenDetails, onDeleteCase }: CasesGridProps) {
  return (
    <div className={style.caseCardsRow}>
      {cases.map((caseItem) => (
        <div className={style.caseCardsCol} key={caseItem.id}>
          <CaseCard
            id={caseItem.id}
            caseName={caseItem.caseName}
            caseType={caseItem.caseType}
            difficulty={caseItem.difficulty}
            caseContent={caseItem.caseContent}
            structuredMetadata={caseItem.structuredMetadata}
            onOpenDetails={onOpenDetails}
            onDeleteCase={onDeleteCase}
          />
        </div>
      ))}
    </div>
  );
}

export default CasesGrid;
