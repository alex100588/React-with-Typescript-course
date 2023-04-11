import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import ProductList from "./components/ProductList";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setUsers(resp.data));
  }, []);
  // console.log(users);

  // const [category, setCategory] = useState('')

  // Effect cleanup
  // const connect = () => console.log("Connected");
  // const disconnect = () => console.log("Disconnected");

  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });

  return (
    // <div>
    //   <select name="" id="" className="form-select" onChange={(e)=>setCategory(e.target.value)}>
    //   <option value=""></option>
    //   <option value="clothing">Clothing</option>
    //   <option value="household">Household</option>
    // </select>
    // <ProductList category={category} />
    // </div>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
