import { useState } from "react";
import TextField from "../../../../components/common/TextField/TextField";
import Button from "../../../../components/common/Button/Button";
import style from "../addCaseForm/AddCaseForm.module.css";
import DropdownList from "../../../../components/common/DropdownList/DropdownList";
import type { CaseCreate } from "../../../../api/cases";
import MarkdownTextArea from "../../../../components/common/TextArea/TextArea";

export interface FieldProps {
  name: string;
  label: string;
  fieldType: "text" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  value?: string;
}

interface AddCaseFormProps {
  fields: FieldProps[];
  onSubmit: (data: CaseCreate) => Promise<void>;
}

function AddCaseForm({ fields, onSubmit }: AddCaseFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCase: CaseCreate = {
      caseName: formData.caseName,
      caseType: formData.caseType,
      difficulty: formData.difficulty,
      caseContent: formData.caseContent,
      structuredMetadata: {
        company_name: formData.companyName,
      },
    };

    await onSubmit(newCase);
  };

  return (
    <form className={style.modalBody} onSubmit={handleSubmit}>
      {fields.map((field, index) => {
        if (field.fieldType === "text") {
          return (
            <div className={style.fieldLabel} key={field.name}>
              <p>{field.label}</p>

              <TextField
                type="text"
                placeholder={field.placeholder}
                value={formData[field.name] ?? ""}
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            </div>
          );
        }
        if (field.fieldType === "textarea") {
          return (
            <div className={style.fieldLabel} key={field.name}>
              <p>{field.label}</p>

              <MarkdownTextArea
                value={formData[field.name] ?? ""}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(value) => handleChange(field.name, value)}
              />
            </div>
          );
        }
        if (field.fieldType === "select") {
          return (
            <div className={style.fieldLabel} key={field.name}>
              <p>{field.label}</p>

              <DropdownList
                options={field.options ?? []}
                value={formData[field.name] ?? ""}
                onChange={(value) => handleChange(field.name, value)}
              />
            </div>
          );
        }
      })}
      <Button type="submit">Add Case</Button>
    </form>
  );
}

export default AddCaseForm;
