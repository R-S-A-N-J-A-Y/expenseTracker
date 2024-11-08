import { useState } from "react";
import GetData from "./components/getData"
import ShowData from "./components/showData"

const App = () => {

  const [data, setData] = useState([
    {
      description: "milk",
      amount: 1,
      category: "Groceries",
    },
    {
      description: "eggs",
      amount: 10,
      category: "Groceries",
    },
    {
      description: "Electricity",
      amount: 30,
      category: "Utilities",
    },
    {
      description: "movie",
      amount: 1,
      category: "Entertainment",
    },
  ]);

  return (
    <>
      <GetData onClick={(newData) => setData([...data, newData])}/>
      <ShowData data={data}/>
    </>
  )
}

export default App