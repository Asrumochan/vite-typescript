import { useState } from "react";
import { CustomComponent } from "./CustomComponent";
import People from "./types";


function App() {
  let [count, setCount] = useState(0);
  let dffs;

  dffs = 0;
  dffs = "";
  let name : string = "naiyar";  
  let todoList: string[] = ["asru"];
  let random: number;
  let person : People = {
    name: "",
    age: 10,
  };
  let group: People[] = [
    {
      name: "",
      age: 10,
    }

  ]

  const increaseCount = () : void => {
    setCount(prev => prev+1)
  }
  return (
    <div>
      {"Name : "+ name} <br />
      {"count : "+ count} <br />
      {
        todoList.map((x) => x.toLowerCase())
      }
      <h1>Component</h1>
      <CustomComponent height={person.height}/>
      <br />
      <button onClick={() => increaseCount()}>Increase</button>
      <h4>Count : {count}</h4>
    </div>
  )
}

export default App
