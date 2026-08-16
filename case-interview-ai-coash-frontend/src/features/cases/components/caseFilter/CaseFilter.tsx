import SearchInput from "../../../../components/common/SearchInput/SearchInput";

interface CaseFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function CaseFilter({ searchQuery, onSearchChange }: CaseFilterProps) {
  return (
    <SearchInput
      placeholder="Search cases..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default CaseFilter;
