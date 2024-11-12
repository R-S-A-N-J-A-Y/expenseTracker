interface Data {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  data: Data[];
  onDelete: (data: number) => void;
}

const ExpenseList = ({ data, onDelete }: Props) => {
  if (data.length == 0)
    return 
  return (
    <>
      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  key={item.id}
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{data.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
