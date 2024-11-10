import { useState } from "react";
import GetData from "./components/GetData"
import ShowData from "./components/ShowData"

const App = () => {

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

  return (
    <>
      <GetData len={data.length} onClick={(newData) => setData([...data, newData])}/>
      <ShowData data={data} onClickBtn = {(ind: number) => remover(ind)} />
    </>
  )
}

export default App