import CaseCard from "../caseCard/CaseCard";
import style from "../casesGrid/CasesGrid.module.css";
const mockCases = [
  {
    id: 0,
    caseName: "Beautify",
    caseType: "Digital Transformation",
    companyName: "McKinsey & Company",
    difficulty: "Medium",
  },
  {
    id: 1,
    caseName: "Diconsa",
    caseType: "Public Sector Strategy",
    companyName: "McKinsey & Company",
    difficulty: "Medium",
  },
  {
    id: 2,
    caseName: "Electro-Light",
    caseType: "Product Launch",
    companyName: "McKinsey & Company",
    difficulty: "Medium",
  },
  {
    id: 3,
    caseName: "Talbot Trucks",
    caseType: "Market Entry",
    companyName: "McKinsey & Company",
    difficulty: "Hard",
  },
  {
    id: 4,
    caseName: "Set a Climate Strategy",
    caseType: "Sustainability Strategy",
    companyName: "BCG",
    difficulty: "Medium",
  },
  {
    id: 5,
    caseName: "Restore Customer Satisfaction",
    caseType: "Digital Strategy",
    companyName: "BCG",
    difficulty: "Medium",
  },
  {
    id: 6,
    caseName: "Support a Cloud Migration",
    caseType: "Technology Transformation",
    companyName: "BCG",
    difficulty: "Medium",
  },
  {
    id: 7,
    caseName: "Coffee Shop Co.",
    caseType: "Market Entry",
    companyName: "Bain & Company",
    difficulty: "Easy",
  },
  {
    id: 8,
    caseName: "FashionCo.",
    caseType: "Profitability",
    companyName: "Bain & Company",
    difficulty: "Medium",
  },
  {
    id: 9,
    caseName: "Promotional Planning",
    caseType: "Pricing & Promotion",
    companyName: "Kearney",
    difficulty: "Medium",
  },
  {
    id: 10,
    caseName: "Supermarket Pharmacy",
    caseType: "Profitability",
    companyName: "Oliver Wyman",
    difficulty: "Medium",
  },
  {
    id: 11,
    caseName: "Oil & Gas Price Strategy",
    caseType: "Growth Strategy",
    companyName: "Oliver Wyman",
    difficulty: "Medium",
  },
  {
    id: 12,
    caseName: "Dairy Farm",
    caseType: "Private Equity",
    companyName: "Oliver Wyman",
    difficulty: "Medium",
  },
  {
    id: 13,
    caseName: "Autism Digital Device",
    caseType: "Pricing Strategy",
    companyName: "Oliver Wyman",
    difficulty: "Medium",
  },
  {
    id: 14,
    caseName: "Poseidon Water Park",
    caseType: "Market Sizing",
    companyName: "Oliver Wyman",
    difficulty: "Medium",
  },
  {
    id: 15,
    caseName: "Digital Transformation at a Large Financial Institution",
    caseType: "Digital Transformation",
    companyName: "PwC",
    difficulty: "Hard",
  },
  {
    id: 16,
    caseName: "Exploring a Healthcare Expansion Strategy",
    caseType: "Mergers & Acquisitions",
    companyName: "PwC",
    difficulty: "Hard",
  },
  {
    id: 17,
    caseName: "Kitchen Furnishings Market Share",
    caseType: "Competitive Strategy",
    companyName: "Accenture",
    difficulty: "Medium",
  },
  {
    id: 18,
    caseName: "Fresh Prepared Meal Business",
    caseType: "Profitability",
    companyName: "Accenture",
    difficulty: "Hard",
  },
  {
    id: 19,
    caseName: "Dry Cleaners in Philadelphia",
    caseType: "Market Sizing",
    companyName: "Accenture",
    difficulty: "Easy",
  },
];

function CasesGrid() {
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
