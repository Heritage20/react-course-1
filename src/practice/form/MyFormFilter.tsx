import categories from "../../expense-tracker/categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const MyFormFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      id="category"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default MyFormFilter;
