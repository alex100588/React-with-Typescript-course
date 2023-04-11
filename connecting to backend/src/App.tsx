import { useEffect, useRef, useState } from "react";
// import ProductList from "./components/ProductList";

function App() {
  // const [category, setCategory] = useState('')
  const connect = () => console.log("Connected");
  const disconnect = () => console.log("Disconnected");

  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return (
    <div>
      {/* <select name="" id="" className="form-select" onChange={(e)=>setCategory(e.target.value)}>
      <option value=""></option>
      <option value="clothing">Clothing</option>
      <option value="household">Household</option>
    </select>
    <ProductList category={category} /> */}
    </div>
  );
}

export default App;
