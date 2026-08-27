import { useState } from "react";
import CasesGrid from "../../features/cases/components/casesGrid/CasesGrid";
import CasesToolBar from "../../features/cases/components/casesToolBar/CasesToolbar";
import style from "../casesPage/CasesPage.module.css";
import Modal from "../../components/common/Modal/Modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCases, addCase, deleteCase, type Case } from "../../api/cases";
import AddCaseForm, {
  type FieldProps,
} from "../../features/cases/components/addCaseForm/AddCaseForm";
import CaseContent from "../../features/cases/components/caseContent/CaseContent";
import type { CaseCreate } from "../../api/cases";

const fields: FieldProps[] = [
  {
    name: "caseName",
    label: "Case Name",
    fieldType: "text",
    placeholder: "Enter case name",
    required: true,
  },
  {
    name: "caseType",
    label: "Case Type",
    fieldType: "select",
    options: ["Market Entry", "Profitability", "Market Sizing"],
    required: true,
  },
  {
    name: "companyName",
    label: "Company Name",
    fieldType: "text",
    placeholder: "Enter company name",
  },
  {
    name: "difficulty",
    label: "Difficulty",
    fieldType: "select",
    options: ["Easy", "Medium", "Hard"],
    required: true,
  },
  {
    name: "caseContent",
    label: "Case Content",
    fieldType: "textarea",
    placeholder: "Enter case content",
    required: true,
  },
];

function CasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState<number | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const queryClient = useQueryClient();

  const handleAddCase = () => {
    setIsModalOpen(true);
  };

  const handleOpenDetails = (caseId: number) => {
    setSelectedCaseId(caseId);
    setIsDetailsOpen(true);
  };

  const { data: cases = [], isLoading } = useQuery({
    queryFn: () => fetchCases(),
    queryKey: ["cases"],
  });

  const { mutateAsync: addCaseMutation } = useMutation({
    mutationFn: addCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    },
  });
  const { mutateAsync: deleteCaseMutation } = useMutation({
    mutationFn: deleteCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    },
  });

  const handleDeleteCase = async (caseId: number) => {
    setSelectedCaseId(caseId);
    await deleteCaseMutation(caseId);
  };
  const handleSubmitCase = async (caseData: CaseCreate) => {
    await addCaseMutation(caseData);

    setIsModalOpen(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredCases = cases.filter((caseItem) =>
    caseItem.caseName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const selectedCase = cases.find((caseItem) => caseItem.id === selectedCaseId);

  return (
    <div className={style.conatiner}>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AddCaseForm fields={fields} onSubmit={handleSubmitCase} />
        </Modal>
      )}
      {isDetailsOpen && selectedCase && (
        <Modal onClose={() => setIsDetailsOpen(false)}>
          <CaseContent content={selectedCase.caseContent} />
        </Modal>
      )}

      <div className={style.filterBar}>
        <CasesToolBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddCase={handleAddCase}
        />
      </div>
      <div>
        <CasesGrid
          cases={filteredCases}
          onOpenDetails={handleOpenDetails}
          onDeleteCase={handleDeleteCase}
        />
      </div>
    </div>
  );
}

export default CasesPage;
