import { useState } from "react";
import GetData from "./components/GetData"
import ExpenseList from "./components/ExpenseList"
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {

  const [SelectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      description: "milk",
      amount: 15,
      category: "Groceries",
    },
    {
      id: 2,
      description: "eggs",
      amount: 6.50,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 30,
      category: "Utilities",
    },
    {
      id: 4,
      description: "movie",
      amount: 200,
      category: "Entertainment",
    },
  ]);

  const remover = (ind: number) => {
    setData(data.filter((item) => item.id !== ind))
  }

  const filteredData = SelectedCategory ? data.filter(item => item.category === SelectedCategory) : data;

  return (
    <>
      <GetData len={data.length} onClick={(newData) => setData([...data, newData])}/>
      <ExpenseFilter onSelect={(data) => setSelectedCategory(String(data))}/>
      <ExpenseList data={filteredData} onDelete = {(ind: number) => remover(ind)} />
    </>
  )
}

export default App