import ReactMarkdown from "react-markdown";

interface CaseContentProps {
  content: string;
}

function CaseContent({ content }: CaseContentProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default CaseContent;
