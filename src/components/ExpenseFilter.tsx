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
        <option value="" selected>
          All the Categories
        </option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
