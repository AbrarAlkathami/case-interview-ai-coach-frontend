import { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import style from "../Modal/Modal.module.css";
import DropdownList from "../DropdownList/DropdownList";

export interface FieldProps {
  name: string;
  label: string;
  fieldType: "text" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  value?: string;
}

interface ModalProps {
  fields: FieldProps[];
  onClose: () => void;
}

function Modal({ fields, onClose }: ModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <Button type="button" onClick={onClose}>
            {" "}
            X{" "}
          </Button>
        </div>
        <div className={style.modalBody}>
          {fields.map((field, index) => {
            if (field.fieldType === "text") {
              return (
                <>
                  <div className={style.fieldLabel}>
                    <p>{field.label}</p>
                    <TextField
                      type="text"
                      placeholder={field.placeholder}
                      value={formData[field.name] ?? ""}
                      required={field.required}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      key={index}
                    />
                  </div>
                </>
              );
            }
            if (field.fieldType === "select") {
              return (
                <>
                  <div className={style.fieldLabel}>
                    <p>{field.label}</p>
                    <DropdownList key={index} options={field.options ?? []} />
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className={style.modalFooter}>
          <Button type="submit" onClick={onClose}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
