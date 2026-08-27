import ReactMarkdown from "react-markdown";

import style from "./MarkdownTextArea.module.css";

interface MarkdownTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

function MarkdownTextArea({
  value,
  onChange,
  placeholder,
  required,
}: MarkdownTextAreaProps) {
  return (
    <div className={style.container}>
      <textarea
        className={style.textarea}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <div className={style.preview}>
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MarkdownTextArea;
