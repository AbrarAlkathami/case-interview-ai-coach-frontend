import Badge from "../../../../components/common/Badge/Badge";
import Button from "../../../../components/common/Button/Button";
import style from "../caseCard/CaseCard.module.css";

export interface CaseProps {
  id: number;
  caseName: string;
  caseType: string;
  companyName: string;
  difficulty: string;
}

function CaseCard({ caseName, caseType, companyName, difficulty }: CaseProps) {
  const caseDetails = [caseType, difficulty, companyName];
  return (
    <div className={style.caseCard}>
      <h5 className={style.caseCardTitle}>{caseName}</h5>
      <div className={style.caseCardBadges}>
        {caseDetails.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </div>
      <div className={style.caseCardActions}>
        <Button>{companyName}</Button>
      </div>
    </div>
  );
}

export default CaseCard;
