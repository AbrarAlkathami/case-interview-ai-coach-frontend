import Badge from "../../../../components/common/Badge/Badge";
import Button from "../../../../components/common/Button/Button";
import style from "../caseCard/CaseCard.module.css";
import type { Case } from "../../../../api/cases";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

interface CaseCardProps extends Case {
  onOpenDetails: (caseId: number) => void;
  onDeleteCase: (caseId: number) => void;
}

function CaseCard({
  id,
  caseName,
  caseType,
  difficulty,
  caseContent,
  structuredMetadata,
  onOpenDetails,
  onDeleteCase,
}: CaseCardProps) {
  const logo = "/assets/mckiensy.jpeg";
  const metadata = Object.values(structuredMetadata)[0];

  const companyName =
    typeof metadata === "object" &&
    metadata !== null &&
    "company_name" in metadata
      ? String(metadata.company_name)
      : null;

  const caseDetails = [
    caseType,
    difficulty,
    ...(companyName ? [companyName] : []),
  ];

  return (
    <div className={style.caseCard}>
      <div
        className={style.cardHeader}
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className={style.caseActions}>
          <Button onClick={() => onOpenDetails(id)}>
            <FaRegEye />
          </Button>
        </div>
        <div className={style.caseActions}>
          <Button onClick={() => onDeleteCase(id)}>
            <AiOutlineDelete />
          </Button>
        </div>
      </div>
      <h5 className={style.caseCardTitle}>{caseName}</h5>
      <div className={style.caseCardBadges}>
        {caseDetails.map((item, index) => (
          <Badge key={`${item}-${index}`} text={item} />
        ))}
      </div>
      <div className={style.caseCardActions}>
        <Button>Start</Button>
      </div>
    </div>
  );
}

export default CaseCard;
