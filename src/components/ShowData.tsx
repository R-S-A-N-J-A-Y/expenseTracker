import { useState } from "react";
import { FaX } from "react-icons/fa6";

interface Props {
  data: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[],
  onClickBtn: (data: number) => void;
};

const ShowData = ({ data, onClickBtn }: Props) => {
  const [selectedId, setSelectedId] = useState("");

  const filterData = () => {
    if (selectedId == "All")
        return data
    return data.filter((item) => item.category === selectedId);
  };

  const filteredData = filterData();
  const totExpense = filteredData.reduce((sum, item) => sum + item.amount, 0);


  return (
    <>
      <select
        className="mt-2 form-select mb-3"
        aria-label="Default select example"
        onChange={(event) => {
          setSelectedId(event.target.value);
          console.log(event.target.value);
        }}
      >
        <option defaultValue={"Select the Option"} value="0"></option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="All">All</option>
      </select>

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Description</td>
            <td>Amount</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {filterData().map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <button
                key={item.id}
                type="button"
                className="btn btn-danger btn-sm m-2 "
                style={{ width: "30px", height: "30px", backgroundColor: 'red'  }}
                onClick = {() => onClickBtn(item.id)}
              >
                <FaX color="white" size={"15px"} className="mb-2 me-1" />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      { filteredData.length > 0 && <p>Total Expense: {totExpense}</p>}
    </>
  );
};

export default ShowData;
