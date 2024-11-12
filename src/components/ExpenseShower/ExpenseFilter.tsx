import Categories from "../Categories";

interface Props {
  onSelect: (SelectedCatogory: String) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <div>
      <select
        className="mt-2 form-select mb-3"
        onChange={(event) => onSelect(event.target.value)}
      > 
        <option defaultValue={""} value="" >All the Categories</option>
        {Categories.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ExpenseFilter;
