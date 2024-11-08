import { useState } from "react";

interface Props{
    data: {  
        description: string,
        amount: number,
        category: string,
    }[]
};

const ShowData = ({ data }: Props) => {
  const [selectedId, setSelectedId] = useState("");


  const filterData = () => {
    return data.filter((item) => item.category === selectedId);
  };
  

  return (
    <>
      <select
        className="mt-2 form-select mb-3"
        aria-label="Default select example"
        onChange={(event) => {
          setSelectedId(event.target.value);
        }}
      >
        <option defaultValue={"Select the Option"} value="0"></option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
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
            <tr key={item.description}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ;
    </>
  );
};

export default ShowData;
